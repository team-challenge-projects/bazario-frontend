# Project: bazario-frontend

## Project Overview

This is a [Next.js](https://nextjs.org/) project for the frontend of an
e-commerce platform called "Bazario". It is built with
[React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/).
The project uses [Tailwind CSS](https://tailwindcss.com/) for styling, with a
custom theme and design system defined in `tailwind.config.ts`.
[Radix UI](https://www.radix-ui.com/) is used for unstyled, accessible UI
components. The project also includes a design system with custom colors, fonts,
and shadows.

The application is structured using the Next.js App Router, with pages and API
routes located in the `app` directory. It uses
[Zustand](https://github.com/pmndrs/zustand) for state management and
[Axios](https://axios-http.com/) for making HTTP requests. The project is
configured with [ESLint](https://eslint.org/) for linting and
[Prettier](https://prettier.io/) for code formatting, with a pre-commit hook set
up using [Husky](https://typicode.github.io/husky/) to enforce code quality.

## Building and Running

To get started with the project, you need to have [Node.js](https://nodejs.org/)
and [npm](https://www.npmjs.com/) installed.

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Run the development server:**

    ```bash
    npm run dev
    ```

    This will start the development server on
    [http://localhost:3000](http://localhost:3000).

3.  **Create a production build:**

    ```bash
    npm run build
    ```

4.  **Start the production server:**

    ```bash
    npm run start
    ```

5.  **Lint the code:**

    ```bash
    npm run lint
    ```

6.  **Format the code:**
    ```bash
    npm run format
    ```

## Development Conventions

- **Code Style:** The project uses [ESLint](https://eslint.org/) and
  [Prettier](https://prettier.io/) to enforce a consistent code style. A
  pre-commit hook is set up with [Husky](https://typicode.github.io/husky/) and
  [lint-staged](https://github.com/okonet/lint-staged) to automatically lint and
  format files before they are committed.
- **Imports:** Imports are automatically sorted using the
  `@trivago/prettier-plugin-sort-imports` Prettier plugin.
- **State Management:** [Zustand](https://github.com/pmndrs/zustand) is used for
  state management. Store modules are located in the `store` directory.
- **UI Components:** Reusable UI components are located in the `components`
  directory. The project uses [Radix UI](https://www.radix-ui.com/) for
  unstyled, accessible components, which are then styled with
  [Tailwind CSS](https://tailwindcss.com/).
- **API Routes:** API routes are located in the `app/api` directory.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) is used for styling. The
  configuration file (`tailwind.config.ts`) contains a custom theme with
  specific colors, fonts, and shadows.
- **Fonts:** The project uses the
  [Poppins](https://fonts.google.com/specimen/Poppins) font, loaded via
  `next/font`.
- **Validation:** [Zod](https://zod.dev/) is used for schema validation, likely
  in conjunction with [react-hook-form](https://react-hook-form.com/).
