# @choiceform/icons-angular

Angular components for SVG icons.

## Installation

```bash
# npm
npm install @choiceform/icons-angular

# pnpm
pnpm add @choiceform/icons-angular

# yarn
yarn add @choiceform/icons-angular
```

## How to use

Choiceform Icons for Angular is built with ES Modules and is fully tree-shakable.

### Import Module (Angular 15+)

```typescript
import { IconsModule } from "@choiceform/icons-angular";

@NgModule({
  imports: [
    IconsModule,
    // ... other modules
  ],
})
export class AppModule {}
```

### Import Standalone Components (Angular 16+)

```typescript
import { Component } from "@angular/core";
import {
  WorkspaceComponent,
  FileUploadComponent,
} from "@choiceform/icons-angular";

@Component({
  selector: "app-example",
  standalone: true,
  imports: [WorkspaceComponent, FileUploadComponent],
  template: `
    <cf-workspace></cf-workspace>
    <cf-file-upload
      [width]="32"
      [height]="32"
      [color]="'#1976d2'"
    ></cf-file-upload>
  `,
})
export class ExampleComponent {}
```

## Props

Each icon component accepts the following inputs:

| Input    | Type               | Default          | Description                                     |
| -------- | ------------------ | ---------------- | ----------------------------------------------- |
| `width`  | `string \| number` | `'16'`           | Width of the icon                               |
| `height` | `string \| number` | `'16'`           | Height of the icon                              |
| `color`  | `string`           | `'currentColor'` | Color of the icon                               |
| `title`  | `string`           | `undefined`      | Accessibility title (sets aria-hidden to false) |

## Component Selectors

All components use the prefix `cf-` followed by the kebab-case version of the icon name.

Examples:

- `<cf-workspace>`
- `<cf-file-upload>`
- `<cf-workspace-template-add>`

## Styling with CSS

Each icon SVG element has the CSS class `choiceform-icon` applied by default. This can be customized by modifying the `icon-config.json` file in the project root:

```json
{
  "iconClassName": "choiceform-icon"
}
```

This allows for easy global styling of all icons using CSS:

```css
.choiceform-icon {
  filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.2));
}
```

## Using Icon Metadata

You can access metadata for all the icons:

```typescript
import { iconMetadata } from "@choiceform/icons-angular";

// iconMetadata is an array of objects with icon information
console.log(iconMetadata);
```

## Features

- **Tree Shakable**: Only include the icons you use
- **TypeScript Support**: Full TypeScript definitions for all components
- **Accessible**: All icons have proper ARIA attributes
- **Customizable**: Style icons with CSS or component inputs
- **Optimized SVGs**: All icons are optimized with SVGO
- **Angular Compatibility**: Works with Angular 15+ and standalone components

## Metadata Properties

Each icon in the metadata includes:

| Property       | Description                        |
| -------------- | ---------------------------------- |
| `name`         | The name of the icon               |
| `category`     | The category the icon belongs to   |
| `tags`         | Array of tags for search/filtering |
| `filename`     | Original SVG filename              |
| `width`        | Width of the SVG (if available)    |
| `height`       | Height of the SVG (if available)   |
| `optimizedSvg` | The optimized SVG string           |
