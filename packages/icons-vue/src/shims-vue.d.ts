declare module "*.vue" {
  import { DefineComponent } from "vue";

  // Support both default export and named exports
  const component: DefineComponent<{}, {}, any>;
  export default component;

  // Add named export support for specific components
  export const Workspace: typeof component;
  export const WorkspaceUpload: typeof component;
  export const WorkspaceTemplate: typeof component;
  // Add more specific components as needed...
}
