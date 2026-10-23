# Dependency security maintenance (2026-10-22)

Use Node 24.22.1 and pnpm 10.34.5 (`pnpm install --frozen-lockfile --ignore-scripts`). Both Dockerfiles use the same runtime and lock. The mail container receives SMTP configuration at runtime; local `.env*` files are excluded from its build context.

Next stays on 15.5.28, Vite on the corrected 6.4 line, and React on 18. Nodemailer 10 and React Router 7 are necessary corrected parent upgrades. The offline contracts exercise JSON email generation, the application's route patterns/navigation, and PostCSS 8 declarations without importing the SMTP server. The scoped `next>postcss` override remains within PostCSS major 8. YAML is an explicit compatible optional peer of Vite/PostCSS loader. Platform binaries are supplied by their parent packages instead of Linux-only direct dependencies.

Run `pnpm build` and `node --test --test-concurrency=2 tests/dependency-contracts.test.mjs`. New pull-request CI builds in draft and runs contracts/container builds on Ready. Docker was not run on the local Windows host. A successful selected contract or advisory comparison does not establish that the entire dependency tree is vulnerability-free. No production deployment or SMTP request is part of these checks.

Compose starts the installed mail server directly rather than requiring development-only nodemon in the production dependency layer.

## Current advisory scope and residuals

The raw public OSV findings include `braces` 3.0.3 (GHSA-vfj7-8cjw-p6xm, no fixed release recorded) and selector-parser 6.1.5. The latter is an upstream advisory-range discrepancy: the official 6.1.5 release backports the security fix to major 6. YAML resolves to compatible 2.9.1. No parser major upgrade is needed.

Public OSV queries transmit only public registry package names and versions, with exact package matching; no source, repository identifiers or private dependency edges are uploaded. The earlier cached 317-record comparison is supplemental and does not replace these current queries.

The maintainer's [selector-parser 6.1.5 release](https://raw.githubusercontent.com/postcss/postcss-selector-parser/6.1.5/CHANGELOG.md)
backports CVE-2026-104844 without changing the parser major. The scoped Typography
override changes only its exact 6.0.10 dependency to 6.1.5; Tailwind and application
versions stay unchanged. The official tarball integrity matches the installed
backport. OSV still reports the older `<7.1.6` range, so its raw finding is retained.

Before/after actual repository CSS was byte-identical, including ordered selectors,
declarations, variants, nested output and major-6 AST iteration behavior. Frozen
installs disable lifecycle scripts. The persistent ordinary compatibility command
is `node security/css-selector.contract.cjs`; it preloads I/O denial before the
actual Typography/Tailwind consumers. No stress or exploit input is part of it.
This build-tool patch does not change source features or deployed bundle references.
Fresh final-lock public OSV results and hosted CI remain separate publication gates.
