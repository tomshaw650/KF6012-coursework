---
sidebar_position: 1
---

# How it Works

## Overview

The web application is a React app, scaffolded using create-react-app. It is a Single Page Application with routing handled by React Router. The application is written in JavaScript/JSX, and uses the Tailwind CSS library for styling.

## .htaccess

The `.htaccess` file is used to ensure that application is located in the correct URL location. The `.htaccess` file is located in the root directory of the web application.

## Config files

The app uses multiple config files located in the root directory of the app. `postcss.config.js` is used to configure the PostCSS library, which is used by Tailwind CSS. `tailwind.config.js` is used to configure Tailwind CSS.

## package.json

The `package.json` file is used to configure the app. It contains the dependencies, scripts, and other configuration for the app. The `package.json` file is located in the root directory of the web application.

## DevDependencies

The app is built using ESLint, Prettier, and its Tailwind plugin. This allows for faster development workflow as I can focus on coding while VSCode automatically formats the code and highlights any errors.
