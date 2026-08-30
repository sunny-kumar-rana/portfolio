# Personal Portfolio

A modern, responsive personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**.

The site is designed to present my work, projects, skills, and background through a minimal, developer-focused interface with a strong visual identity.

## Tech Stack

* **React** — UI development
* **Vite** — Development server and build tooling
* **Tailwind CSS** — Styling and responsive design
* **React Router** — Client-side routing
* **Google Fonts**

  * Inter
  * JetBrains Mono

## Features

* Responsive portfolio layout
* Modern dark-themed interface
* Hero / introduction section
* About section
* Skills / technologies section
* Projects showcase
* Individual project detail pages
* Navigation between portfolio sections and project pages
* Smooth scrolling
* Custom text-selection styling
* Minimal scrollbar styling
* Centralized design tokens for colors, spacing, and typography

## Design

The visual system is intentionally minimal and developer-oriented.

### Color Palette

* **Deep Black** — Primary background
* **White / Off-white** — Primary text
* **Red** — Primary accent
* **Blue** — Secondary accent

### Typography

**Inter** is used for the primary interface typography, while **JetBrains Mono** is used for technical and code-oriented elements.

## Project Structure

```text
portfolio/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── index.html
├── package.json
├── vite.config.js
└── ...
```

## Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

### Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd portfolio
```

Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at the local address shown by Vite.

### Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Routing

The portfolio uses **React Router** for client-side navigation.

Project pages are separated from the main portfolio experience so individual projects can be viewed in greater detail while still allowing navigation back to the Projects section.

## Development

This project is actively developed as a personal portfolio and may evolve as new projects, technologies, and improvements are added.

## License

This project is intended for personal portfolio use.

You may use the structure and ideas for learning purposes, but please do not present the original work or content as your own.
