# Event Ops Manager — Product Requirements Document (PRD)

**Owner:** pkapnidis  
**Editor/Partner:** ChatGPT (GPT-5 Thinking)  
**Version:** v0.1  
**Date:** 2025-10-19  

---

## 1) Product summary
A web app to replace ad‑hoc Excel workflows for staffing events. It lets managers import/export employee lists, create events with multiple parameters, assign roles to employees for a specific event, delete events, and save reusable event templates. It also records event parameters and role assignments for audit and faster future planning.

---

## 2) Goals
1. Import and export employees quickly without data loss (CSV and XLSX).  
2. Create events with structured parameters.  
3. Assign roles per event to one or more employees, with basic validation.  
4. Delete events safely with confirmation and audit logging.  
5. Save event templates and reuse them to spin up new events faster.  
6. Keep a clean history for reporting.

### Non‑goals (v1)
- Full payroll and time‑tracking.  
- Advanced constraint solver for scheduling.  
- Mobile app.  
- SSO beyond email/password in v1.

---

## 3) Users and use cases
**Primary user:** Workforce manager / shift scheduler.  
**Secondary users:** HR, site supervisors (read only in v1).

**Key use cases:**  
- Bulk load 250+ employees from Excel.  
- Create an “Event” with date/time, location, client, and required roles.  
- Assign specific employees to roles and export the roster.  
- Save an Event as a Template for repeat jobs.  
- Clone a prior event, tweak, and publish.  
- Delete a canceled event with a reason captured.

---

## 4) Scope (v1)
- Employee directory with import/export.  
- Event creation with parameters.  
- Role definitions per event.  
- Assignment UI and validation.  
- Templates CRUD.  
- Event delete with audit.  
- Basic reports: export assignments for a date range.  
- Admin, Planner, Viewer roles.

---

## 5) Functional requirements

### 5.1 Employees
- Import employees from CSV/XLSX.  
- Map columns during import with preview and error report.  
- Required fields: `full_name`, `external_id` (optional but recommended), `email` or `phone` (at least one), `status` (active/inactive).  
- Optional fields: `role_tags` (comma separated), `notes`, `site_clearances`, `skills` (tags).  
- Export all or filtered employees to CSV/XLSX.

### 5.2 Events
- Create event with:  
  - `title`  
  - `client`  
  - `location` (text + optional map link)  
  - `start_datetime`, `end_datetime`, `timezone`  
  - `notes`  
  - `roles_required` list (each with `role_name`, `quantity`, `start_offset`, `end_offset`, `skills_required` tags).  
- View event details page with assignments and template actions.  
- Delete event with confirmation, reason, and soft‑delete flag.

### 5.3 Roles and assignments
- For each role line item, assign one employee per seat.  
- Bulk assign by search and filter.  
- Validation rules in v1:  
  - Employee must be active.  
  - No overlapping assignment for the same employee across events whose times intersect.  
  - Optional check: minimum rest between assignments (configurable, default off).  
- Visual status per seat: Unfilled, Tentative, Confirmed.  
- Export event roster to CSV/XLSX.

### 5.4 Templates
- Save any event as a template.  
- Template contains header fields and roles_required but no people.  
- Create new event from template and set exact times.  
- List, edit, and delete templates.

### 5.5 Audit and history
- Record who created/updated/deleted events, when, and what changed.  
- Keep assignment change log per event.

### 5.6 Permissions (v1)
- **Admin:** full access.  
- **Planner:** manage employees, events, assignments, templates.  
- **Viewer:** read‑only on employees and events.

---

## 6) Non‑functional requirements
- Fast import for 5k rows in under 15 seconds locally.  
- Deterministic validation feedback during import.  
- Access control enforced server side.  
- All changes durable in the database with migrations.  
- Usable on desktop browsers.  
- Simple, searchable UI.

---

## 7) User stories
1. As a Planner, I import 300 employees from an Excel file and fix only the rows with errors.  
2. As a Planner, I create a “Football Match” event with four roles and 18 total seats.  
3. As a Planner, I assign people by filtering for skill “First Aid”.  
4. As a Planner, I turn a past event into a template to reuse next month.  
5. As an Admin, I delete a canceled event and keep the reason logged.  
6. As a Viewer, I export a clean roster for the client.

---

## 8) Flows

### 8.1 Import employees
Upload file → Column mapping screen (auto‑detect) → Validation preview (errors grouped) → Import summary → Directory updated.

### 8.2 Create event from template
Templates → Choose template → Set date/time/location → Confirm roles and quantities → Create event.

### 8.3 Assign roles
Event page → Roles list with seat counters → Search employees → Assign per seat → Status badges update → Export roster.

### 8.4 Delete event
Event page → Delete → Confirm modal with reason → Soft‑delete → Events list hides by default; filter can show deleted.

---

## 9) Data model (Proposed)

- **Employee**  
  - `id` (UUID)  
  - `external_id` (string, unique, nullable)  
  - `full_name` (string)  
  - `email` (string, nullable)  
  - `phone` (string, nullable)  
  - `status` (enum: active, inactive)  
  - `skills` (string[] tags)  
  - `role_tags` (string[] tags)  
  - `notes` (text)  
  - `created_at`, `updated_at`

- **Event**  
  - `id` (UUID)  
  - `title`, `client`, `location`, `timezone`  
  - `start_datetime`, `end_datetime`  
  - `notes` (text)  
  - `is_deleted` (bool)  
  - `created_by` (User FK), `updated_by` (User FK)  
  - timestamps

- **EventRole** (lines within an event)  
  - `id` (UUID)  
  - `event_id` (FK)  
  - `role_name` (string)  
  - `quantity` (int)  
  - `start_offset_min` (int, nullable)  
  - `end_offset_min` (int, nullable)  
  - `skills_required` (string[])

- **Assignment**  
  - `id` (UUID)  
  - `event_role_id` (FK)  
  - `employee_id` (FK)  
  - `status` (enum: unfilled, tentative, confirmed)  
  - `created_by` (User FK)  
  - timestamps

- **Template**  
  - `id` (UUID)  
  - `name`  
  - `header` fields (`client`, default `location`, notes, etc.)  
  - `roles_spec` (JSON of role lines)  
  - `created_by` (User FK)  
  - timestamps

- **User**  
  - `id`, `email`, `name`, `role` (admin/planner/viewer), auth fields.

- **AuditLog**  
  - `id`  
  - `actor_user_id`  
  - `action` (create_event, update_event, delete_event, assign, import_employees, etc.)  
  - `target_type` and `target_id`  
  - `diff_json`  
  - `created_at`

**Notes:**  
- Optional future table: `ConstraintPolicy` to capture rest rules.  
- Use database unique constraints to prevent duplicate active assignments for the same employee and overlapping times if desired.

---

## 10) API surface (v1)

**Auth**  
- `POST /api/auth/login`  
- `POST /api/auth/logout`

**Employees**  
- `GET /api/employees?search=`  
- `POST /api/employees/import` (multipart upload)  
- `GET /api/employees/export?format=csv|xlsx`  
- `POST /api/employees`  
- `PATCH /api/employees/:id`  
- `DELETE /api/employees/:id` (soft)

**Events**  
- `GET /api/events?from=&to=&status=`  
- `POST /api/events`  
- `GET /api/events/:id`  
- `PATCH /api/events/:id`  
- `DELETE /api/events/:id` (soft with reason)

**Event roles and assignments**  
- `POST /api/events/:id/roles`  
- `PATCH /api/event-roles/:id`  
- `DELETE /api/event-roles/:id`  
- `POST /api/event-roles/:id/assignments`  
- `PATCH /api/assignments/:id`  
- `DELETE /api/assignments/:id`

**Templates**  
- `GET /api/templates`  
- `POST /api/templates`  
- `GET /api/templates/:id`  
- `PATCH /api/templates/:id`  
- `DELETE /api/templates/:id`  
- `POST /api/templates/:id/create-event`

**Reports**  
- `GET /api/reports/assignments?from=&to=&format=csv|xlsx`

**Audit**  
- `GET /api/audit?target_type=&target_id=`

---

## 11) Tech stack and MCP usage
- **Next.js 14 + TypeScript** for app routing and API routes.
- **Supabase** (Postgres + Auth + Storage + Edge Functions).
- **NextAuth** (Credentials) optional — or rely purely on **Supabase Auth** (email/password, magic links) for simplicity.
- **shadcn/ui** for components.
- **xlsx** for CSV/XLSX parsing and generation.
- **TanStack Query** on client.

**Without (removed: Prisma) (your preference)**
- **Database schema**: managed as SQL migrations using `supabase db diff` and `supabase db push`.
- **Types**: generate from your database with `supabase gen types typescript --project-ref <ref> --schema public > types/supabase.ts` and import in both server and client.
- **Data access**: `@supabase/supabase-js` (PostgREST + RPC). For complex writes, use **SQL functions** exposed as RPC with explicit input validation.
- **RLS**: Strict Row Level Security policies on all tables; service role key on server routes only.

**MCP servers**
- **context7 MCP** for project context prompts and guardrails when generating SQL migrations and code.
- **supabase MCP** for schema diffs, seeds, and data ops via secure token.
- **shadcn MCP** to scaffold and keep UI components consistent.

**Environments**
- Dev: local Supabase (Docker) or hosted project.
- Prod: Supabase Postgres with RLS on; server routes use service role; clients use anon key.
- Secrets via environment variables.

---

## 12) Validation rules (v1)
- Required fields must be present.  
- No assignment if employee is inactive.  
- No double booking: an employee cannot be assigned to overlapping event windows.  
- Optional toggle: minimum rest hours between any two assignments for the same employee.  
- Template creation strips people.  
- Event delete is soft and requires a reason.

---

## 13) UI requirements
- Employees: searchable table with import button, export dropdown, and inline edit.  
- Events list: filter by date range and client, show status chips.  
- Event detail: header, roles panel with seat counters, assignment drawer, audit sidebar.  
- Templates: grid list with quick actions (use, edit, delete).  
- Confirmation dialogs for destructive actions.

---

## 14) Security and privacy
- Hash passwords.  
- Validate and sanitize file uploads.  
- Input validation with Zod.  
- Server checks permissions for every mutation.  
- Audit sensitive actions.  
- Data export includes footer with generated timestamp and user.

---

## 15) Performance targets
- Import 5k employees in ≤ 15s on a typical dev laptop.  
- Event list loads ≤ 1.5s for 100 events.  
- Assignment search returns in ≤ 300ms for 5k employees.

---

## 16) Telemetry (optional in v1)
- Count imports, failed rows, assignment edits per event, template reuse rate.

---

## 17) Acceptance criteria
- I can import a CSV with 300 employees and see a clear error report for bad rows.  
- I can create an event with 4 roles and 10 seats and assign employees without double bookings.  
- I can delete an event and later show it in a “Show deleted” filter with its reason.  
- I can save an event as a template and create a new event from it in under 30 seconds.  
- I can export the roster for an event to XLSX and send it to a client.

---

## 18) Milestones
**M1: Data foundations (schema + auth)**  
- Users, Employees CRUD, Auth, basic UI shell.

**M2: Events and roles**  
- Event CRUD, EventRole CRUD, validation for overlaps.

**M3: Assignments UX**  
- Assignment UI, search, export roster.

**M4: Import/Export**  
- CSV/XLSX import with mapper + export for employees and rosters.

**M5: Templates**  
- Template CRUD, create from template.

**M6: Audit + Delete flow**  
- Soft delete with reason, audit views.

---

## 19) Open questions
1. Do we need per‑site clearances and expiry dates in v1.  
2. Should we enforce minimum rest by default.  
3. Do we need notifications (email/SMS) to employees in v1.  
4. Should Viewer see deleted events by default.  
5. Do we need client portal export formatting.

---

## 20) Appendix
### Suggested (removed: Prisma) schema sketch (abridged)
- Will be generated during implementation using the above data model.  

### File formats
- CSV: UTF‑8 with header row.  
- XLSX: first sheet used; other sheets ignored in v1.

