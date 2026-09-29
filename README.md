# Cat-alog

An exercise fetching cat data and displaying cat images from the Cat as a service API.

Time spent: ~1 hour during the assessment + 55-75 minutes later that evening (reworking stories 1–4) + 45-55 minutes after that (deploy, polish, documentation, stories 5–6).

## Resources used:

- [CATAAS](https://cataas.com/doc.html)
- [Cat-alog Notion page with challenge](https://angelstudios.notion.site/Cat-alog-09d44ca8b672418fa052332a66361387)
- [Tailwind documentation](https://tailwindcss.com/)
- Cloudflare (for simple hosting)
- Search Engine

> [!NOTE]
No AI was used in the implementation for either session

## Stories

- ✅ As a user, I can see all of the cats I have retrieved within this session.
- ✅ As a user, I can retrieve a random cat and see it’s picture.
- ✅ As a user, I can retrieve a random cat with a text phrase, using the `:text` parameter.
- ✅ As a user, I can retrieve a random cat using the tags provided by the API.
- ✅ As a user, I am delighted by an animation as the new images enter my screen.
- ✅ As a user, I can navigate to a “detail” page for a single image.

## Hosted App

The app was built and deployed to a Cloudflare Worker, which can be found [here](https://angel-exercise.clevertrevor.workers.dev/)

---

## Stack

| Concern | Tool |
| --- | --- |
| UI | React 19 |
| Language | TypeScript (strict) |
| Build / dev server | Vite |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite`, no config file) |
| Format + lint | Biome (formatter, linter, import sorting, Tailwind class sorting, React hook rules) |
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
| `pnpm check` | Biome format + lint + organize imports, writing fixes |

## Project structure

```
public/            static files served as-is (favicon)
src/
  main.tsx         app entry; mounts <App /> into #root
  App.tsx          top-level component — start here
  index.css        Tailwind import
  components/      components
  hooks/           custom hooks
  assets/          images and other imported assets
  test-utils/      test setup (happy-dom matchers, cleanup between tests)
```

## Editor setup (VS Code)

- Open the folder and accept the recommended extensions (Biome, Tailwind IntelliSense, mise, Vitest Explorer).
- Format on save runs through Biome, including Tailwind class sorting.
- AI completion extensions (Copilot, Codeium, Gemini, Tabnine, Supermaven, Amazon Q) are listed as **unwanted** in `.vscode/extensions.json`. For interviews that forbid AI, open the project in a dedicated VS Code profile with those extensions disabled.
