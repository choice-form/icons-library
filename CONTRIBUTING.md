# Contributing to Choiceform Icons

Thank you for your interest in contributing to Choiceform Icons! This document provides guidelines and instructions for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Adding New Icons](#adding-new-icons)
- [Submitting Pull Requests](#submitting-pull-requests)
- [Reporting Issues](#reporting-issues)
- [Style Guide](#style-guide)

## Code of Conduct

We expect all contributors to adhere to our Code of Conduct. Please be respectful and constructive in your communications with other contributors.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (v8 or higher)
- Basic knowledge of Git and GitHub

### Setting Up Your Development Environment

1. Fork the repository by clicking the "Fork" button at the top right of the [repository page](https://github.com/choice-form/icons-library).

2. Clone your fork to your local machine:

   ```bash
   git clone https://github.com/YOUR_USERNAME/icons-library.git
   cd icons-library
   ```

3. Add the original repository as a remote to keep your fork in sync:

   ```bash
   git remote add upstream https://github.com/choice-form/icons-library.git
   ```

4. Install dependencies:

   ```bash
   pnpm install
   ```

5. Set up your development environment:

   ```bash
   # Generate icons for all frameworks
   pnpm run generate

   # Start the preview app
   pnpm run preview
   ```

## Development Workflow

1. Create a new branch for your feature or bugfix:

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bugfix-name
   ```

2. Make your changes, following the guidelines in the sections below.

3. Test your changes:

   ```bash
   # Run lint checks
   pnpm run lint

   # Run tests
   pnpm run test

   # Build all packages
   pnpm run build
   ```

4. Commit your changes using [conventional commit messages](https://www.conventionalcommits.org/):

   ```bash
   git commit -m "feat: add new dashboard icon"
   # or
   git commit -m "fix: correct viewBox in settings icon"
   ```

5. Push your changes to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```

6. Create a pull request from your fork to the main repository.

## Adding New Icons

### Design Guidelines

All icons should follow these guidelines:

- Use a consistent stroke width (1px for 16×16, 1.5px for 24×24)
- Maintain uniform padding and alignment
- Optimize for clarity at small sizes
- Follow the Choiceform design language

### Adding an Icon

1. Prepare your SVG file:

   - Ensure the SVG is properly optimized
   - Use descriptive, kebab-case filenames (e.g., `dashboard-chart.svg`)
   - Include appropriate tags in the filename for improved searchability (optional): `dashboard-chart[stats,analytics,data].svg`

2. Place your SVG file in the appropriate directory:

   - Put it in the right category folder under `packages/icons/`
   - Create a new category folder if needed

3. Run the icon generation command:

   ```bash
   pnpm run generate
   ```

4. Test the icon in the preview app:

   ```bash
   pnpm run preview
   ```

### Icon Categories

Place your icons in one of the following categories (folders) based on their function:

- `common/` - General purpose icons
- `interface/` - UI and interaction icons
- `navigation/` - Icons for navigation elements
- `action/` - Icons representing actions or operations
- `notification/` - Alerts, notifications, and status indicators
- `form/` - Form elements and controls
- `chart/` - Data visualization icons
- `file/` - File and document related icons
- `social/` - Social media icons and interactions
- `brands/` - Logos and brand marks

## Submitting Pull Requests

1. Make sure your PR includes only related changes. If you have multiple features or fixes, submit separate PRs.

2. Update documentation if necessary.

3. Include screenshots or GIFs demonstrating visual changes.

4. In your PR description:

   - Clearly describe the changes
   - Reference any related issues
   - Explain why these changes are necessary or beneficial

5. Ensure all CI checks pass before requesting review.

## Reporting Issues

If you find a bug or have a feature request, please report it using GitHub Issues. Include the following information:

- For bugs:

  - Clear description of the issue
  - Steps to reproduce
  - Expected vs. actual behavior
  - Screenshots if applicable
  - Environment details (browser, OS, etc.)

- For feature requests:
  - Clear description of the proposed feature
  - Why it would be valuable
  - Any implementation ideas you have

## Style Guide

### SVG Guidelines

- Viewbox should be `0 0 16 16` for standard icons
- Use `fill="none"` and `stroke="currentColor"` for outline icons
- Use `fill="currentColor"` for solid icons
- Remove unnecessary attributes like `id`, `data-name`, etc.
- Optimize paths for readability and size

### Code Style

- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write meaningful comments for complex logic
- Keep components simple and focused on a single responsibility

## License

By contributing to Choiceform Icons, you agree that your contributions will be licensed under the project's [MIT License](./LICENSE).

---

Thank you for contributing to Choiceform Icons! Your efforts help make this project better for everyone.
