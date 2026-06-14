# React Enterprise Boilerplate

A professional, production-ready React boilerplate designed for enterprise-grade applications. Built with React 19, Vite, Material UI (MUI v6), Tailwind CSS (v4), Redux Toolkit, Redux Persist, and a custom Fetch API wrapper with built-in retry and interceptor mechanisms.

## Features

- **React 19 & Vite**: Fast development setup using ES Modules and ultra-fast bundling.
- **Tailwind CSS v4 & MUI v6 Integration**: Rich visual system incorporating modern styles, responsive layouts, glassmorphism, animations, and a seamless light/dark mode switch.
- **Robust Fetch Client**: A centralized API service layer wrapping the browser's Fetch API with support for:
  - Base URL environment configurations.
  - Automatic JSON request/response handling.
  - Token injection (Bearer authorization header).
  - Access Token automatic refresh logic.
  - Automatic retry mechanisms (transient network failures).
  - Global error normalization.
- **Redux Toolkit & Redux Persist**: Configured state management with local storage synchronization for selected slices (like Auth and Preferences).
- **Navigation (React Router DOM v7)**: Set up with Route Guards (Public vs Protected routes) and route-based code splitting (`React.lazy` and `Suspense`).
- **Code Quality**: ESLint flat configurations and Prettier formatting configured with Husky pre-commit hooks and `lint-staged`.

---

## Directory Structure

```text
src/
├── api/                  # API client configuration
│   ├── client.js         # Fetch API client wrapper
│   ├── endpoints.js      # Endpoint constants
│   ├── apiService.js     # Simulated network requests
│   └── errorHandler.js   # Normalize HTTP responses
├── assets/               # Static assets
│   ├── images/
│   ├── icons/
│   └── fonts/
├── components/           # UI Elements
│   ├── common/           # Error Boundary etc.
│   ├── forms/            # Form inputs
│   └── ui/               # Reusable Table & Reusable Modal
├── config/               # Environment wrappers
│   └── env.js            # Environment definitions
├── context/              # Context Providers (placeholders)
├── features/             # Feature slices (domain-specific code)
├── hooks/                # Custom React Hooks
├── layouts/              # Layout wraps (Auth vs Main)
├── pages/                # Lazy loaded views (Login, Dashboard, etc.)
├── routes/               # Routing files & Guard components
├── services/             # Endpoint connection controllers
├── store/                # Redux Toolkit configuration
├── styles/               # Global CSS & Custom Theme (light/dark)
└── utils/                # Date/Currency formatters, Validators
```

---

## Getting Started

### Prerequisites

You need [Node.js](https://nodejs.org) (v18+) installed.

### Installation

Install the package dependencies:

```bash
npm install
```

### Development

Run the local development server:

```bash
npm run dev
```

### Production Build

Build the project bundle for production deployment:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Linting & Formatting

Check code quality with the linter:

```bash
npm run lint
```

Format codebase style using Prettier:

```bash
npm run format
```

---

## Architecture & Best Practices

### 1. Fetch API Client Wrapper (`src/api/client.js`)

Instead of third-party libraries like Axios, this boilerplate includes a centralized wrapper around the native browser `fetch` API. It includes a custom interceptor-like flow:
- Reads the Redux store state to inject JWT tokens.
- On a `401 Unauthorized` response, it intercepts the request, attempts a token refresh via the `/auth/refresh` API, and retries the original request upon success.
- Retries transient network failures up to 2 times automatically before failing.

### 2. Redux Store & Persist (`src/store/index.js`)

State management utilizes Redux Toolkit. Slices such as `auth` and `user` preferences are whitelist-persisted in local storage using `redux-persist`, preventing session loss when a user refreshes their browser.

### 3. Tailwind CSS + Material UI Harmony (`src/styles/theme.js`)

The project configures custom HSL/HEX color systems in both Tailwind CSS and the MUI theme configuration, supporting:
- Light and Dark modes.
- Rounded borders (`borderRadius: 12px` / `rounded-xl`).
- Global Material UI component overrides that seamlessly pick up the CSS variable rules from Tailwind.

### 4. Custom Hooks (`src/hooks/`)

- `useAuth()`: Quick hooks for checking user authentication status, trigger logins, and logouts.
- `useApi(apiFunc)`: Wraps any async service with loading, error, and return states.
- `useDebounce(value, delay)`: Debounces text values (perfect for search/filtering inputs).
- `useLocalStorage(key, value)`: Local storage synchronization wrapper.
- `usePagination(page, limit)`: Simplifies page indices and page size variables.

---

## Code Quality Verification

The pre-commit hooks are configured through **Husky** and **lint-staged**. Upon executing `git commit`, the system will automatically:
1. Run ESLint with auto-fix capabilities on all modified `.js` and `.jsx` files.
2. Run Prettier formatting on modified files to verify styling compliance before commits are accepted.
