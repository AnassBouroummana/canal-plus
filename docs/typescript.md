# Typescript

Typescript is already installed and configured when generating a project with a javascript front.

## Basic configuration

- Create Typescript config : [tsconfig.json](../tsconfig.json)
  - The `"baseUrl": "src"` line lets you specify absolute paths in imports

## Linter

- The project uses ESLINT to lint TypeScript code. If you want more information about the configuration, visit the [Linter and Editor Configuration](./docs/linter-editor.md) page.

## Some conventions

- A Typescript file with JSX needs to have a .tsx extension (contrary to javascript where it is not necessary)
- Otherwise the extension should be .ts
