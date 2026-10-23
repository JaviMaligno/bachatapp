# Dependency security maintenance (2026-10-22)

Use Node 24.22.1 and pnpm 10.34.5 (`pnpm install --frozen-lockfile --ignore-scripts`). Both Dockerfiles use the same runtime and lock. The mail container receives SMTP configuration at runtime; local `.env*` files are excluded from its build context.

Next stays on 15.5.28, Vite on the corrected 6.4 line, and React on 18. Nodemailer 10 and React Router 7 are necessary corrected parent upgrades. The offline contracts exercise JSON email generation, the application's route patterns/navigation, and PostCSS 8 declarations without importing the SMTP server. The scoped `next>postcss` override remains within PostCSS major 8. YAML is an explicit compatible optional peer of Vite/PostCSS loader. Platform binaries are supplied by their parent packages instead of Linux-only direct dependencies.

Run `pnpm build` and `node --test --test-concurrency=2 tests/dependency-contracts.test.mjs`. New pull-request CI builds in draft and runs contracts/container builds on Ready. Docker was not run on the local Windows host. A successful selected contract or advisory comparison does not establish that the entire dependency tree is vulnerability-free. No production deployment or SMTP request is part of these checks.

Compose starts the installed mail server directly rather than requiring development-only nodemon in the production dependency layer.

## Current advisory scope and residuals

Fresh exact-name public OSV comparison of the final lock retains `braces` 3.0.3 (GHSA-vfj7-8cjw-p6xm, no fixed release recorded) and `postcss-selector-parser` 6.0.10/6.1.5 (GHSA-rj75-hqrm-r3gf, corrected in 7.1.6). Tailwind 3 and its typography plugin constrain selector-parser 6; moving those parents requires a separate tested CSS migration rather than forcing parser 7. YAML now resolves to compatible 2.9.1. These residuals remain unresolved.

Public OSV queries transmit only public registry package names and versions, with exact package matching; no source, repository identifiers or private dependency edges are uploaded. The earlier cached 317-record comparison is supplemental and does not replace these current queries.
