# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Exop landing page (LP) project - a Next.js 13 application configured to be deployed as a WAR file to WebLogic server. The application uses Ant Design (antd) components, styled-components, and LESS for styling.

## Development Commands

### Local Development
```bash
yarn dev              # Start Next.js dev server
yarn lint             # Run ESLint
```

### Building & Deployment
```bash
# Standard Next.js build
yarn build

# Export static site (generates 'out' folder)
yarn next export

# Build WAR file for WebLogic deployment (complete process)
yarn build-war        # Runs: build → next export → build:weblogic

# Build WAR file only (requires 'out' folder to exist)
yarn build:weblogic   # Copies out/* to java-weblogic/src/main/webapp, runs Maven clean & package
```

The final WAR file (`lp.war`) will be located in `java-weblogic/target/` after running `build-war` or `build:weblogic`.

## Architecture

### Next.js Configuration
- **Base Path**: `/lp` - All routes are prefixed with this path
- **Asset Prefix**: `/lp/` - Static assets served from this path
- **File System Routes**: Disabled (`useFileSystemPublicRoutes: false`)
- **Custom Routing**: Implemented in `_app.tsx` with pathname-based navigation
- **Styling**: LESS compilation enabled via `next-with-less`
- **Images**: Unoptimized (required for static export)

### Project Structure
```
src/
├── api/              # Axios instances and API methods
│   ├── instance.ts   # axiosApiInstance (private API) & axiosPublicInstance (public API)
│   └── content-management.ts
├── app/              # App-level configuration
├── assets/           # Static assets (images, SVGs, etc.)
├── components/       # Reusable UI components
│   ├── Banner/
│   ├── Card/
│   ├── Contact/
│   ├── Filter/
│   └── ...
├── layouts/          # Layout components
│   ├── Header/
│   ├── Footer/
│   ├── Menu/
│   └── Layouts.tsx   # Main layout wrapper with Header + Content + Footer
├── pages/            # Next.js pages (routes)
│   ├── _app.tsx      # App wrapper with cookie setup and route navigation
│   ├── index.tsx     # Home page
│   ├── services.tsx
│   ├── claims.tsx
│   └── ...
├── styles/           # Global styles and LESS files
├── theme/            # Theme configuration
├── types/            # TypeScript type definitions
└── utils/            # Utility functions (e.g., errors-utils)
```

### API Configuration
Two Axios instances are configured in `src/api/instance.ts`:
- **axiosApiInstance**: Private backend API (`NEXT_PUBLIC_BACKEND_API_URL`)
- **axiosPublicInstance**: Public API (`NEXT_PUBLIC_BACKEND_API_PUBLIC_URL`)

Both instances:
- Include credentials (`withCredentials: true`)
- Handle 500 errors with Ant Design message notifications
- Use custom error parsing via `parseAxiosError`

### Environment Variables
Configured in `.env` and `.env.development`:
```
NEXT_PUBLIC_BACKEND_API_URL           # Private API endpoint
NEXT_PUBLIC_BACKEND_API_PUBLIC_URL    # Public API endpoint
NEXT_PUBLIC_COOKIE_CREDENTIAL         # Cookie name for authentication
NEXT_PUBLIC_COOKIE_VALUE              # Cookie value
NEXT_PUBLIC_COOKIE_DOMAIN             # Cookie domain
```

Cookies are set in `_app.tsx` on application initialization.

### Routing Behavior
The app uses custom routing logic in `_app.tsx`:
- File system routes are disabled
- On mount, pathname is checked against predefined routes: `/regulations`, `/informations`, `/services`, `/about`, `/claims`
- If pathname matches, navigate to that route; otherwise redirect to `/`
- All routes are prefixed with `/lp` base path

### Path Alias
TypeScript is configured with path alias:
```typescript
"@src/*" → "./src/*"
```

Use `@src/` prefix when importing from the src directory.

## Git Workflow

### Branches
- **Main branch**: `master` (use this for PRs)
- **Current branch**: `develop`

### Commit Message Convention
Uses conventional commits with commitlint. Required format:
```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

**Types**: `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`, `translation`, `security`, `changeset`

**Rules**:
- Header max length: 100 characters
- Subject: lowercase, no period at end, no sentence/start/pascal/upper case
- Body/footer: max 100 chars per line
- Type and subject are required

Husky pre-commit hooks are enabled.

## WebLogic Deployment

The project uses Maven to package the static Next.js export into a WAR file for WebLogic:
- Maven POM: `java-weblogic/pom.xml`
- Final WAR name: `lp.war`
- The `build:weblogic` script copies the `out/` folder to `java-weblogic/src/main/webapp/` then runs Maven clean and package

## Technology Stack
- **Framework**: Next.js 13.3.0 (Pages Router)
- **UI Library**: Ant Design 5.4.3
- **Styling**: LESS, styled-components, Animate.css
- **HTTP Client**: Axios 1.6.2
- **State**: React cookies (js-cookie)
- **TypeScript**: 5.0.4, strict mode enabled
- **Media**: react-player, react-slick

## Important Notes
- This is a landing page application, not a full web app
- Images are unoptimized for static export compatibility
- The application expects backend APIs for content management
- Cookie-based authentication is set up on app initialization
