# Interview Starter

A minimal, pre-configured React + TypeScript playground for live-coding interviews and practice builds. Clone it, install, and start building — no setup decisions on the clock.

## Stack

| Concern | Tool |
| --- | --- |
| UI | React 19 |
| Language | TypeScript (strict) |
| Build / dev server | Vite |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite`, no config file) |
| Format + lint | Biome (formatter, linter, import sorting, Tailwind class sorting, React hook rules) |
| Tests | Vitest + happy-dom + Testing Library |
| Tool versions | mise (pins Node and pnpm) |

## Quick start

```sh
mise install     # installs the pinned Node and pnpm versions
pnpm install
pnpm dev         # http://localhost:5173
```

Not using mise? Install the Node and pnpm versions listed in `mise.toml` manually.

## Scripts

| Command | What it does |
| --- | --- |
| `pnpm dev` | Start the dev server with hot reload |
| `pnpm build` | Type-check, then build for production into `dist/` |
| `pnpm preview` | Serve the production build locally |
| `pnpm test` | Run Vitest in watch mode (`pnpm test --run` for a single pass) |
| `pnpm check` | Biome format + lint + organize imports, writing fixes |

## Project structure

```
public/            static files served as-is (favicon)
src/
  main.tsx         app entry; mounts <App /> into #root
  App.tsx          top-level component — start here
  index.css        Tailwind import
  components/      components and their *.spec.tsx tests
  hooks/           custom hooks
  assets/          images and other imported assets
  test-utils/      test setup (happy-dom matchers, cleanup between tests)
```

## Testing

Tests live next to the code they cover as `*.spec.tsx` and run in a simulated browser (happy-dom), so components can be rendered and queried. `src/test-utils/setupTests.ts` loads the `@testing-library/jest-dom` matchers and cleans up the DOM between tests.

Testing Library's `getBy*` queries throw when nothing matches, so a query on its own is a valid assertion:

```tsx
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { WelcomeBanner } from './WelcomeBanner';

describe('WelcomeBanner', () => {
  it('renders welcome message with provided name prop', () => {
    render(<WelcomeBanner name="John Doe" />);

    screen.getByRole('heading', { name: 'Welcome John Doe' });
  });
});
```

For state and attributes, the jest-dom matchers read more clearly:

```tsx
expect(screen.getByRole('button', { name: 'Submit' })).toBeDisabled();
expect(screen.getByRole('alert')).toHaveTextContent('Email is required');
```

## Editor setup (VS Code)

- Open the folder and accept the recommended extensions (Biome, Tailwind IntelliSense, mise, Vitest Explorer).
- Format on save runs through Biome, including Tailwind class sorting.
- AI completion extensions (Copilot, Codeium, Gemini, Tabnine, Supermaven, Amazon Q) are listed as **unwanted** in `.vscode/extensions.json`. For interviews that forbid AI, open the project in a dedicated VS Code profile with those extensions disabled.

## Using this as a template

On GitHub, click **Use this template → Create a new repository**, or from the CLI:

```sh
gh repo create my-exercise --template <owner>/interview-starter --private --clone
```

Then rename `name` in `package.json` and `<title>` in `index.html` if you want them to match the exercise.

## Before an interview

- [ ] `pnpm install && pnpm dev` runs clean on the machine you'll use
- [ ] `pnpm test --run` passes
- [ ] Editor opened in the AI-free profile
- [ ] Screen share tested with both the editor and the browser visible
