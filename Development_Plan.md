# Guarding – Development Plan

Strategic development roadmap derived from PRD v0.1. Each stage is framed for incremental delivery, with tasks tracked via `[ ]` checkboxes (to be marked `[x]` when complete). MCP integrations (Context7, Supabase, shadcn) are woven into the workflow to maintain schema, API, and UI consistency.

---

## Stage 0 – Environment & Tooling Foundations
**Objective:** Ensure contributors share a stable baseline for local development, CI, and MCP usage.

- [ ] Supabase project (dev) provisioned, `.env` templates documented, secrets management defined.
- [ ] Next.js 14 project scaffolded with TypeScript, Tailwind, shadcn/ui, testing, linting, and formatting configs.
- [ ] Context7 + Supabase MCP runbooks captured (schema generation, diffs, code review prompts).
- [ ] CI pipeline configured (lint, type-check, unit tests, required status checks).
- [ ] Global error handling, logging hooks, and feature-flag scaffolding established.

**Exit criteria:** Any engineer can pull the repo, run the stack locally, and rely on automated checks before merging.

---

## Stage 1 – Auth & Access Control
**Objective:** Ship secure authentication with the single `manager` role while paving the path for future viewer/read-only roles.

- [ ] Supabase Auth configured for email/password invites with password policies and session management.
- [ ] `manager` role enforced via RLS and server middleware; future viewer role constraints documented.
- [ ] Protected route guards in Next.js (middleware/server actions) and TanStack Query auth-aware client setup.
- [ ] Audit infrastructure seeded (`audit_logs` table, server utility helpers).
- [ ] Auth flows (login, invite acceptance, unauthorized access) covered by integration tests.

**Exit criteria:** Only authenticated managers access protected surfaces; RLS blocks unauthorized queries; auth flows pass automated tests.

---

## Stage 2 – Employee Directory
**Objective:** Deliver employee CRUD, tags/skills modeling, and the UI foundation for import/export.

- [ ] Schema migrations for `employees`, supporting tag tables, indexes, and RLS policies.
- [ ] Employee API routes/server actions with Zod validation and Supabase client wrappers.
- [ ] Directory UI: searchable/filterable table, status badges, detail drawer, inline edit flow.
- [ ] Import pipeline v1 (file upload, column mapping, validation preview) leveraging Context7-assisted SQL + Supabase storage.
- [ ] Export pipeline v1 (CSV/XLSX) with metadata footer and audit logging hook.
- [ ] Unit + E2E tests covering CRUD and import validation edge cases.

**Exit criteria:** Managers maintain employee records, preview imports with clear errors, and export filtered directories reliably.

---

## Stage 3 – Events & Role Definitions
**Objective:** Implement event modeling, role requirements, and soft-delete mechanics aligned with audit needs.

- [ ] Schema for `events`, `event_roles_required`, soft-delete fields, and supporting RLS.
- [ ] Event CRUD APIs/server actions with validation (required fields, datetime windows, uniqueness).
- [ ] Events list UI with filters (date range, client, status) and detail page scaffold.
- [ ] Role requirement editor (quantity, offsets, skill tags) with optimistic updates and validation feedback.
- [ ] Soft-delete flow: confirmation modal capturing reason, audit log entries, and “show deleted” toggle.
- [ ] Integration tests confirming persistence, soft-delete behavior, and audit logging.

**Exit criteria:** Managers configure events with structured roles, review details, and perform soft-delete with reasons captured.

---

## Stage 4 – Assignment Engine & Validation
**Objective:** Enable seat assignments, validation rules (no double booking, optional rest), and roster exports.

- [ ] Schema for `assignments` with supporting indexes, overlap-checking SQL functions, and RLS.
- [ ] Validation utilities ensuring employee active status, overlap prevention, optional rest toggle.
- [ ] Assignment UI: seat counters, status chips (Unfilled/Tentative/Confirmed), search/filter drawer for skills & availability.
- [ ] Bulk actions (assign/unassign/confirm) with optimistic UI and error surfacing.
- [ ] Event roster export to CSV/XLSX with audit logging and timestamped footers.
- [ ] Automated tests simulating conflicts, rest rule toggles, and export data integrity.

**Exit criteria:** Managers fill seats confidently, receive actionable validation errors, and export client-ready rosters.

---

## Stage 5 – Templates & Rapid Event Creation
**Objective:** Streamline repeat events through reusable templates.

- [ ] Template schema and RLS ensuring separation from live events.
- [ ] Template CRUD APIs/UI (grid view with quick actions).
- [ ] “Save as template” flow stripping assignments while preserving metadata and roles.
- [ ] “Create from template” wizard to adjust time windows/timezone, preview roles, and confirm creation.
- [ ] Tests confirming template edits are isolated and creation flow is idempotent.

**Exit criteria:** Managers generate new events from templates in <30 seconds without duplicating assignments.

---

## Stage 6 – Import/Export Hardening & Performance
**Objective:** Scale data operations to PRD targets with robust error handling.

- [ ] Streaming upload/import processing (chunked validation) benchmarked to 5k rows ≤15s.
- [ ] Enhanced import error UX (grouped errors, inline fixes, downloadable failed rows).
- [ ] Optimized export pipelines for large datasets plus date-range assignment report endpoint.
- [ ] Telemetry hooks (Supabase logs, custom metrics) tracking throughput and failures.
- [ ] Load/regression tests for high-volume imports, concurrent assignments, and exports.

**Exit criteria:** Bulk operations meet performance SLAs with deterministic error feedback and observability coverage.

---

## Stage 7 – Audit, Reporting & Launch Hardening
**Objective:** Finalize audit views, reporting endpoints, and release readiness.

- [ ] Audit log UI with filters (target type, target id, actor) and change summaries.
- [ ] Assignment change log surfaced in event detail sidebar with diff snapshots.
- [ ] Reports API: date-range assignment export with access controlled and documented.
- [ ] Security review (RLS audit, permission matrix verification, penetration checklist).
- [ ] Release readiness checklist executed (backups, rollback plan, documentation updates).

**Exit criteria:** Stakeholders trust auditability, reporting, and security posture for GA.

---

## Stage 8 – Post-GA Backlog (Discovery)
**Objective:** Track future enhancements referenced in PRD open questions.

- [ ] Spike on viewer/read-only role requirements and UI adjustments.
- [ ] Decision log on minimum rest defaults & configuration UI.
- [ ] Evaluate notification (email/SMS) needs for assignments.
- [ ] Research client portal export formatting expectations.
- [ ] Explore site clearance expirations and reminders.
- [ ] Telemetry dashboards for adoption metrics (imports, template reuse, assignments per event).

---

## MCP Integration & Governance Notes
- Before schema changes, use Context7 MCP for design prompts, then `supabase db diff` → migration; regenerate TypeScript types after each change.
- Use Supabase MCP for executing migrations, seeding fixtures, and validating RLS policies.
- Scaffold UI components with shadcn MCP to maintain design consistency; document overrides.
- Update this plan’s checkboxes and notes alongside feature PRs; reflect scope adjustments back into PRD appendices when needed.

