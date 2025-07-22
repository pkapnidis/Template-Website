# Universal Next.js Project Execution Plan Template — **v2 with SuperClaude Enhancements**

> **Why this update?**
> These additions weave SuperClaude’s automation commands (⚙️ **SC Commands**) into the existing workflow **without altering any critical rules or directory requirements**.
> You still follow the same 6‑phase structure, TodoWrite tracking, and MCP constraints—only now SC shortcuts accelerate each phase, enforce consistency, and generate repeatable artifacts.

---

## 🚨 CRITICAL EXECUTION RULES (Unchanged)

*All original bullets remain valid. New SC‑related notes are indented beneath the relevant rule.*

### **⚠️ DIRECTORY REQUIREMENTS**

* ❌ **NEVER create new project folders**
* ✅ **ALWAYS rename `newproject` directory to actual project name**

  * **SC Tip ➜** After renaming, run:

    ```bash
    /sc:git --smart-commit "chore(init): rename boilerplate to <project-name>"
    ```
* ✅ **Work directly in the renamed newproject directory**

  * **SC Tip ➜** Verify context for Claude:

    ```bash
    /sc:load --deep
    ```
* ✅ **Preserve MCP configurations** … *(unchanged)*

### **📋 CONTINUOUS EXECUTION WITH PHASE TRACKING**

*(all bullets unchanged)*

> **SC Boost:** Use `/sc:document` after each TodoWrite phase to auto‑append a concise changelog to `PROJECT_PROGRESS.md`.

### **📊 MANDATORY TRACKING SYSTEM**

*(file list unchanged)*

> **SC Boost:**
>
> * `PROJECT_PROGRESS.md` → `/sc:document --type summary "Phase <N> summary"`
> * `EXECUTION_STATE.md` → `/sc:git --summary` output can be copied here automatically.

---

## 🆕 SuperClaude Command Cheat‑Sheet by Phase

| Phase                       | Primary SC Commands                                                                       | Purpose                           |
| --------------------------- | ----------------------------------------------------------------------------------------- | --------------------------------- |
| **0. Pre‑flight**           | `/sc:load --deep`                                                                         | Load full repo into Claude memory |
|                             | `/sc:workflow "<project-name> foundation" --output concise`                               | Auto‑generate high‑level roadmap  |
| **1. Setup & Foundation**   | `/sc:design --type theme --output tokens --goal "Apply brand colors from brand-info.txt"` | Tailwind theme scaffold           |
|                             | `/sc:git --smart-commit`                                                                  | Commit Phase 1 work               |
| **2. Core Layout & Design** | `/sc:implement layout --type feature --framework nextjs --iterative`                      | Build header/footer layouts       |
|                             | `/sc:improve layout --focus accessibility`                                                | WCAG polish                       |
| **3. Interactive Elements** | `/sc:implement forms --type component --framework react --with-tests`                     | RHF + Zod forms                   |
| **4. Content Integration**  | `/sc:refactor content --goal "Wire translations via i18n"`                                | Bind dynamic text                 |
| **5. Integrations**         | `/sc:implement integration:<name>` per requirement                                        | e.g. Email, GA 4                  |
| **6. Testing & Deploy**     | `/sc:test --add --type e2e --focus critical-flows`                                        | Generate Playwright suites        |
|                             | `/sc:build --type prod --optimize`                                                        | Final prod build                  |
|                             | `/sc:git --smart-commit "feat: production release"`                                       | Tag release                       |

*Feel free to copy this table into `PHASE_TODOS.md` header for quick reference.*

---

## 🔄 Modified Phase Checklists (SC lines prefixed with **SC⚙️**)

Below only the deltas—original tasks stay as‑is.

### Phase 1: Setup & Foundation (15‑20 min)

* **SC⚙️ Run** `/sc:load --deep` **immediately after verifying directory**
* **SC⚙️ Run** `/sc:design --type theme --output tokens --goal "Apply EXACT brand colors from brand-info.txt"`
* **SC⚙️ If first commit:** `/sc:git --smart-commit "chore(phase1): bootstrap & branding"`

### Phase 2: Core Layout & Design

* **SC⚙️** `/sc:implement layout --type feature --framework nextjs --iterative --with-tests "Header, Footer, Responsive Grid"`
* **SC⚙️** `/sc:improve layout --focus performance` (container queries, code‑split routes)
* **SC⚙️** Commit at end: `/sc:git --smart-commit "feat(phase2): core layout & responsive design"`

### Phase 3: Interactive Elements & Effects

* **SC⚙️** `/sc:implement contact-form --type component --framework react --with-tests --requirements "RHF + Zod validation, success toast, resend email"`
* **SC⚙️** `/sc:improve animations --focus framer-motion --goal "Smooth page transitions"`

### Phase 4: Content Integration & Personalization

* **SC⚙️** If multilingual:
  `/sc:localize ui --scope src/components --lang nl --strategy extract-to-keys`

### Phase 5: Customer‑Requested Integrations

* **SC⚙️** e.g. `/sc:implement ga4 --type integration --goal "Google Analytics with consent mode"`

### Phase 6: Testing, Compliance & Deployment

* **SC⚙️** `/sc:test --add --type e2e --focus "happy path"`
* **SC⚙️** `/sc:build --type prod --optimize`
* **SC⚙️** `/sc:git --smart-commit "release: v1.0.0"`

---

## 🛠 Additional SC Utilities You May Need

| Goal                             | Command                                                                        |
| -------------------------------- | ------------------------------------------------------------------------------ |
| Generate `.gitignore`            | `/sc:gitignore --generate --framework nextjs`                                  |
| Bulk rename after blueprint copy | `/sc:refactor --scope src --goal "Replace placeholder brand name with actual"` |
| Remove unused code               | `/sc:cleanup --scope . --focus "dead code, obsolete styles"`                   |
| Create docs                      | `/sc:document --type guide "How to run the project locally"`                   |

---

## ✅ How These Enhancements Preserve the Original Plan

1. **No Rule Violations:** Directory, MCP, Tailwind‑3.4 mandates remain untouched.
2. **TodoWrite Still Mandatory:** SC commands *complement* TodoWrite; they don’t replace it.
3. **Phase Integrity:** Each SC call slots inside its phase and **never mixes tasks across phases**.
4. **Zero Disruption:** You can skip any SC command if it conflicts, but defaults are safe.

Happy building — now 30‑40 % faster with SuperClaude automation! 🚀
