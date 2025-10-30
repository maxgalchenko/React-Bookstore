# [React-Bookstore]

<div align="center">

[![React](https://img.shields.io/badge/React-16.13-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Redux](https://img.shields.io/badge/Redux-7.2-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)
[![React Router](https://img.shields.io/badge/React%20Router-5.1-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Redux Thunk](https://img.shields.io/badge/Redux%20Thunk-2.3-593D88?style=for-the-badge)](https://github.com/reduxjs/redux-thunk)
[![Create React App](https://img.shields.io/badge/Create%20React%20App-3.4-09D3AC?style=for-the-badge&logo=create-react-app&logoColor=white)](https://create-react-app.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

## Overview

[A small React + Redux bookstore demo. Browse a list of books, add/remove items to a cart, and see totals update in real time. Built as a learning project to practice Redux patterns, async flows, and component composition.]

## Key Features

- [Book list with add-to-cart actions]
- [Shopping cart with increment/decrement/remove and total calculation]
- [Error boundary, loading spinner, and a simple service layer]

## Tech Stack

[React 16, Create React App 3, Redux, Redux Thunk, React Router 5, JavaScript (ES6)]

## Architecture

[CRA structure with `src/` entrypoint; routing via React Router v5; global state managed in Redux with Thunk for async; service access through a context + HOC (`bookstore-service-context`, `with-bookstore-service`).]

## Performance & Accessibility

[Lightweight bundle via CRA defaults; basic route-based splitting possible; semantic HTML and keyboard-accessible controls in core flows.]

## Quality

- Linting: [ESLint (react-app)] • Formatting: [N/A]
- Type safety: [JavaScript (no TypeScript)]
- Tests: [React Testing Library deps present; no committed tests]
- CI: [None]

## Prerequisites

- Node.js: `18.17.0`

## Installation

```bash
git clone https://github.com/maxgalchenko/React-Bookstore.git
cd React-Bookstore
npm install
```

## Quick Start

```bash
npm start
# Production
npm run build
npm run deploy
```

[Open http://localhost:3000]

## Available Scripts

- `npm start` – [Start the CRA dev server at http://localhost:3000]
- `npm run build` – [Bundle the app for production into `build/`]
- `npm test` – [Run tests in watch mode (no tests currently committed)]
- `npm run eject` – [Eject CRA configuration]
- `npm run deploy` – [Deploy the production build to GitHub Pages]
- `npm run predeploy` – [Build step executed before deploy]

## Screenshots

![Main](./public/localhost_3000_React-Bookstore.png)

---

<div align="center">

Built with ❤️ by [Maksym Galchenko](https://github.com/maxgalchenko)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/galchenko-max/)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-green?style=for-the-badge&logo=web)](https://portfolio-green-six-29.vercel.app/)
[![Email](https://img.shields.io/badge/Email-Contact-red?style=for-the-badge&logo=gmail)](mailto:galchenko.maksym@gmail.com)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

</div>
