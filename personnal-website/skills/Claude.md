# Claude.md

## Project Overview

Monorepo SPA with React frontend. Personal website with strong SEO implications.

## Tech Stack

### Frontend (`/apps/web`)

- **Framework**: React 18+ with TypeScript (strict mode)
- **Styling**: Tailwind CSS + shadcn/ui
- **Deployment**: Vercel
- **State**: TanStack Query for server state, Zustand for client state
- **i18n**: next-intl (French default, English secondary)

## Rules for Claude

### ALWAYS

1. Create reusable, typed components — no one-off implementations
2. Implement mobile-first, then scale up (sm → md → lg → xl)
3. Add proper TypeScript types with explicit return types
4. Consider SEO impact (metadata, structure, performance, Core Web Vitals)
5. Follow hexagonal architecture — domain has NO infrastructure dependencies
6. Use conventional commits with proper scope
7. Handle errors with Result pattern + typed DomainError classes
8. Write tests for business logic
9. Use dependency injection for all services
10. Add structured logging with context (traceId, spanId, relevant metadata)
11. Use docker-compose for local dev, Neon for production
12. **Self-review code before committing** (see code-quality skill)
13. **Use i18n for ALL user-facing strings** — French first, then English

### NEVER

14. Use `any` type — use `unknown` + type guards
15. Put business logic in controllers or components
16. Skip validation (Zod on frontend, class-validator on backend)
17. Hardcode values — use environment variables or constants
18. Commit without running lint and type-check
19. Throw generic Error — use typed DomainError subclasses
20. Log sensitive data (passwords, tokens, PII)
21. Push code without self-review
22. Hardcode user-facing text — use translation keys

### PREFER

23. Composition over inheritance
24. Small, focused functions (< 20 lines)
25. Named exports over default exports
26. Interface for objects, type for unions
27. Early returns over nested conditions
28. Explicit over implicit
29. Result.err() over throwing exceptions in use cases
30. Translation interpolation over string concatenation

---

## Skills (Detailed Documentation)

Extended documentation is available in `.claude/skills/`:
- **[frontend-architecture.md](.claude/skills/frontend-architecture.md)** - React component patterns, TanStack Query
- **[error-handling.md](.claude/skills/error-handling.md)** - DomainError, Result pattern, exception filters
- **[i18n.md](.claude/skills/i18n.md)** - Internationalization with next-intl
- **[seo.md](.claude/skills/seo.md)** - Metadata, sitemap, JSON-LD
- **[testing.md](.claude/skills/testing.md)** - Vitest, Playwright, test patterns
- **[observability.md](.claude/skills/observability.md)** - OpenTelemetry, logging
- **[code-quality.md](.claude/skills/code-quality.md)** - Pre-commit checklist, ESLint, Prettier
- **[design-system.md](.claude/skills/design-system.md)** - Colors, typography, component patterns

---

## Plan Mode

- Make the plan extremely concise. Sacrifice grammar for the sake of concision.
- At the end of each plan, give me a list of unresolved questions to answer, if any
