# CodeAtlasHub

CodeAtlasHub is a modular web application built with React and Webpack. The project utilizes various libraries and tools for state management, styling, testing, and more.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: You need Node.js version 20 or higher. You can download it from [Node.js official website](https://nodejs.org/).
- **npm**: This project uses npm as the package manager.

## Installation

1. Clone the repository:

    ```sh
    git clone git@github.com:mkutsil/code-atlas-hub.git
    cd code-atlas-hub
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

## Scripts

The following scripts are available in this project:

- **Start the development server**:
    ```sh
    npm run start:dev
    ```
- **Build the project for production**:
    ```sh
    npm run build:prod
    ```
- **Build the project for development**:
    ```sh
    npm run build:dev
    ```
- **Run TypeScript linting**:
    ```sh
    npm run lint:ts
    ```
- **Fix TypeScript linting errors**:
    ```sh
    npm run lint:ts:fix
    ```
- **Run SCSS linting**:
    ```sh
    npm run lint:scss
    ```
- **Fix SCSS linting errors**:
    ```sh
    npm run lint:scss:fix
    ```
- **Run unit tests**:
    ```sh
    npm run test:unit
    ```
- **Run UI tests**:
    ```sh
    npm run test:ui
    ```
- **Approve UI test snapshots**:
    ```sh
    npm run test:ui:ok
    ```
- **Run Storybook**:
    ```sh
    npm run storybook
    ```
- **Build Storybook**:
    ```sh
    npm run storybook:build
    ```
- **Format all supported files with Prettier**:
    ```sh
    npm run format:prettier
    ```
- **Check formatting without applying changes**:
    ```sh
    npm run format:prettier:check
    ```

## Project Structure

The project follows a modular structure:

```
code-atlas-hub/
├── .github/               # GitHub configuration files
├── .loki/                 # UI regression test snapshots
├── .vscode/               # VS Code settings
├── config/                # Configuration files
├── node_modules/          # Installed dependencies
├── public/                # Public assets
├── src/                   # Source code
│   ├── app/               # Application-level components
│   ├── entities/          # Business entities
│   ├── features/          # Application features
│   ├── pages/             # Pages of the application
│   ├── shared/            # Shared utilities, hooks, and components
│   ├── widgets/           # UI widgets
│   ├── index.tsx          # Entry point
├── storybook-static/      # Storybook build output
├── .gitignore             # Git ignore file
├── .prettierrc            # Prettier configuration file
├── .prettierignore        # Files/folders to ignore by Prettier
├── eslint.config.mjs      # ESLint configuration
├── package-lock.json      # npm lock file
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation
├── stylelint.config.mjs   # Stylelint configuration
├── tsconfig.json          # TypeScript configuration
├── webpack.config.ts      # Webpack configuration


## Technologies Used

This project is built using the following technologies:

- **React**: A JavaScript library for building user interfaces.
- **Webpack**: A module bundler for modern JavaScript applications.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Redux Toolkit**: For state management.
- **React Router**: For routing.
- **MUI**: Material-UI for React components.
- **i18next**: For internationalization support.
- **Storybook**: For developing and testing UI components.
- **Jest**: For unit testing.
- **Loki**: For UI regression testing.
- **ESLint & Stylelint**: For code quality and styling standards.
- **Prettier**: For automated code formatting to ensure consistent style across the project.
```
