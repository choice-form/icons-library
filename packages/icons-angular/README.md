# @choiceform/icons-angular

Angular components for SVG icons.

## Installation

```bash
npm install @choiceform/icons-angular
# or
yarn add @choiceform/icons-angular
# or
pnpm add @choiceform/icons-angular
```

## Usage

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

### Component Props

Each icon component accepts the following inputs:

| Input    | Type               | Default          | Description                                     |
| -------- | ------------------ | ---------------- | ----------------------------------------------- |
| `width`  | `string \| number` | `'24'`           | Width of the icon                               |
| `height` | `string \| number` | `'24'`           | Height of the icon                              |
| `color`  | `string`           | `'currentColor'` | Color of the icon                               |
| `title`  | `string`           | `undefined`      | Accessibility title (sets aria-hidden to false) |

### Component Selectors

All components use the prefix `cf-` followed by the kebab-case version of the icon name.

Examples:

- `<cf-workspace>`
- `<cf-file-upload>`
- `<cf-workspace-template-add>`

### CSS Class

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

### Metadata

You can access metadata for all the icons:

```typescript
import { iconMetadata } from "@choiceform/icons-angular";

// iconMetadata is an array of objects with icon information
console.log(iconMetadata);
```
