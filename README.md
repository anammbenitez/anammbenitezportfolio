# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Development environment (WSL)

This project lives in the WSL filesystem (`~/portfolio`) and must be run from WSL.
`node_modules` contains Linux binaries (rolldown, esbuild), so running `npm install`
or `npm run dev` from Windows (PowerShell, or WebStorm with a Windows Node) breaks it.
It also fails the other way around: a Windows install breaks WSL.

- Run everything from a WSL terminal: `npm ci`, `npm run dev`, `npm run build`.
- Open the project from Windows at `\\wsl.localhost\Ubuntu\home\xnath\portfolio`.
- In WebStorm, set the Node interpreter to the WSL one (Settings, Languages & Frameworks, Node.js, Add, WSL) and run npm scripts through it.
- If `node_modules` gets corrupted: `rm -rf node_modules && npm ci`.
- Do not edit another copy of this repository (for example `F:\portfolio`) in parallel.
