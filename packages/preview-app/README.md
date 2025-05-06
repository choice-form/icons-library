# @choiceform/icons-react-preview

Icon Library Preview App

This project provides a visual preview, search, and category browsing interface for all SVG icons available in the Choiceform icon library (@choiceform/icons-react). It is designed to help designers and developers easily find, compare, and test all available icons.

## Features

- Browse and search all icons from @choiceform/icons-react
- Filter by category and tags
- View usage code for each icon component
- Responsive design for various screen sizes

## Installation & Dependencies

This project depends on the icons-generate package. Install all dependencies from the monorepo root:

```bash
pnpm install
```

## Start Development Server

From the monorepo root, run:

```bash
pnpm --filter @choiceform/icons-react-preview dev
```

After starting, open the local address shown in the terminal (e.g., http://localhost:5173) to browse the icon preview app.

## Build for Production

```bash
pnpm --filter @choiceform/icons-react-preview build
```

The build output will be in the `dist/` directory and can be deployed to any static server.

## Project Structure

- `src/`: Source code for the React components and pages of the preview app
- `public/`: Static assets
- `vite.config.ts`: Vite configuration
- `package.json`: Dependencies and scripts

## Contributing

To customize the preview features or styles, edit the components in the `src/` directory directly.

---

This project is intended for development and design stage icon preview only. It is not recommended for direct use in production environments.
