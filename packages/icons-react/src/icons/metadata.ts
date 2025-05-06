export const iconMetadata: Array<{ 
  name: string; 
  category: string; 
  tags: string[]; 
  filename: string; 
  width: number | null;
  height: number | null;
  optimizedSvg: string; 
}> = [
  {
    "name": "Workspace",
    "filename": "workspace.svg",
    "category": "workspaces",
    "tags": [
      "workspaces",
      "file",
      "grid"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M5.5 1.5h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1\"/><path d=\"M12.5 1.5h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M12.5 8.5h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1\"/><path d=\"M5.5 8.5h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1\"/></g></svg>"
  },
  {
    "name": "WorkspaceUpload",
    "filename": "workspace-upload.svg",
    "category": "workspaces",
    "tags": [
      "workspaces",
      "arrow",
      "up",
      "data",
      "upload"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M5.5 2.5h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1\"/><path d=\"M12.5 14.5h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1M5.5 9.5h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1M11.5 6.5v-5m0 0 2 2m-2-2-2 2\"/></g></svg>"
  },
  {
    "name": "WorkspaceTemplate",
    "filename": "workspace-template.svg",
    "category": "workspaces",
    "tags": [
      "workspaces",
      "template",
      "file"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path d=\"M12.5 1.5h-10a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1Z\"/><path fill=\"currentColor\" stroke-linejoin=\"round\" d=\"M6.5 3.5h-3v3h3zM11.5 8.5h-3v3h3z\"/></g></svg>"
  },
  {
    "name": "WorkspaceTemplateRemove",
    "filename": "workspace-template-remove.svg",
    "category": "workspaces",
    "tags": [
      "workspaces",
      "clear",
      "remove",
      "delete"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path stroke-linecap=\"round\" d=\"M4.5 12.5h-2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v2\"/><path fill=\"currentColor\" stroke-linejoin=\"round\" d=\"M6.5 3.5h-3v3h3z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M14.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0M9 9l3 3m0-3-3 3\"/></g></svg>"
  },
  {
    "name": "WorkspaceTemplateEdit",
    "filename": "workspace-template-edit.svg",
    "category": "workspaces",
    "tags": [
      "workspaces",
      "edit",
      "design",
      "pen",
      "pencil",
      "draw",
      "create"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path stroke-linecap=\"round\" d=\"M4.5 12.5h-2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v2\"/><path fill=\"currentColor\" stroke-linejoin=\"round\" d=\"M6.5 3.5h-3v3h3z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m7.5 14.5 1-3 3.646-3.646a.5.5 0 0 1 .708 0l1.292 1.292a.5.5 0 0 1 0 .708L10.5 13.5z\"/></g></svg>"
  },
  {
    "name": "WorkspaceTemplateConvert",
    "filename": "workspace-template-convert.svg",
    "category": "workspaces",
    "tags": [
      "workspaces",
      "convert",
      "loading",
      "loop",
      "process",
      "arrow",
      "refresh"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path stroke-linecap=\"round\" d=\"M5.5 12.5h-3a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v2\"/><path fill=\"currentColor\" stroke-linejoin=\"round\" d=\"M6.5 3.5h-3v3h3z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.5 12.5H12A2.5 2.5 0 0 0 13.5 8m-2-.5H10A2.5 2.5 0 0 0 8.5 12\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m12.5 10.5-2 2 2 2M9.5 5.5l2 2-2 2\"/></g></svg>"
  },
  {
    "name": "WorkspaceTemplateAdd",
    "filename": "workspace-template-add.svg",
    "category": "workspaces",
    "tags": [
      "workspaces",
      "plus",
      "create",
      "add",
      "template"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path stroke-linecap=\"round\" d=\"M4.5 12.5h-2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v2\"/><path fill=\"currentColor\" stroke-linejoin=\"round\" d=\"M6.5 3.5h-3v3h3z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M14.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0M12.5 10.5h-4m2 2v-4\"/></g></svg>"
  },
  {
    "name": "WorkspaceSettings",
    "filename": "workspace-settings.svg",
    "category": "workspaces",
    "tags": [
      "workspaces",
      "control",
      "preferences",
      "system"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M5.5 1.5h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1\"/><path d=\"M12.5 1.5h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1M5.5 8.5h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1M11.5 13.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M11.5 9.5v-1m0 5v1m2-3h1m-5 0h-1m4.414-1.414.707-.707m-3.535 3.535-.707.707m3.535-.707.707.707m-3.535-3.535-.707-.707\"/></g></svg>"
  },
  {
    "name": "WorkspaceDownload",
    "filename": "workspace-download.svg",
    "category": "workspaces",
    "tags": [
      "workspaces",
      "arrow",
      "down",
      "data",
      "download"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M5.5 1.5h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1\"/><path d=\"M12.5 1.5h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1M5.5 8.5h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1M11.5 9.5v5m0 0 2-2m-2 2-2-2\"/></g></svg>"
  },
  {
    "name": "WorkspaceDelete",
    "filename": "workspace-delete.svg",
    "category": "workspaces",
    "tags": [
      "workspaces",
      "clear",
      "remove",
      "delete"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M5.5 1.5h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1\"/><path d=\"M12.5 1.5h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1M5.5 8.5h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1M10 10l3 3m0-3-3 3\"/></g></svg>"
  },
  {
    "name": "WorkspaceAdd",
    "filename": "workspace-add.svg",
    "category": "workspaces",
    "tags": [
      "workspaces",
      "plus",
      "create",
      "add"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M5.5 1.5h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1\"/><path d=\"M12.5 1.5h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1M5.5 8.5h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1M9.5 11.5h4m-2-2v4\"/></g></svg>"
  },
  {
    "name": "ModuleWorkflow",
    "filename": "module-workflow.svg",
    "category": "workspaces",
    "tags": [
      "workspaces",
      "module",
      "workflow"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.5 3.5v-1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M13.5 13.5v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1M5.5 13.5v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1\"/><path d=\"M3.5 10.5v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M7.5 4.5v3m0 3v4\"/></g></svg>"
  },
  {
    "name": "ModuleForms",
    "filename": "module-forms.svg",
    "category": "workspaces",
    "tags": [
      "workspaces",
      "module",
      "forms",
      "survey"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M4.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M4.5 11.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8.5 7.5h2m-2 4h2m-5-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8.5 1.5h-5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8m-4-4 4 4m-4-4v3a1 1 0 0 0 1 1h3\"/></svg>"
  },
  {
    "name": "ModuleDatasheets",
    "filename": "module-datasheets.svg",
    "category": "workspaces",
    "tags": [
      "workspaces",
      "module",
      "datasheets",
      "table",
      "grid"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 10.5V12a.5.5 0 0 0 .5.5h1.5m-2-2V9a.5.5 0 0 1 .5-.5h1.5m-2 2h6m-4 2v-4m0 4h2m-2-4h2m2 2V9a.5.5 0 0 0-.5-.5H8.5m2 2V12a.5.5 0 0 1-.5.5H8.5m0-4v4\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"m12.5 5.5-4-4v3a1 1 0 0 0 1 1z\"/><path d=\"M8.5 1.5h-5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8\"/></g></svg>"
  },
  {
    "name": "ModuleCharts",
    "filename": "module-charts.svg",
    "category": "workspaces",
    "tags": [
      "workspaces",
      "module",
      "charts",
      "bar"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M5.5 10V4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5M11 7.5h-1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M1.5 12.5h2m0 0h10m-10 0v-11m0 11v2m6.5-4h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5M7.5 10V4a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5\"/></svg>"
  },
  {
    "name": "Appearance",
    "filename": "appearance.svg",
    "category": "workspaces",
    "tags": [
      "workspaces",
      "sidebar"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7.5 1.5h5a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-5\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M7.5 1.5h-4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4z\"/><path d=\"M4.5 4.5h1m-1 3h1m-1 3h1\"/></g></svg>"
  },
  {
    "name": "WelcomeWorkflow",
    "filename": "welcome-workflow.svg",
    "category": "welcome",
    "tags": [
      "welcome",
      "choiceform",
      "tx",
      "workflow"
    ],
    "width": 32,
    "height": 32,
    "optimizedSvg": "<svg width=\"32\" height=\"32\" fill=\"none\" viewBox=\"0 0 32 32\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M.5 31.5h31M6.5 16.5 8 15m.5-4.5L7 12m0 0-1.5 1.5L8 15m-1-3 2.5 1.5L8 15M8.5 19.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M17.5 25.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8.5 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6.5 7.5h-3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3m2-12h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3M7.5 20.5v1a1 1 0 0 0 1 1h7a1 1 0 0 1 1 1v1M17.5 25.5h6a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h6M14.5 28.5h-4M22.5 28.5h-4\"/><path fill=\"currentColor\" fill-opacity=\".25\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19.587 11.78c-.815.685-1.087 2.72-1.087 2.72s2.033-.272 2.718-1.088c.386-.457.38-1.16-.049-1.584a1.185 1.185 0 0 0-1.582-.049\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m23.5 11.5-2-2c1.254-3.252 4.507-6.022 8.083-6 0 3.584-2.8 6.752-6.083 8\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M21.5 9.5h-3s0-2.36 1-2.86 3 .5 3 .5\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21.5 9.5h-3s0-2.36 1-2.86 3 .5 3 .5\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M23.5 11.5v3s2.36 0 2.86-1-.5-3-.5-3\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M23.5 11.5v3s2.36 0 2.86-1-.5-3-.5-3M26.5 6.5h.005\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-opacity=\".25\" d=\"M22.5 3.5v-1a2 2 0 0 0-2-2h-11a2 2 0 0 0-2 2v4m15 11v3a2 2 0 0 1-2 2h-5\"/></svg>"
  },
  {
    "name": "WelcomeInterface",
    "filename": "welcome-interface.svg",
    "category": "welcome",
    "tags": [
      "welcome",
      "choiceform",
      "tx",
      "interface"
    ],
    "width": 32,
    "height": 32,
    "optimizedSvg": "<svg width=\"32\" height=\"32\" fill=\"none\" viewBox=\"0 0 32 32\"><g stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M.5 31.5h31M25 18l2.5 6.5 1-3 3-1zM24 14.5l.5 1.5M23 17.5l-1.5-.5m6-1.5-1 1m-3 3-1 1M28.5 13.5v-2a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M23.5 24.5v5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2h5\"/><path d=\"M9.5 26.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0Z\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M9.5 21a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5zM16.5 28a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-opacity=\".25\" d=\"M25.5 9.5v-3a2 2 0 0 0-2-2h-2m-18 17h-1a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2h2\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8.5 4.5h3m0 0L10 3m1.5 1.5L10 6m8.5-1.5h-3m0 0L17 6m-1.5-1.5L17 3M13.5.5v8\"/></g></svg>"
  },
  {
    "name": "WelcomeForms",
    "filename": "welcome-forms.svg",
    "category": "welcome",
    "tags": [
      "welcome",
      "choiceform",
      "tx",
      "forms"
    ],
    "width": 32,
    "height": 32,
    "optimizedSvg": "<svg width=\"32\" height=\"32\" fill=\"none\" viewBox=\"0 0 32 32\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M.5 31.5h31M14.5 2.5v-2h-2v2zm0 0c0 2-2 2-2 2M10.5 2.5v-2h-2v2zm0 0c0 2-2 2-2 2M15.5 15.5h6m-9 1a1 1 0 0 0 1-1v0a1 1 0 0 0-1-1v0a1 1 0 0 0-1 1v0a1 1 0 0 0 1 1M21.5 23.5h-4M15.5 19.5h6m-9 1a1 1 0 0 0 1-1v0a1 1 0 0 0-1-1v0a1 1 0 0 0-1 1v0a1 1 0 0 0 1 1\"/><path stroke-opacity=\".25\" d=\"M5.5 19.5h-1a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2h1m23 0h1a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-2m-7-17h-3\"/><path d=\"M8.5 19.5v-8a2 2 0 0 1 2-2h8m3 22h1a2 2 0 0 0 2-2v-15M4.5 27.5l1 1 2-2m2 1h3\"/><path d=\"M13.5 23.5h-10a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M24.052 3.408a.5.5 0 0 1 .896 0l.98 1.987a.5.5 0 0 0 .377.273l2.193.32a.5.5 0 0 1 .277.853l-1.587 1.545a.5.5 0 0 0-.143.443l.374 2.182a.5.5 0 0 1-.726.527l-1.96-1.03a.5.5 0 0 0-.466 0l-1.96 1.03a.5.5 0 0 1-.726-.527l.375-2.182a.5.5 0 0 0-.144-.443l-1.587-1.545a.5.5 0 0 1 .277-.852l2.193-.321a.5.5 0 0 0 .376-.273z\"/></g></svg>"
  },
  {
    "name": "WelcomeExtension",
    "filename": "welcome-extension.svg",
    "category": "welcome",
    "tags": [
      "welcome",
      "choiceform",
      "tx",
      "extension"
    ],
    "width": 32,
    "height": 32,
    "optimizedSvg": "<svg width=\"32\" height=\"32\" fill=\"none\" viewBox=\"0 0 32 32\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M.5 31.5h31M5.5 28.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5.5 24.5v-1m0 5v1m2-3h1m-5 0h-1m4.414-1.414.707-.707m-3.535 3.535-.707.707m3.535-.707.707.707m-3.535-3.535-.707-.707M5.5 20.5v-5a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-1M7.5 15.5h.005M9.5 15.5h.005M11.5 15.5h.005\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M29.5 17.5h-24v-2a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2z\"/><path stroke-opacity=\".25\" d=\"M26.5 10.5v-6a2 2 0 0 0-2-2h-7m-15 18a2 2 0 0 1-2-2v-14a2 2 0 0 1 2-2h2\"/><path d=\"m14.5 22.5-2 2 2 2m6 0 2-2-2-2M19.5 20.5l-4 8\"/><path fill=\"currentColor\" d=\"M10.5 2.5a2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0-2 2 2 2 0 0 0-2-2\"/><path d=\"M3.5 7.5a4 4 0 0 0 4-4 4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4\"/></g></svg>"
  },
  {
    "name": "WelcomeDatasheets",
    "filename": "welcome-datasheets.svg",
    "category": "welcome",
    "tags": [
      "welcome",
      "choiceform",
      "tx",
      "datasheets"
    ],
    "width": 32,
    "height": 32,
    "optimizedSvg": "<svg width=\"32\" height=\"32\" fill=\"none\" viewBox=\"0 0 32 32\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M.5 31.5h31M28.5 18.5v11a2 2 0 0 1-2 2h-14m5-21h-5a2 2 0 0 0-2 2v10\"/><path d=\"M13.5 22.5V20a.5.5 0 0 1 .5-.5h3.5m-4 3h12m-12 0v3m12-3V20a.5.5 0 0 0-.5-.5h-3.5m4 3v3m-12 0V28a.5.5 0 0 0 .5.5h3.5m-4-3h12m0 0V28a.5.5 0 0 1-.5.5h-3.5m-4-9v9m0-9h4m-4 9h4m0-9v9M27.5 13.5l3 3M28.5 10.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0\"/><path d=\"m26 9.5-2 2-1-1\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M2.5 26v5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5\"/><path d=\"M4.5 25.5v-2a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v2M5.5 28.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/><path stroke-opacity=\".25\" d=\"M31.5 13.5v-8a2 2 0 0 0-2-2h-13m-9 15h-5a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2h4\"/><path d=\"M10.5 6.5 12 5m.5-4.5L11 2m0 0L9.5 3.5 12 5m-1-3 2.5 1.5L12 5M13.5 13.5h4\"/></g></svg>"
  },
  {
    "name": "WelcomeCharts",
    "filename": "welcome-charts.svg",
    "category": "welcome",
    "tags": [
      "welcome",
      "choiceform",
      "tx",
      "charts"
    ],
    "width": 32,
    "height": 32,
    "optimizedSvg": "<svg width=\"32\" height=\"32\" fill=\"none\" viewBox=\"0 0 32 32\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M.5 31.5h31\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M13.5 26v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5M19 18.5h-1a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5M23 26.5h-1a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13.5 26v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5M19 18.5h-1a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5M23 26.5h-1a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5M6.5 29.5 9 27M10.5 22.5v-11a2 2 0 0 1 2-2h4m7 22h1a2 2 0 0 0 2-2v-10M13.5 28.5h10M1.916 31.5a5 5 0 1 1 9.168 0\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-opacity=\".25\" d=\"M6.5 26.5a3 3 0 0 0-3 3\"/><path fill=\"currentColor\" fill-opacity=\".25\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M26.5 7.9V5.5a5.01 5.01 0 0 1 3.9 3.9H28c0-.5-1-1.5-1.5-1.5\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19.5 11.4a5 5 0 0 0 10 0h-3a2 2 0 1 1-2-2v-3a5 5 0 0 0-5 5\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-opacity=\".25\" d=\"M2.5 8.5v9a2 2 0 0 0 2 2h3m9-13v-2a2 2 0 0 0-2-2h-4\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M5.501 2.409a1.18 1.18 0 0 1 1.221-.907c.399.027.788.212.972.556a1 1 0 0 1 .11.462c.002.561-.411.959-1.078 1.656-.286.299-.71.749-1.226 1.323h2.453M1.5 2.5l1-1v4h-1 2\"/></svg>"
  },
  {
    "name": "WorkflowFile",
    "filename": "workflow-file.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "file"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.5 3.5v-1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M13.5 13.5v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1M5.5 13.5v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1\"/><path d=\"M3.5 10.5v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M7.5 4.5v3m0 3v4\"/></g></svg>"
  },
  {
    "name": "WorkflowFileOutport",
    "filename": "workflow-file-outport.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "arrow",
      "right",
      "input",
      "import",
      "output"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 3.5v-1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1M1.5 13.5v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1M7.5 7.5h-3a1 1 0 0 0-1 1v2m4-3v-3m0 3h2a1 1 0 0 1 1 1v2M12.5 10.5l2 2m0 0-2 2m2-2h-7\"/></g></svg>"
  },
  {
    "name": "WorkflowFileImport",
    "filename": "workflow-file-import.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "arrow",
      "right",
      "input",
      "import",
      "output"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 3.5v-1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1M14.5 13.5v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1M8.5 7.5h3a1 1 0 0 1 1 1v2m-4-3v-3m0 3h-3a1 1 0 0 0-1 1v2M6.5 10.5l2 2m0 0-2 2m2-2h-7\"/></g></svg>"
  },
  {
    "name": "WorkflowFileDelete",
    "filename": "workflow-file-delete.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "clear",
      "remove",
      "delete"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 3.5v-1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1M14.5 13.5v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1M12.5 10.5v-2a1 1 0 0 0-1-1h-3v-3M8.5 7.5h-1M6 11.5H3M7.5 11.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0\"/></g></svg>"
  },
  {
    "name": "WorkflowFileAdd",
    "filename": "workflow-file-add.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "plus",
      "create",
      "add"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 3.5v-1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1M14.5 13.5v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1M12.5 10.5v-2a1 1 0 0 0-1-1h-3v-3M8.5 7.5h-1M6 11.5H3M4.5 13v-3M7.5 11.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0\"/></g></svg>"
  },
  {
    "name": "TriggerStartedByWebhook",
    "filename": "trigger-started-by-webhook.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "trigger",
      "webhook"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9.5 11a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M8 4l1.714 3M4 11l1.24-2.17 1.51-2.665a2.5 2.5 0 1 1 3.7-1.665M6.292 10A2.5 2.5 0 1 1 3.5 8.55\"/><path stroke-opacity=\".25\" d=\"M11.5 11a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0\"/><path d=\"M3.5 11a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M7.5 4a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 11h-3\"/></g></svg>"
  },
  {
    "name": "TriggerStartedByDateOrTimeField",
    "filename": "trigger-started-by-date-or-time-field.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "trigger",
      "calendar",
      "date",
      "time"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 2.5h-2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-4 0h2M1.5 5.5h12M4.5 1.5v2m6-2v2M3.5 7.5h.005m1.995 0h.005m1.995 0h.005M3.5 9.5h.005m1.995 0h.005m1.995 0h.005m1.995-2h.005m-.005 2h.005m1.995-2h.005m-.005 2h.005m-8.005 2h.005m1.995 0h.005m1.995 0h.005m1.995 0h.005m1.995 0h.005\"/></g></svg>"
  },
  {
    "name": "TriggerStartedByAnEvent",
    "filename": "trigger-started-by-an-event.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "trigger",
      "datasheet"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 10.5V12a.5.5 0 0 0 .5.5h1.5m-2-2V9a.5.5 0 0 1 .5-.5h1.5m-2 2h6m-4 2v-4m0 4h2m-2-4h2m2 2V9a.5.5 0 0 0-.5-.5H8.5m2 2V12a.5.5 0 0 1-.5.5H8.5m0-4v4\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"m12.5 5.5-4-4v3a1 1 0 0 0 1 1z\"/><path d=\"M8.5 1.5h-5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8\"/></g></svg>"
  },
  {
    "name": "TriggerStartedByAButton",
    "filename": "trigger-started-by-a-button.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "trigger"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m8 7 2.5 6.5 1-3 3-1z\"/><path stroke-opacity=\".25\" d=\"M7 3.5 7.5 5M6 6.5 4.5 6m6-1.5-1 1m-3 3-1 1\"/><path d=\"M13.5 5.5v-3a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4\"/></g></svg>"
  },
  {
    "name": "TriggerStartedAtASpecificTime",
    "filename": "trigger-started-at-a-specific-time.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "trigger",
      "clock",
      "time",
      "date",
      "watch"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 7.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0\"/><path d=\"M6.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M7.5 3.5v3m1 2 1 1\"/></g></svg>"
  },
  {
    "name": "TriggerConnectorEvent",
    "filename": "trigger-connector-event.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "trigger",
      "plug",
      "energy",
      "power"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 6 5.5 7.5M10 9l-1.5 1.5M13 3a3.536 3.536 0 0 0-5 0l-.5.5 5 5L13 8a3.536 3.536 0 0 0 0-5m0 0 1.5-1.5M4 12a3.536 3.536 0 0 0 5 0l.5-.5-5-5L4 7a3.536 3.536 0 0 0 0 5m0 0-2.5 2.5\"/></g></svg>"
  },
  {
    "name": "ToolbarTrigger",
    "filename": "toolbar-trigger.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "toolbar"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 7.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0M5.5 5.5h2m0 0h2m-2 0v5\"/></g></svg>"
  },
  {
    "name": "ToolbarAll",
    "filename": "toolbar-all.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "toolbar"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M1.5 2.5h12m-12 5h8m-8 5h4\"/></svg>"
  },
  {
    "name": "ToolbarAction",
    "filename": "toolbar-action.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "toolbar",
      "lightning",
      "flash",
      "activity",
      "auto"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 7.5 3 6l3.5-3.5-1.25 4.75L7.5 8.5 6 10l-3.5 3.5 1.25-4.75zM9.5 13.5l2-5 2 5M10 12.5h3\"/></g></svg>"
  },
  {
    "name": "System",
    "filename": "system.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "data",
      "control",
      "preferences",
      "system"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 3.5s1 2 6 2 6-2 6-2-1-2-6-2-6 2-6 2\"/><path d=\"M13.5 3.5v8s-1 2-6 2-6-2-6-2v-8\"/><path d=\"M13.5 7.5s-1 2-6 2-6-2-6-2\"/></g></svg>"
  },
  {
    "name": "RefreshError",
    "filename": "refresh-error.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "refresh",
      "lightning",
      "flash",
      "activity"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path stroke-linejoin=\"round\" d=\"m12.25 9.25 2.25 1.25-5 4 1.25-3.75L8.5 9.5l5-4z\"/><path d=\"M10.036 3.964A5 5 0 1 0 7.5 12.4\"/><path stroke-linejoin=\"round\" d=\"M7.5 4.5h3v-3\"/></g></svg>"
  },
  {
    "name": "RefreshAll",
    "filename": "refresh-all.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "refresh",
      "auto"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path stroke-linejoin=\"round\" d=\"M9.5 14.5 12 8l2.5 6.5M10.5 12.5h3\"/><path d=\"M10.036 3.964A5 5 0 1 0 7.5 12.4\"/><path stroke-linejoin=\"round\" d=\"M7.5 4.5h3v-3\"/></g></svg>"
  },
  {
    "name": "ReferenceLine",
    "filename": "reference-line.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "line"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke-opacity=\".25\" d=\"M1.5 7.5h12m-6-6v12\"/><path d=\"M12.5 4.5v-1a1 1 0 0 0-1-1h-1m2 8v1a1 1 0 0 1-1 1h-1m-8-2v1a1 1 0 0 0 1 1h1m-2-8v-1a1 1 0 0 1 1-1h1\"/></g></svg>"
  },
  {
    "name": "Publish",
    "filename": "publish.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "spaceship",
      "rocket",
      "space"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M3.587 10.78C2.772 11.464 2.5 13.5 2.5 13.5s2.033-.272 2.718-1.088c.386-.457.38-1.16-.049-1.584a1.185 1.185 0 0 0-1.582-.049\"/><path d=\"m7.5 10.5-2-2c1.254-3.252 4.507-6.022 8.083-6 0 3.584-2.8 6.751-6.083 8\"/><path d=\"M5.5 8.5h-3s0-2.36 1-2.86 3 .5 3 .5M7.5 10.5v3s2.36 0 2.86-1-.5-3-.5-3M10.5 5.5h.005\"/></g></svg>"
  },
  {
    "name": "PlaySolid",
    "filename": "play-solid.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "nodes",
      "solid",
      "play",
      "triangle",
      "forward",
      "next",
      "control"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M4.249 3.068a.5.5 0 0 1 .5-.002l7 4a.5.5 0 0 1 0 .868l-7 4A.5.5 0 0 1 4 11.5v-8a.5.5 0 0 1 .249-.432\" clip-rule=\"evenodd\"/></svg>"
  },
  {
    "name": "PbpOutput",
    "filename": "pbp-output.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "packaged",
      "arrow",
      "right",
      "import",
      "output",
      "volume",
      "axis",
      "dimension",
      "3d",
      "cube"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.5 8.5V4.809a.5.5 0 0 0-.276-.447l-5.5-2.75a.5.5 0 0 0-.448 0l-5.5 2.75a.5.5 0 0 0-.276.447v6.382a.5.5 0 0 0 .276.447l5.5 2.75a.5.5 0 0 0 .448 0L9.5 13.5\"/><path d=\"M11.5 5.5 7.724 7.388a.5.5 0 0 1-.448 0L3.5 5.5\"/><path stroke-opacity=\".25\" d=\"M3.5 7.5v3l2 1M5.5 4.5l2-1 2 1\"/><path d=\"m11.5 13.5 2-2m0 0-2-2m2 2h-4a2 2 0 0 1-2-2v-2\"/></g></svg>"
  },
  {
    "name": "PbpInput",
    "filename": "pbp-input.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "packaged",
      "arrow",
      "right",
      "input",
      "import",
      "volume",
      "axis",
      "dimension",
      "3d",
      "cube"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m11.5 5.5-4 2m0 0-4-2m4 2v5\"/><path stroke-opacity=\".25\" d=\"M11.5 7.5v3l-2 1M5.5 4.5l2-1 2 1\"/><path d=\"m5.5 13.5 1.776.888a.5.5 0 0 0 .448 0l5.5-2.75a.5.5 0 0 0 .276-.447V4.809a.5.5 0 0 0-.276-.447l-5.5-2.75a.5.5 0 0 0-.448 0l-5.5 2.75a.5.5 0 0 0-.276.447V8.5a2 2 0 0 0 2 2h2m0 0-2 2m2-2-2-2\"/></g></svg>"
  },
  {
    "name": "Packaged",
    "filename": "packaged.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "packaged",
      "3d",
      "dimension",
      "axis",
      "volume",
      "cube"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m7.276 1.612-5.5 2.75a.5.5 0 0 0-.276.447v6.382a.5.5 0 0 0 .276.447l5.5 2.75a.5.5 0 0 0 .448 0l5.5-2.75a.5.5 0 0 0 .276-.447V4.809a.5.5 0 0 0-.276-.447l-5.5-2.75a.5.5 0 0 0-.448 0M11.5 5.5l-4 2m0 0-4-2m4 2v5\"/><path d=\"M3.5 5.5v5l4 2M11.5 7.5v3l-2 1M5.5 4.5l2-1 2 1\"/></g></svg>"
  },
  {
    "name": "PackagedOutport",
    "filename": "packaged-outport.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "packaged",
      "arrow",
      "right",
      "output",
      "volume",
      "axis",
      "dimension",
      "3d",
      "cube"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.5 8.5V4.809a.5.5 0 0 0-.276-.447l-5.5-2.75a.5.5 0 0 0-.448 0l-5.5 2.75a.5.5 0 0 0-.276.447v6.382a.5.5 0 0 0 .276.447L6.5 14M3.5 5.5l4 2m0 0 4-2m-4 2v5\"/><path d=\"M3.5 5.5v5l4 2M9.5 4.5l-2-1-2 1M12.5 10.5l2 2m0 0-2 2m2-2h-5\"/></g></svg>"
  },
  {
    "name": "PackagedImport",
    "filename": "packaged-import.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "packaged",
      "arrow",
      "right",
      "input",
      "import",
      "volume",
      "axis",
      "dimension",
      "3d",
      "cube"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 9.5V4.809a.5.5 0 0 1 .276-.447l5.5-2.75a.5.5 0 0 1 .448 0l5.5 2.75a.5.5 0 0 1 .276.447v6.382a.5.5 0 0 1-.276.447L9.5 14M12.5 5.5l-4 2m0 0-4-2m4 2v5\"/><path d=\"M12.5 7.5v3l-2 1M6.5 4.5l2-1 2 1M4.5 10.5l2 2m0 0-2 2m2-2h-5\"/></g></svg>"
  },
  {
    "name": "PackagedAdd",
    "filename": "packaged-add.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "packaged",
      "add",
      "create",
      "plus",
      "volume",
      "axis",
      "dimension",
      "3d",
      "cube"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 6.5V4.809a.5.5 0 0 1 .276-.447l5.5-2.75a.5.5 0 0 1 .448 0l5.5 2.75a.5.5 0 0 1 .276.447v6.382a.5.5 0 0 1-.276.447L9.5 14\"/><path d=\"M12.5 5.5 8.724 7.388a.5.5 0 0 1-.448 0L4.5 5.5M12.5 7.5v3l-2 1M6.5 4.5l2-1 2 1M6 11.5H3M4.5 13v-3M7.5 11.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0\"/></g></svg>"
  },
  {
    "name": "HistotyList",
    "filename": "histoty-list.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "histoty",
      "list",
      "bullets"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.5 1.5h-11a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1M4.5 4.5h1m2 0h4m-7 3h1m2 0h4m-7 3h1m2 0h4\"/></g></svg>"
  },
  {
    "name": "FitScreen",
    "filename": "fit-screen.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "screen",
      "expand",
      "maximize"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.5 4.5v-1a1 1 0 0 0-1-1h-1m2 8v1a1 1 0 0 1-1 1h-1m-8-2v1a1 1 0 0 0 1 1h1m-2-8v-1a1 1 0 0 1 1-1h1\"/></svg>"
  },
  {
    "name": "DuplicateSolid",
    "filename": "duplicate-solid.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "nodes",
      "solid",
      "duplicate",
      "copy",
      "clone",
      "paste"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g fill=\"currentColor\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"><path d=\"M6 3a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H6.5a.5.5 0 0 1-.5-.5z\"/><path d=\"M2 7a1 1 0 0 1 1-1h1.5a.5.5 0 0 1 .5.5V10h3.5a.5.5 0 0 1 .5.5V12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z\"/></g></svg>"
  },
  {
    "name": "CircleUnpassedSolid",
    "filename": "circle-unpassed-solid.svg",
    "category": "workflow",
    "tags": [
      "circle",
      "solid",
      "control",
      "empty",
      "nothing"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8M6.707 5.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414-1.414z\" clip-rule=\"evenodd\"/></svg>"
  },
  {
    "name": "CircleSuccessSolid",
    "filename": "circle-success-solid.svg",
    "category": "workflow",
    "tags": [
      "circle",
      "solid",
      "success",
      "select",
      "done",
      "checked",
      "tick",
      "completed",
      "choice",
      "control"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8m3.707 6.707a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0z\" clip-rule=\"evenodd\"/></svg>"
  },
  {
    "name": "CircleSkipSolid",
    "filename": "circle-skip-solid.svg",
    "category": "workflow",
    "tags": [
      "circle",
      "solid",
      "arrow",
      "right",
      "control"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8m3.207 4.793a1 1 0 0 0-1.414 1.414l.793.793H7a1 1 0 0 0 0 2h3.586l-.793.793a1 1 0 0 0 1.414 1.414l2.5-2.5a1 1 0 0 0 0-1.414zM3 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2\" clip-rule=\"evenodd\"/></svg>"
  },
  {
    "name": "CirclePlaySolid",
    "filename": "circle-play-solid.svg",
    "category": "workflow",
    "tags": [
      "circle",
      "solid",
      "play",
      "triangle",
      "forward",
      "next",
      "control"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M0 8c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8m6.528-2.882a1 1 0 0 1 1.027.05l2.99 1.993a1 1 0 0 1 0 1.678l-2.99 1.993A1 1 0 0 1 6 10V6a1 1 0 0 1 .528-.882\" clip-rule=\"evenodd\"/></svg>"
  },
  {
    "name": "CirclePauseSolid",
    "filename": "circle-pause-solid.svg",
    "category": "workflow",
    "tags": [
      "circle",
      "solid",
      "pause",
      "control"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8M7 6a1 1 0 0 0-2 0v4a1 1 0 1 0 2 0zm4 0a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z\" clip-rule=\"evenodd\"/></svg>"
  },
  {
    "name": "CircleErrorSolid",
    "filename": "circle-error-solid.svg",
    "category": "workflow",
    "tags": [
      "circle",
      "solid",
      "clear",
      "remove",
      "delete",
      "control"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8M6.207 4.793a1 1 0 0 0-1.414 1.414L6.586 8 4.793 9.793a1 1 0 0 0 1.414 1.414L8 9.414l1.793 1.793a1 1 0 0 0 1.414-1.414L9.414 8l1.793-1.793a1 1 0 0 0-1.414-1.414L8 6.586z\" clip-rule=\"evenodd\"/></svg>"
  },
  {
    "name": "Bolt",
    "filename": "bolt.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "lightning",
      "flash",
      "activity"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m3.5 8.5 7-7-2 5 4 1-7 7 2-5z\"/></svg>"
  },
  {
    "name": "BoltSolid",
    "filename": "bolt-solid.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "solid",
      "lightning",
      "flash",
      "activity"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m3.5 8.5 7-7-2 5 4 1-7 7 2-5z\"/></svg>"
  },
  {
    "name": "BinSolid",
    "filename": "bin-solid.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "nodes",
      "solid",
      "trash",
      "clear",
      "remove",
      "delete"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M6 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h3a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2h3zM4.118 7.177A.5.5 0 0 1 4.5 7h7a.5.5 0 0 1 .493.582l-.86 5.165A1.5 1.5 0 0 1 9.653 14H6.347a1.5 1.5 0 0 1-1.48-1.253l-.86-5.165a.5.5 0 0 1 .111-.405\" clip-rule=\"evenodd\"/></svg>"
  },
  {
    "name": "AutoLayout",
    "filename": "auto-layout.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "auto"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.5 11.5v1a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-1M4.5 10.5l3-7 3 7M5.5 8.5h4M13.5 3.5v-1a1 1 0 0 0-1-1h-1m-10 2v-1a1 1 0 0 1 1-1h1\"/></g></svg>"
  },
  {
    "name": "AddBranchSolid",
    "filename": "add-branch-solid.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "nodes",
      "solid",
      "plus",
      "create",
      "add"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M5 6.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0m5-2a.5.5 0 0 0-1 0V6H7.5a.5.5 0 0 0 0 1H9v1.5a.5.5 0 0 0 1 0V7h1.5a.5.5 0 0 0 0-1H10z\" clip-rule=\"evenodd\"/><path d=\"M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4\"/></g></svg>"
  },
  {
    "name": "ActionWebhook",
    "filename": "action-webhook.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "action"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m4 11 1.24-2.171 1.51-2.664a2.5 2.5 0 1 1 3.7-1.665M6.292 10A2.5 2.5 0 1 1 3.5 8.55\"/><path d=\"M3.5 11a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0\"/><path stroke-opacity=\".25\" d=\"M10.925 8.55 8 4m0 .5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1\"/><path d=\"M8.5 11h-2M11.5 14.5 13 13m0 0-2.5-1.5L12 10m1 3 1.5-1.5L12 10m1.5-1.5L12 10\"/></g></svg>"
  },
  {
    "name": "ActionWaitForSomeTime",
    "filename": "action-wait-for-some-time.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "action",
      "clock",
      "stopwatch",
      "watch",
      "time",
      "date"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 8.5a5 5 0 1 1-5-5\"/><path stroke-opacity=\".25\" d=\"M9.5 3.916A5.02 5.02 0 0 1 12.084 6.5\"/><path d=\"M7.5 6.5v2l-2 2M7.5 3.5v-2m-2 0h4\"/></g></svg>"
  },
  {
    "name": "ActionUpdateRecord",
    "filename": "action-update-record.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "action",
      "record"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 12.5h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2m-9-4v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4M9.364 9.465A4 4 0 1 0 9.208 12\"/><path d=\"m7.422 9.095 1.932.517.517-1.931M4.5 10.5h.005M6.5 10.5h.005\"/></g></svg>"
  },
  {
    "name": "ActionPath",
    "filename": "action-path.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "action",
      "list"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 2.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M11.5 2.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M11.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M11.5 12.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/><path d=\"M4.5 2.5h7m0 5h-6m-2-2v6a1 1 0 0 0 1 1h7\"/></g></svg>"
  },
  {
    "name": "ActionPackagedNode",
    "filename": "action-packaged-node.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "action"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m7.276 1.612-5.5 2.75a.5.5 0 0 0-.276.447v6.382a.5.5 0 0 0 .276.447l5.5 2.75a.5.5 0 0 0 .448 0l5.5-2.75a.5.5 0 0 0 .276-.447V4.809a.5.5 0 0 0-.276-.447l-5.5-2.75a.5.5 0 0 0-.448 0M11.5 5.5l-4 2m0 0-4-2m4 2v5\"/><path d=\"M3.5 7.5v3l2 1M11.5 7.5v3l-2 1M5.5 4.5l2-1 2 1\"/></g></svg>"
  },
  {
    "name": "ActionNotification",
    "filename": "action-notification.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "action",
      "megaphone",
      "update"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m7.151 10.401.717 1.425a1.151 1.151 0 0 1-2.047 1.048L3.576 8.5\"/><path d=\"M11.5 10.5s-2.952-2-4.976-2H3.5a2 2 0 1 1 0-4h3.024c1.976 0 4.976-2 4.976-2zM11.5 4.5a2 2 0 1 1 0 4\"/><path stroke-opacity=\".25\" d=\"M9.5 5.5v2\"/></g></svg>"
  },
  {
    "name": "ActionIf",
    "filename": "action-if.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "action",
      "if",
      "branch"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6.5 2.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M2.5 13.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M11.5 13.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/><path d=\"M3.5 12.5v-4a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-3\"/><path stroke-opacity=\".25\" d=\"M9.5 7.5h2a1 1 0 0 1 1 1v4\"/></g></svg>"
  },
  {
    "name": "ActionHttpRequest",
    "filename": "action-http-request.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "action",
      "url"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 5.5v3a1 1 0 0 0 2 0v-3m2 2v-2h1a1 1 0 0 1 0 2m-1 0v2m0-2h1m0 0 1 2m2-4v4h3v3a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v4\"/><path stroke-opacity=\".25\" d=\"M3.5 11.5h9\"/></g></svg>"
  },
  {
    "name": "ActionGetSegmentFilters",
    "filename": "action-get-segment-filters.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "action",
      "filter"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m13.5 6.5-3 3.5v4.5l-2-1V10l-3-3.5\"/><path stroke-opacity=\".25\" d=\"M8.5 6.5h2\"/><path d=\"M4.5 4.5h10M13.5 2.5a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h3\"/></g></svg>"
  },
  {
    "name": "ActionGetRecordsFromWebhook",
    "filename": "action-get-records-from-webhook.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "action",
      "webhook"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5.5 12.5a2 2 0 1 1-3-1.732\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M11.5 14.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4\"/><path d=\"M3.5 12.5h.005M14.5 9.5a1 1 0 0 0-1-1h-2m0-3h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1m6 0a2 2 0 1 0-3.163 1.628L4.5 10.5M7.5 5.5l2 3.5M5.5 12.5h4\"/></g></svg>"
  },
  {
    "name": "ActionGetRecordsFromLinkedRecords",
    "filename": "action-get-records-from-linked-records.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "action",
      "arrow",
      "right",
      "input",
      "import",
      "output"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.5 5.5h4M10.5 10.5h4\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M8.5 4.5h2v2h-2zM8.5 9.5h2v2h-2z\"/><path d=\"M1.5 10.5h5m0 0-2-2m2 2-2 2M12.5 12.5v1a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-1m0-4v-6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1m0 5v-1\"/></g></svg>"
  },
  {
    "name": "ActionGetRecordsFromCodeBlock",
    "filename": "action-get-records-from-code-block.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "action",
      "record"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 12.5h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2m-9-4v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2M2.5 6.5h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1\"/><path d=\"m4.5 8.5 2 2-2 2\"/></g></svg>"
  },
  {
    "name": "ActionGetRecordsFromANode",
    "filename": "action-get-records-from-a-node.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "action",
      "record"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8.5 12.5h-5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h7m-8-4v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1M11.5 14.5 13 13m0 0-2.5-1.5L12 10m1 3 1.5-1.5L12 10m1.5-1.5L12 10\"/></g></svg>"
  },
  {
    "name": "ActionGetRecordsFromADatasheet",
    "filename": "action-get-records-from-a-datasheet.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "action",
      "from",
      "from"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 12.5v1a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1m0 4v1M6.5 5.5h8m-6 5h6\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M4.5 4.5h2v2h-2zM4.5 9.5h2v2h-2z\"/></g></svg>"
  },
  {
    "name": "ActionGetOneRecordFromLinkedRecords",
    "filename": "action-get-one-record-from-linked-records.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "action",
      "arrow",
      "right",
      "input",
      "import",
      "output",
      "from",
      "from"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.5 5.5h4\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M10.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M10.5 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0\"/><path d=\"M1.5 10.5h5m0 0-2-2m2 2-2 2M12.5 7.5v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-1m0-4v-6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1\"/></g></svg>"
  },
  {
    "name": "ActionGetOneRecordFromADatasheet",
    "filename": "action-get-one-record-from-a-datasheet.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "action",
      "from",
      "from"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 7.5v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1M6.5 5.5h8\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M6.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6.5 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0\"/><path d=\"M8.5 10.5h2\"/></g></svg>"
  },
  {
    "name": "ActionFormulaNode",
    "filename": "action-formula-node.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "action",
      "equation"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 8.5h7M13.5 14.5l-3-3m3 0-3 3M12.5 4.5h-1.512a2 2 0 0 0-1.916 1.425l-2.144 7.15A2 2 0 0 1 5.012 14.5H2.5a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1\"/></g></svg>"
  },
  {
    "name": "ActionDeleteRecord",
    "filename": "action-delete-record.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "action",
      "clear",
      "remove",
      "delete",
      "record"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 12.5h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2m-9-4v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4M7.5 10.5h-4M9.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0\"/></g></svg>"
  },
  {
    "name": "ActionDateNode",
    "filename": "action-date-node.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "action",
      "dynamic",
      "calendar",
      "date",
      "time"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 2.5h-2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h7m1-11h2a1 1 0 0 1 1 1v3m-7-4h2M1.5 5.5h12M4.5 1.5v2m6-2v2M11.5 14.5 13 13m0 0-2.5-1.5L12 10m1 3 1.5-1.5L12 10m1.5-1.5L12 10M3.5 7.5h.005m1.995 0h.005m1.995 0h.005M3.5 9.5h.005m1.995 0h.005m1.995 0h.005m1.995-2h.005m-.005 2h.005m1.995-2h.005m-8.005 4h.005m1.995 0h.005m1.995 0h.005\"/></g></svg>"
  },
  {
    "name": "ActionCreateRecord",
    "filename": "action-create-record.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "action",
      "plus",
      "create",
      "add"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 12.5h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2m-9-4v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4M7.5 10.5h-4m2 2v-4M9.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0\"/></g></svg>"
  },
  {
    "name": "ActionConnectorRequestNode",
    "filename": "action-connector-request-node.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "action",
      "dynamic",
      "plug",
      "energy",
      "power"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 13.5 13 12m0 0-2.5-1.5L12 9m1 3 1.5-1.5L12 9m1.5-1.5L12 9\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M7.5 13.5h-1a3 3 0 1 1 0-6h1z\"/><path d=\"M3.5 10.5h-1a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h9M7.5 12.5h2m-2-4h2M11.5 2.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/></g></svg>"
  },
  {
    "name": "ActionCodeBlock",
    "filename": "action-code-block.svg",
    "category": "workflow",
    "tags": [
      "workflow",
      "action",
      "code",
      "development"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m4.5 5.5 2 2-2 2m-2 3h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1\"/><path stroke-opacity=\".25\" d=\"M7.5 9.5h4\"/></g></svg>"
  },
  {
    "name": "Wecom",
    "filename": "wecom.svg",
    "category": "logo",
    "tags": [
      "brand",
      "logo",
      "wecom",
      "solid"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g fill=\"currentColor\"><path d=\"M6.19 2.04c-1.457.163-2.782.8-3.732 1.793a5 5 0 0 0-.911 1.305 4.63 4.63 0 0 0 .314 4.595 7 7 0 0 0 1.071 1.247l-.175 1.405-.02.059a.2.2 0 0 0-.007.055l-.004.046.004.045c.023.25.238.433.48.412a.45.45 0 0 0 .187-.061h.008l.027-.02.42-.213 1.25-.64c.593.173 1.21.26 1.827.256.663.002 1.322-.1 1.954-.3a1.74 1.74 0 0 1-.534-.827A1.49 1.49 0 0 1 9.4 9.38l.042-.012.044-.006c.46-.06.986-.364 1.141-.623.06-.1.083-.266.107-.451.04-.293.086-.635.298-.852a1.46 1.46 0 0 1 1.749-.268c0-.694-.156-1.38-.459-2.004a5 5 0 0 0-.902-1.306A6.08 6.08 0 0 0 7.7 2.052a6.3 6.3 0 0 0-1.51-.013\"/><path d=\"M10.497 11.556a.2.2 0 0 0 .024.301c.425.408.697.948.772 1.532a.81.81 0 0 0 1 .581.83.83 0 0 0 .572-1.01l-.002-.009a.82.82 0 0 0-.7-.606 2.48 2.48 0 0 1-1.39-.791.197.197 0 0 0-.276.002m3.673-1.529a.8.8 0 0 0-.367.217h-.002a.83.83 0 0 0-.232.498 2.56 2.56 0 0 1-.773 1.419.2.2 0 0 0-.005.278l.001.002a.193.193 0 0 0 .279.002q.014-.014.022-.03c.394-.429.925-.707 1.502-.784a.83.83 0 0 0 .574-1.017.81.81 0 0 0-.999-.585M11.11 9.2l-.014.014a2.47 2.47 0 0 1-1.525.812.826.826 0 0 0-.576 1.007.83.83 0 0 0 .216.38.804.804 0 0 0 1.152-.002.85.85 0 0 0 .233-.496c.1-.544.372-1.042.777-1.419a.203.203 0 0 0 .017-.278l-.002-.002a.196.196 0 0 0-.279-.016m.755-1.509a.8.8 0 0 0-.357.213.84.84 0 0 0-.007 1.162l.009.01a.8.8 0 0 0 .487.239c.534.1 1.022.376 1.39.786a.19.19 0 0 0 .321-.071.2.2 0 0 0-.073-.232 2.57 2.57 0 0 1-.77-1.53.81.81 0 0 0-1-.577\"/></g></svg>"
  },
  {
    "name": "WecomColor",
    "filename": "wecom-color.svg",
    "category": "logo",
    "tags": [
      "brand",
      "logo",
      "wecom",
      "colourful",
      "color",
      "solid"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#007AFF\" d=\"M12.48 6.787a7 7 0 0 0-.164-.92 4.83 4.83 0 0 0-1.81-2.613 6.16 6.16 0 0 0-4.613-1.191 5.7 5.7 0 0 0-1.647.439 5.5 5.5 0 0 0-2.257 1.734 4.7 4.7 0 0 0-.986 2.715 4.7 4.7 0 0 0 .783 2.784c.264.398.569.753.914 1.045q.061.063.061.126c-.02.167-.06.334-.101.502a2.4 2.4 0 0 0-.102.668q0 .22.122.44a.82.82 0 0 0 1.139.313c.386-.23.772-.48 1.158-.71a.24.24 0 0 1 .204-.022c.447.105.914.188 1.382.188a6 6 0 0 0 1.484-.125c.245-.063.489-.125.753-.188l-.508-.752H8.25c-.346.062-.692.167-1.058.188a5.6 5.6 0 0 1-2.195-.251.19.19 0 0 0-.183.02c-.346.21-.691.419-1.037.649-.142.083-.264.167-.427.25.02-.083.02-.146.02-.188.082-.439.163-.857.265-1.296.02-.062 0-.125-.061-.146a5 5 0 0 1-.895-.836 3.7 3.7 0 0 1-.763-1.427 3.8 3.8 0 0 1-.09-1.626 3.8 3.8 0 0 1 1.016-2.07 4.9 4.9 0 0 1 1.647-1.17 6.2 6.2 0 0 1 1.708-.397 7.4 7.4 0 0 1 1.178.02c.407.021.813.126 1.2.272a4.87 4.87 0 0 1 2.154 1.485c.407.46.672 1.024.813 1.63.062.251.083.523.123.773l.833.127c0-.147 0-.294-.02-.44\"/><path fill=\"#FCD514\" d=\"M9.755 11.721a.76.76 0 0 1-.546-.232.8.8 0 0 1-.226-.562c0-.355.244-.669.569-.773.162-.042.345-.063.528-.126.332-.147.64-.345.915-.586.02-.02.061-.042.101-.063.062-.02.123-.02.184-.041 0 .062 0 .125-.02.188a2 2 0 0 1-.163.25 2.9 2.9 0 0 0-.508 1.005c-.041.104-.041.23-.062.355-.122.334-.426.585-.772.585\"/><path fill=\"#FF6702\" d=\"M11.971 14c-.406 0-.772-.334-.772-.752a2.14 2.14 0 0 0-.366-.92c-.102-.147-.224-.293-.326-.46-.04-.063-.061-.147-.04-.21.06-.083.162-.02.223.042.224.147.448.314.692.46.223.146.467.23.731.272a.74.74 0 0 1 .463.25c.12.14.186.318.188.503 0 .376-.224.71-.59.794-.081.021-.142.021-.203.021\"/><path fill=\"#0087FA\" d=\"M15 10.885a.87.87 0 0 1-.228.553.82.82 0 0 1-.524.262c-.288.04-.56.155-.793.335a6 6 0 0 0-.57.418c-.02.02-.04.042-.06.042-.041.02-.082 0-.122 0-.02-.042-.041-.084-.02-.126.04-.104.101-.188.162-.272a3.3 3.3 0 0 0 .55-1.065c.04-.126.04-.272.08-.398a.78.78 0 0 1 .329-.436.75.75 0 0 1 .525-.107c.346.063.61.334.65.69 0 .041.021.083.021.104\"/><path fill=\"#2AC402\" d=\"M11.178 8.606c0-.418.305-.752.712-.794a.754.754 0 0 1 .833.648c.081.501.305.982.651 1.358.061.085.102.148.142.231.02.042.02.084-.02.126a.061.061 0 0 1-.081 0 .5.5 0 0 1-.184-.105 3.5 3.5 0 0 0-.955-.586c-.142-.042-.305-.084-.468-.125-.386-.042-.63-.377-.63-.753\"/></svg>"
  },
  {
    "name": "Wechat",
    "filename": "wechat.svg",
    "category": "logo",
    "tags": [
      "brand",
      "logo",
      "wechat",
      "solid"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g fill=\"currentColor\"><path d=\"M5.803 1.534C2.516 1.534 0 3.765 0 6.196s2.172 3.841 2.172 3.841l-.353 1.338a.206.206 0 0 0 .301.232l1.587-.899c.702.223 2.191.295 2.336.301a3.8 3.8 0 0 1-.155-1.048c0-1.877 1.634-4.52 5.266-4.52q.124 0 .248.005c-.484-2.312-2.886-3.912-5.599-3.912M3.639 5.408a.721.721 0 1 1 0-1.443.721.721 0 0 1 0 1.443m4.193 0a.721.721 0 1 1 0-1.443.721.721 0 0 1 0 1.443\"/><path d=\"M16 9.668c0-2.13-2.499-3.69-4.847-3.69-3.321 0-4.73 2.398-4.73 3.983 0 1.588 1.409 3.983 4.73 3.983a6.1 6.1 0 0 0 1.943-.292l1.249.793a.13.13 0 0 0 .197-.14l-.283-1.23C15.439 12.254 16 10.958 16 9.668m-6.365-.405a.637.637 0 1 1 0-1.273.637.637 0 0 1 0 1.273m3.187 0a.637.637 0 1 1 0-1.273.637.637 0 0 1 0 1.273\"/></g></svg>"
  },
  {
    "name": "WechatPublic",
    "filename": "wechat-public.svg",
    "category": "logo",
    "tags": [
      "brand",
      "logo",
      "wechat",
      "colourful",
      "color",
      "solid"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g fill=\"#31BF63\"><path d=\"M12.021 4.33C11.381 3.02 9.771 1.9 7.947 1.9c-.96 0-2.422.33-3.515 1.653a3.67 3.67 0 0 0-.821 2.95c.106.709.501 1.642 1.066 2.234.214-1.499 1.003-2.677 2.038-3.541C8.576 3.76 10.57 3.84 12.02 4.33\" opacity=\".7\"/><path d=\"M13.477 6.576c-1.141-1.483-3.12-1.899-4.901-1.237q.09.023.17.053c2.64.901 4.07 3.765 3.19 6.395a5 5 0 0 1-1.083 1.818c.571-.16 1.152-.384 1.648-.768 2.016-1.541 2.411-4.4.976-6.261\" opacity=\".7\"/><path d=\"M7.941 11.317c-.4 0-.789-.048-1.162-.128a.626.626 0 0 0-.448.09l-1.232.79a.3.3 0 0 1-.112.043.196.196 0 0 1-.203-.187c0-.048.016-.096.027-.144.005-.026.138-.618.218-.992a.5.5 0 0 0 .016-.122.39.39 0 0 0-.17-.304C3.573 9.477 2.683 8.085 2.49 6.65a5.3 5.3 0 0 0-.672 1.514c-.635 2.219.757 4.88 3.024 5.627 2.608.859 5.098-.107 5.957-2.325.107-.272.219-.726.24-1.11-.912.672-1.877.96-3.099.96\" opacity=\".7\"/><path d=\"M7.941 11.317c-.4 0-.789-.048-1.162-.128a.626.626 0 0 0-.448.09l-1.232.79a.3.3 0 0 1-.112.043.196.196 0 0 1-.203-.187c0-.048.016-.096.027-.144.005-.026.138-.618.218-.992a.5.5 0 0 0 .016-.122.39.39 0 0 0-.17-.304C3.573 9.477 2.683 8.085 2.49 6.65a5.3 5.3 0 0 0-.672 1.514c-.635 2.219.757 4.88 3.024 5.627 2.608.859 5.098-.107 5.957-2.325.107-.272.219-.726.24-1.11-.912.672-1.877.96-3.099.96\" opacity=\".7\"/></g></svg>"
  },
  {
    "name": "TeamsColor",
    "filename": "teams-color.svg",
    "category": "logo",
    "tags": [
      "brand",
      "logo",
      "teams",
      "colourful",
      "color",
      "solid"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><mask id=\"a\" width=\"16\" height=\"16\" x=\"0\" y=\"0\" mask-type=\"luminance\" maskUnits=\"userSpaceOnUse\"><path fill=\"#fff\" d=\"M16 0H0v16h16z\"/></mask><g mask=\"url(#a)\"><path fill=\"#5059C9\" d=\"M10.998 6.233h3.921c.37 0 .671.3.671.672v3.578a2.47 2.47 0 0 1-2.465 2.47h-.012a2.467 2.467 0 0 1-2.466-2.47V6.584a.35.35 0 0 1 .351-.351M13.648 5.526a1.59 1.59 0 0 0 1.59-1.592 1.59 1.59 0 0 0-1.59-1.591 1.59 1.59 0 0 0-1.588 1.591 1.59 1.59 0 0 0 1.588 1.592\"/><path fill=\"#7B83EB\" d=\"M8.706 5.526A2.297 2.297 0 0 0 11 3.226 2.297 2.297 0 0 0 8.706.929 2.297 2.297 0 0 0 6.41 3.227a2.297 2.297 0 0 0 2.295 2.299M11.766 6.233H5.292a.664.664 0 0 0-.648.68v4.08a3.986 3.986 0 0 0 3.884 4.081 3.986 3.986 0 0 0 3.884-4.08V6.913a.664.664 0 0 0-.648-.68\"/><path fill=\"currentColor\" d=\"M8.882 6.233v5.719a.65.65 0 0 1-.646.647h-3.28a4.314 4.314 0 0 1-.31-1.606V6.912a.663.663 0 0 1 .645-.68z\" opacity=\".1\"/><path fill=\"currentColor\" d=\"M8.529 6.233v6.072a.65.65 0 0 1-.646.647H5.122a5 5 0 0 1-.166-.353 4.314 4.314 0 0 1-.31-1.606V6.912a.663.663 0 0 1 .645-.68z\" opacity=\".2\"/><path fill=\"currentColor\" d=\"M8.529 6.233v5.365a.65.65 0 0 1-.646.647h-3.05a4.3 4.3 0 0 1-.188-1.252V6.912a.663.663 0 0 1 .646-.68z\" opacity=\".2\"/><path fill=\"currentColor\" d=\"M8.176 6.233v5.365a.65.65 0 0 1-.646.647H4.833a4.3 4.3 0 0 1-.188-1.252V6.912a.663.663 0 0 1 .646-.68z\" opacity=\".2\"/><path fill=\"currentColor\" d=\"M8.882 4.404v1.114c-.06.004-.116.008-.176.008q-.088-.001-.177-.008a2.296 2.296 0 0 1-2.055-1.761h1.762a.65.65 0 0 1 .646.647\" opacity=\".1\"/><path fill=\"currentColor\" d=\"M8.529 4.758v.76A2.296 2.296 0 0 1 6.587 4.11h1.296a.65.65 0 0 1 .646.648\" opacity=\".2\"/><path fill=\"currentColor\" d=\"M8.529 4.758v.76A2.296 2.296 0 0 1 6.587 4.11h1.296a.65.65 0 0 1 .646.648\" opacity=\".2\"/><path fill=\"currentColor\" d=\"M8.176 4.758v.704A2.3 2.3 0 0 1 6.587 4.11h.943a.65.65 0 0 1 .646.647\" opacity=\".2\"/><path fill=\"url(#b)\" d=\"M1.056 4.11h6.473c.357 0 .647.291.647.65v6.483c0 .358-.29.648-.647.648H1.056a.65.65 0 0 1-.647-.648V4.76c0-.358.29-.648.647-.648\"/><path fill=\"#fff\" d=\"M5.995 6.579H4.702v3.53h-.825v-3.53H2.59v-.685h3.406z\"/></g><defs><linearGradient id=\"b\" x1=\"1.758\" x2=\"6.84\" y1=\"3.604\" y2=\"12.39\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#5A62C3\"/><stop offset=\".5\" stop-color=\"#4D55BD\"/><stop offset=\"1\" stop-color=\"#3940AB\"/></linearGradient></defs></svg>"
  },
  {
    "name": "Slack",
    "filename": "slack.svg",
    "category": "logo",
    "tags": [
      "brand",
      "logo",
      "slack",
      "solid"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><mask id=\"a\" width=\"16\" height=\"16\" x=\"0\" y=\"0\" mask-type=\"luminance\" maskUnits=\"userSpaceOnUse\"><path fill=\"#fff\" d=\"M16 0H0v16h16z\"/></mask><g fill=\"currentColor\" mask=\"url(#a)\"><path d=\"M6.044.667a1.467 1.467 0 0 0 0 2.933h1.467V2.133A1.467 1.467 0 0 0 6.044.667M6.044 4.578h-3.91a1.467 1.467 0 0 0 0 2.933h3.91a1.467 1.467 0 1 0 0-2.933M15.333 6.045a1.467 1.467 0 1 0-2.933 0V7.51h1.467a1.467 1.467 0 0 0 1.466-1.466M11.422 6.045V2.133a1.467 1.467 0 1 0-2.933 0v3.911a1.467 1.467 0 0 0 2.933 0M9.955 15.333a1.467 1.467 0 0 0 0-2.933H8.49v1.467a1.467 1.467 0 0 0 1.466 1.466M9.955 11.422h3.912a1.467 1.467 0 0 0 0-2.933H9.955a1.467 1.467 0 0 0 0 2.933M.667 9.955a1.467 1.467 0 1 0 2.933 0V8.49H2.133A1.467 1.467 0 0 0 .667 9.955M4.578 9.955v3.912a1.467 1.467 0 1 0 2.933 0V9.955a1.467 1.467 0 0 0-2.933 0\"/></g></svg>"
  },
  {
    "name": "SlackColor",
    "filename": "slack-color.svg",
    "category": "logo",
    "tags": [
      "brand",
      "logo",
      "slack",
      "colourful",
      "color",
      "solid"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><mask id=\"a\" width=\"16\" height=\"16\" x=\"0\" y=\"0\" mask-type=\"luminance\" maskUnits=\"userSpaceOnUse\"><path fill=\"#fff\" d=\"M16 0H0v16h16z\"/></mask><g mask=\"url(#a)\"><path fill=\"#36C5F0\" d=\"M6.044.667a1.467 1.467 0 0 0 0 2.933h1.467V2.133A1.467 1.467 0 0 0 6.044.667M6.044 4.578h-3.91a1.467 1.467 0 0 0 0 2.933h3.91a1.467 1.467 0 1 0 0-2.933\"/><path fill=\"#2EB67D\" d=\"M15.333 6.045a1.467 1.467 0 1 0-2.933 0V7.51h1.467a1.467 1.467 0 0 0 1.466-1.466M11.422 6.045V2.133a1.467 1.467 0 1 0-2.933 0v3.911a1.467 1.467 0 0 0 2.933 0\"/><path fill=\"#ECB22E\" d=\"M9.955 15.333a1.467 1.467 0 0 0 0-2.933H8.49v1.467a1.467 1.467 0 0 0 1.466 1.466M9.955 11.422h3.912a1.467 1.467 0 0 0 0-2.933H9.955a1.467 1.467 0 0 0 0 2.933\"/><path fill=\"#E01E5A\" d=\"M.667 9.955a1.467 1.467 0 1 0 2.933 0V8.49H2.133A1.467 1.467 0 0 0 .667 9.955M4.578 9.955v3.912a1.467 1.467 0 1 0 2.933 0V9.955a1.467 1.467 0 0 0-2.933 0\"/></g></svg>"
  },
  {
    "name": "Google",
    "filename": "google.svg",
    "category": "logo",
    "tags": [
      "brand",
      "logo",
      "google",
      "solid"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><mask id=\"a\" width=\"16\" height=\"16\" x=\"0\" y=\"0\" mask-type=\"luminance\" maskUnits=\"userSpaceOnUse\"><path fill=\"#fff\" d=\"M16 0H0v16h16z\"/></mask><g mask=\"url(#a)\"><path fill=\"currentColor\" d=\"M15.033 6.667h-7v3H12c-.633 2-2.2 2.666-4 2.666a4.333 4.333 0 1 1 2.782-7.65l2.18-2.077A7.332 7.332 0 1 0 8 15.333c4.044 0 7.7-2.666 7.033-8.666\"/></g></svg>"
  },
  {
    "name": "GoogleDriveColor",
    "filename": "google-drive-color.svg",
    "category": "logo",
    "tags": [
      "brand",
      "logo",
      "google",
      "drive",
      "colourful",
      "color",
      "solid"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><mask id=\"a\" width=\"16\" height=\"16\" x=\"0\" y=\"0\" mask-type=\"luminance\" maskUnits=\"userSpaceOnUse\"><path fill=\"#fff\" d=\"M16 0H0v16h16z\"/></mask><g mask=\"url(#a)\"><path fill=\"#0066DA\" d=\"m1.21 13.252.705 1.219c.147.256.358.458.605.605l2.52-4.362H0c0 .284.073.568.22.824z\"/><path fill=\"#00AC47\" d=\"M8 5.582 5.48 1.22a1.66 1.66 0 0 0-.605.605L.22 9.889a1.66 1.66 0 0 0-.22.825h5.04z\"/><path fill=\"#EA4335\" d=\"M13.48 15.076c.247-.147.458-.349.605-.605l.293-.504 1.402-2.429c.147-.256.22-.54.22-.824h-5.04l1.072 2.107z\"/><path fill=\"#00832D\" d=\"m8 5.582 2.52-4.362A1.6 1.6 0 0 0 9.695 1h-3.39c-.294 0-.578.082-.825.22z\"/><path fill=\"#2684FC\" d=\"M10.96 10.714H5.04l-2.52 4.362c.247.146.532.22.825.22h9.31c.293 0 .578-.083.825-.22z\"/><path fill=\"#FFBA00\" d=\"m13.453 5.857-2.328-4.032a1.66 1.66 0 0 0-.605-.605L8 5.582l2.96 5.132h5.03a1.66 1.66 0 0 0-.22-.825z\"/></g></svg>"
  },
  {
    "name": "GoogleColor",
    "filename": "google-color.svg",
    "category": "logo",
    "tags": [
      "brand",
      "logo",
      "google",
      "colourful",
      "color",
      "solid"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><mask id=\"a\" width=\"16\" height=\"16\" x=\"0\" y=\"0\" mask-type=\"luminance\" maskUnits=\"userSpaceOnUse\"><path fill=\"#fff\" d=\"M16 0H0v16h16z\"/></mask><g mask=\"url(#a)\"><path fill=\"#D94F3D\" d=\"M8 3.667a4.3 4.3 0 0 1 2.782 1.015l2.18-2.076a7.324 7.324 0 0 0-11.531 2.14L3.889 6.64A4.34 4.34 0 0 1 8 3.667\"/><path fill=\"#F2C042\" d=\"M3.667 8c0-.462.075-.922.222-1.36L1.43 4.745a7.31 7.31 0 0 0 0 6.51L3.889 9.36A4.3 4.3 0 0 1 3.667 8\"/><path fill=\"#5085ED\" d=\"M15.033 6.667h-7v3H12a3.58 3.58 0 0 1-1.518 2.054l2.438 1.88c1.559-1.399 2.474-3.673 2.113-6.934\"/><path fill=\"#57A75C\" d=\"M10.48 11.72a4.66 4.66 0 0 1-2.48.613A4.34 4.34 0 0 1 3.889 9.36L1.43 11.255A7.34 7.34 0 0 0 8 15.333a7.3 7.3 0 0 0 4.92-1.733z\"/></g></svg>"
  },
  {
    "name": "Github",
    "filename": "github.svg",
    "category": "logo",
    "tags": [
      "brand",
      "logo",
      "github",
      "solid"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><mask id=\"a\" width=\"16\" height=\"16\" x=\"0\" y=\"0\" mask-type=\"luminance\" maskUnits=\"userSpaceOnUse\"><path fill=\"#fff\" d=\"M16 0H0v16h16z\"/></mask><g mask=\"url(#a)\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M8 .2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V14c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8\" clip-rule=\"evenodd\"/></g></svg>"
  },
  {
    "name": "Feishu",
    "filename": "feishu.svg",
    "category": "logo",
    "tags": [
      "brand",
      "logo",
      "feishu",
      "solid"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M4.19 3.26a19 19 0 0 1 4.294 4.974L9.589 7.16a5.5 5.5 0 0 1 1.834-1.164 8.2 8.2 0 0 0-1.506-2.834A.44.44 0 0 0 9.574 3h-5.29a.15.15 0 0 0-.14.097.145.145 0 0 0 .046.163m3.068 6.877c.802.338 1.638.621 2.49.848 1.516.403 2.955-.199 3.665-1.533l.859-1.685q.289-.618.728-1.139a4.7 4.7 0 0 0-1.619-.283 4.7 4.7 0 0 0-3.285 1.32L8.782 8.941c-.464.45-.975.852-1.524 1.196M1.253 7.062A.15.15 0 0 0 1 7.167l.003 5.089c0 .147.073.28.194.359A8.5 8.5 0 0 0 5.872 14a8.5 8.5 0 0 0 5.882-2.34 4.1 4.1 0 0 1-2.19.009c-3.195-.847-5.985-2.395-8.311-4.607\"/></svg>"
  },
  {
    "name": "FeishuColor",
    "filename": "feishu-color.svg",
    "category": "logo",
    "tags": [
      "brand",
      "logo",
      "feishu",
      "colourful",
      "color",
      "solid"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#00D6B9\" d=\"m8.236 7.951.03-.029.06-.058.041-.039.122-.12.168-.16.142-.14.133-.13.14-.136.128-.125.18-.174q.05-.05.103-.097.098-.088.2-.17a4.5 4.5 0 0 1 .772-.484q.222-.105.455-.184.042-.014.085-.027a6.9 6.9 0 0 0-1.331-2.642A.64.64 0 0 0 9.163 3H4.017a.1.1 0 0 0-.091.066.095.095 0 0 0 .034.107 14.9 14.9 0 0 1 4.265 4.792z\"/><path fill=\"#3370FF\" d=\"M6.191 12.428a7.08 7.08 0 0 0 6.302-3.82 2.8 2.8 0 0 1-.48.665 2.5 2.5 0 0 1-.447.372 2.686 2.686 0 0 1-1.097.422 3 3 0 0 1-.483.034 3 3 0 0 1-.666-.085q-.048-.011-.096-.025L8.96 9.92l-.13-.038a8 8 0 0 1-.354-.11q-.076-.023-.152-.05l-.103-.034-.124-.044-.088-.031-.175-.064q-.051-.02-.101-.038l-.135-.052-.143-.057-.092-.038-.115-.047-.088-.035-.091-.04-.08-.035-.071-.031-.073-.034-.075-.035-.096-.043-.1-.047-.105-.05-.09-.044a14.8 14.8 0 0 1-4.211-3.104.097.097 0 0 0-.168.065l.003 4.49v.363c0 .212.106.41.283.527a7.06 7.06 0 0 0 3.905 1.165\"/><path fill=\"#133C9A\" d=\"M14 6.101a4.1 4.1 0 0 0-3.839.142 4 4 0 0 0-.285.183q-.208.144-.393.314-.053.047-.105.097L9.2 7.01l-.127.125-.14.136-.133.13-.143.14-.166.163-.121.119-.042.039-.06.058-.03.029-.045.042-.051.047a7 7 0 0 1-1.465 1.025l.095.044.075.035.074.033.071.032.08.035.091.039.088.036.114.047.093.037.142.057q.066.027.136.052l.1.038q.09.032.175.064l.088.032.126.043.102.035.151.05.159.05.195.06q.197.057.395.11l.095.025q.09.02.18.038.105.017.208.028a2.83 2.83 0 0 0 1.768-.38q.047-.029.09-.058.072-.047.14-.098.06-.045.114-.092a3 3 0 0 0 .39-.408q.16-.206.281-.435l.07-.135.613-1.209.007-.014c.201-.43.478-.82.818-1.154\"/></svg>"
  },
  {
    "name": "Dingding",
    "filename": "dingding.svg",
    "category": "logo",
    "tags": [
      "brand",
      "logo",
      "dingding",
      "solid"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M12.978 6.233a2.6 2.6 0 0 1-.168.434h.002l-.01.016c-.488 1.048-1.764 3.104-1.764 3.104l-.007-.012-.373.65h1.798L9.023 15l.78-3.112H8.387l.49-2.058c-.396.096-.866.228-1.423.407 0 0-.752.442-2.169-.85 0 0-.954-.843-.4-1.054.235-.09 1.142-.203 1.856-.3.965-.13 1.56-.2 1.56-.2s-2.976.045-3.682-.066c-.706-.112-1.601-1.292-1.792-2.33 0 0-.295-.57.635-.3s4.776 1.05 4.776 1.05S3.236 4.65 2.903 4.275c-.333-.376-.98-2.048-.896-3.076 0 0 .037-.256.3-.187 0 0 3.698 1.694 6.227 2.621 2.53.928 4.728 1.4 4.444 2.6\"/></svg>"
  },
  {
    "name": "DingdingColor",
    "filename": "dingding-color.svg",
    "category": "logo",
    "tags": [
      "brand",
      "logo",
      "dingding",
      "colourful",
      "color",
      "solid"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"#3296FA\" d=\"M12.4 2H3.6A1.6 1.6 0 0 0 2 3.6v8.8A1.6 1.6 0 0 0 3.6 14h8.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 12.4 2m-1.265 4.992q-.022.089-.094.25l-.007.007c-.283.599-1.011 1.772-1.011 1.772l-.007-.006-.216.37h1.031L8.864 12l.445-1.78H8.5l.283-1.18a9 9 0 0 0-.815.236s-.432.25-1.24-.485c0 0-.546-.485-.23-.6.135-.053.655-.114 1.065-.168.552-.074.896-.115.896-.115s-1.704.027-2.108-.04c-.405-.06-.917-.742-1.025-1.335 0 0-.168-.323.364-.169.526.155 2.737.6 2.737.6s-2.872-.874-3.06-1.09-.56-1.172-.513-1.76c0 0 .02-.148.169-.107 0 0 2.116.97 3.565 1.497 1.456.539 2.716.808 2.547 1.488\"/></svg>"
  },
  {
    "name": "Choiceform",
    "filename": "choiceform.svg",
    "category": "logo",
    "tags": [
      "brand",
      "logo",
      "choiceform",
      "solid"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g fill=\"currentColor\"><path d=\"M6.59 2.24 3.55 5.28a5.24 5.24 0 0 0 0 7.41l.435.436a2.62 2.62 0 0 1 0-3.705l2.027-2.027a1.97 1.97 0 0 0 .577-1.393z\"/><path d=\"M14 2.24 6.761 9.477a1.31 1.31 0 0 1-1.853 0l-.126-.126-.435.436a2.104 2.104 0 0 0 0 2.976l.365.364a2.105 2.105 0 0 0 2.975 0l5.734-5.734c.37-.37.577-.87.577-1.394z\"/></g></svg>"
  },
  {
    "name": "ChoiceformColor",
    "filename": "choiceform-color.svg",
    "category": "logo",
    "tags": [
      "brand",
      "logo",
      "choiceform",
      "colourful",
      "color",
      "solid"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"url(#a)\" d=\"M6.59 2.24 3.55 5.28a5.24 5.24 0 0 0 0 7.41l.435.436a2.62 2.62 0 0 1 0-3.705l2.027-2.027a1.97 1.97 0 0 0 .577-1.393z\"/><path fill=\"#05F\" d=\"M14 2.24 6.761 9.477a1.31 1.31 0 0 1-1.853 0l-.126-.126-.435.436a2.104 2.104 0 0 0 0 2.976l.365.364a2.105 2.105 0 0 0 2.975 0l5.734-5.734c.37-.37.577-.87.577-1.394z\"/><defs><linearGradient id=\"a\" x1=\"7.633\" x2=\"2.751\" y1=\"5.338\" y2=\"10.219\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#05F\"/><stop offset=\"1\" stop-color=\"#A5D4FF\"/></linearGradient></defs></svg>"
  },
  {
    "name": "WarningPublishFail",
    "filename": "warning-publish-fail.svg",
    "category": "flash-screen",
    "tags": [
      "flash-screen",
      "warning",
      "publish",
      "rocket",
      "space"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7.5 13.5h-3m3 0c.49-.735.848-1.59 1-2.5 0 0 2.08.5 2.58 1.5s-1.5 3-1.5 3zm-3 0c-2-3-1.031-8 1.5-10.5M4.5 13.5l-1.92 2s-2-2-1.5-3S3.5 11 3.5 11M10.5 4v1.5M10.5 7.5h.005\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"m5.913 8.757 4.15-7.47a.5.5 0 0 1 .874 0l4.15 7.47a.5.5 0 0 1-.437.743h-8.3a.5.5 0 0 1-.437-.743\"/></g></svg>"
  },
  {
    "name": "WarningNotFound",
    "filename": "warning-not-found.svg",
    "category": "flash-screen",
    "tags": [
      "flash-screen",
      "warning",
      "404"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M8.5 4.5h-1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1\"/><path d=\"M3.5 6.5v3m0 0v2m0-2h-3l2-5m1 5h1M14.5 6.5v3m0 0v2m0-2h-3l2-5m1 5h1M.5 2.5h15m-15 11h15\"/></g></svg>"
  },
  {
    "name": "WarningLinkExpired",
    "filename": "warning-link-expired.svg",
    "category": "flash-screen",
    "tags": [
      "flash-screen",
      "warning",
      "unlink",
      "broken",
      "link"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m14.5.5-4 4m-10 10 4-4M9.5 7.5l.293.293a1 1 0 0 0 1.414 0l1.879-1.879a2 2 0 0 0 0-2.828l-1.172-1.172a2 2 0 0 0-2.828 0L7.207 3.793a1 1 0 0 0 0 1.414L7.5 5.5M5.5 7.5l-.293-.293a1 1 0 0 0-1.414 0L1.914 9.086a2 2 0 0 0 0 2.828l1.172 1.172a2 2 0 0 0 2.828 0l1.879-1.879a1 1 0 0 0 0-1.414L7.5 9.5M8 7 7 8M3 3 1.5 1.5M12 12l1.5 1.5m-1-4h2m-5 3v2m-7-9h-2m5-3v-2\"/></g></svg>"
  },
  {
    "name": "WarningFileBroken",
    "filename": "warning-file-broken.svg",
    "category": "flash-screen",
    "tags": [
      "flash-screen",
      "warning",
      "broken",
      "file",
      "page",
      "draft",
      "item",
      "document",
      "content",
      "data"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5.5.5h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9l-4-4h-1\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"m13.5 4.5-4-4v3a1 1 0 0 0 1 1z\"/><path d=\"m5.5.5-1 2 2 2v5l2-5-1-2 1-2\"/></g></svg>"
  },
  {
    "name": "EmptyWorkspace",
    "filename": "empty-workspace.svg",
    "category": "flash-screen",
    "tags": [
      "flash-screen",
      "empty",
      "desk",
      "workspace",
      "table"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M15 7.5H1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5\"/><path d=\"M1.5 9.5v6m8-6v2m0 0V15a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-3.5m-5 0h5m0-2v2M12.5 7.5l2.646-2.646a.5.5 0 0 0 0-.708L11.854.854a.5.5 0 0 0-.708 0L10 2\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"m6 2 4 4a2.828 2.828 0 1 0-4-4\"/></g></svg>"
  },
  {
    "name": "EmptyWorkflow",
    "filename": "empty-workflow.svg",
    "category": "flash-screen",
    "tags": [
      "flash-screen",
      "empty",
      "workflow",
      "intelligence"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path fill=\"currentColor\" fill-opacity=\".25\" stroke-linejoin=\"round\" d=\"M10.5 4.5h-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1\"/><path stroke-linejoin=\"round\" d=\"M5.5 6.5h4M6 12.5H1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5M14 12.5H9a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5\"/><path d=\"M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5\"/><path stroke-linejoin=\"round\" d=\"M3.5 12.5v-1a1 1 0 0 1 1-1h3m0 0h3a1 1 0 0 1 1 1v1m-4-2v-2\"/></g></svg>"
  },
  {
    "name": "EmptyWorkflowNode",
    "filename": "empty-workflow-node.svg",
    "category": "flash-screen",
    "tags": [
      "flash-screen",
      "empty",
      "workflow",
      "network",
      "intelligence"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8.5.5h-7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M2.5 2.5h5M14.5 6.5h-4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M5.5 11.5h-4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1\"/><path d=\"M12.5 10.5v2a1 1 0 0 1-1 1h-5M3.5 11.5v-7M9.5 2.5h2a1 1 0 0 1 1 1v3M11.5 8.5h2\"/></g></svg>"
  },
  {
    "name": "EmptyUser",
    "filename": "empty-user.svg",
    "category": "flash-screen",
    "tags": [
      "flash-screen",
      "empty",
      "user",
      "account",
      "profile",
      "avatar",
      "person",
      "human",
      "member"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path d=\"M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5\"/><path fill=\"currentColor\" fill-opacity=\".25\" stroke-linejoin=\"round\" d=\"M5.5 6.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/><path stroke-linejoin=\"round\" d=\"M12.5 14.5v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1\"/></g></svg>"
  },
  {
    "name": "EmptyTrash",
    "filename": "empty-trash.svg",
    "category": "flash-screen",
    "tags": [
      "flash-screen",
      "empty",
      "trash",
      "remove",
      "delete"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path d=\"M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5\"/><path fill=\"currentColor\" fill-opacity=\".25\" stroke-linejoin=\"round\" d=\"M13 4.5H2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5\"/><path stroke-linejoin=\"round\" d=\"m2.5 6.5.901 8.11a1 1 0 0 0 .994.89h6.21a1 1 0 0 0 .994-.89L12.5 6.5M7.5 8.5v5m2-5v5m-4-5v5\"/></g></svg>"
  },
  {
    "name": "EmptySurvey",
    "filename": "empty-survey.svg",
    "category": "flash-screen",
    "tags": [
      "flash-screen",
      "empty",
      "file",
      "document",
      "page",
      "draft",
      "item",
      "sheet",
      "content",
      "data",
      "survey",
      "form"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M4.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M4.5 11.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8.5 7.5h2m-2 4h2m-5-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8.5 1.5h-5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8m-4-4 4 4m-4-4v3a1 1 0 0 0 1 1h3\"/></svg>"
  },
  {
    "name": "EmptySort",
    "filename": "empty-sort.svg",
    "category": "flash-screen",
    "tags": [
      "flash-screen",
      "empty",
      "sort",
      "order",
      "filter"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path d=\"M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5\"/><path stroke-linejoin=\"round\" d=\"M4.5 5.5v9m0 0L2 12m2.5 2.5L7 12m3.5 2.5v-9m0 0L13 8m-2.5-2.5L8 8\"/></g></svg>"
  },
  {
    "name": "EmptySearch",
    "filename": "empty-search.svg",
    "category": "flash-screen",
    "tags": [
      "flash-screen",
      "empty",
      "search",
      "find",
      "lookup",
      "explore",
      "magnifier",
      "question"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M.5 6.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0\"/><path d=\"M4.5 4.5c0-2.5 4-2.5 4 0 0 2-2 1-2 3M15.5 15.5l-3-3M6.505 9.5v1\"/></g></svg>"
  },
  {
    "name": "EmptyOrganizations",
    "filename": "empty-organizations.svg",
    "category": "flash-screen",
    "tags": [
      "flash-screen",
      "empty",
      "organization",
      "team",
      "group",
      "building",
      "business",
      "company",
      "warning"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path stroke-linejoin=\"round\" d=\"M10.5 5.5v-4a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h5\"/><path stroke-linejoin=\"round\" d=\"M4 2.5H3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5M8 2.5H7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5M4 6.5H3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5M4 10.5H3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5\"/><path fill=\"currentColor\" fill-opacity=\".25\" stroke-linejoin=\"round\" d=\"M7.5 11.5a4 4 0 1 0 8 0 4 4 0 0 0-8 0\"/><path d=\"M11.5 9.5v2\"/><path stroke-linejoin=\"round\" d=\"M11.5 13.5h.005M8 6.5H7a.5.5 0 0 0-.5.5v1\"/></g></svg>"
  },
  {
    "name": "EmptyNotifications",
    "filename": "empty-notifications.svg",
    "category": "flash-screen",
    "tags": [
      "flash-screen",
      "empty",
      "bell",
      "notification",
      "alarm",
      "buzz",
      "alert",
      "audio",
      "sound"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path d=\"M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5\"/><path stroke-linejoin=\"round\" d=\"M.5 13.5h14s-2.5-1.5-3-4c-.413-2.063-1.506-3.445-3-3.865V5.5a1 1 0 0 0-2 0v.135c-1.494.42-2.587 1.802-3 3.865-.5 2.5-3 4-3 4\"/><path fill=\"currentColor\" fill-opacity=\".25\" stroke-linejoin=\"round\" d=\"M9.5 13.5a2 2 0 1 1-4 0z\"/></g></svg>"
  },
  {
    "name": "EmptyNoAuthority",
    "filename": "empty-no-authority.svg",
    "category": "flash-screen",
    "tags": [
      "flash-screen",
      "empty",
      "lock",
      "locked",
      "secure",
      "password",
      "key",
      "safety",
      "privacy"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.5 6.5h-10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1M4.5 6.5v-2a3 3 0 0 1 6 0v2\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M6.5 9.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 10.5v2m0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"/></svg>"
  },
  {
    "name": "EmptyLogic",
    "filename": "empty-logic.svg",
    "category": "flash-screen",
    "tags": [
      "flash-screen",
      "empty",
      "branch",
      "logic",
      "merge",
      "commit"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path d=\"M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5\"/><path stroke-linejoin=\"round\" d=\"M3.5 5.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M9.5 5.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3.5 13.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/><path stroke-linejoin=\"round\" d=\"M4.5 12.5v-1a2 2 0 0 1 2-2h2a2 2 0 0 0 2-2v-1M4.5 6.5v2\"/></g></svg>"
  },
  {
    "name": "EmptyImage",
    "filename": "empty-image.svg",
    "category": "flash-screen",
    "tags": [
      "flash-screen",
      "empty",
      "image",
      "photo",
      "picture",
      "media",
      "gallery",
      "graphic"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" d=\"M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5\"/><path stroke=\"currentColor\" d=\"M2.5 7.5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2z\"/><path fill=\"currentColor\" d=\"M6 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" d=\"m3 15 6.5-6.5 3 2\"/></svg>"
  },
  {
    "name": "EmptyGroup",
    "filename": "empty-group.svg",
    "category": "flash-screen",
    "tags": [
      "flash-screen",
      "empty",
      "group",
      "check"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path stroke-linejoin=\"round\" d=\"M1.5 6.5v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2\"/><path stroke-linejoin=\"round\" d=\"m3.5 6.5 1 1 2-2m2 1h3M13.5 14.5v-2a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v2\"/><path stroke-linejoin=\"round\" d=\"m3.5 14.5 1 1 2-2m2 1h3\"/><path d=\"M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5\"/></g></svg>"
  },
  {
    "name": "EmptyFolder",
    "filename": "empty-folder.svg",
    "category": "flash-screen",
    "tags": [
      "flash-screen",
      "empty",
      "folder",
      "directory",
      "folder-open",
      "file",
      "catalog"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path stroke-linejoin=\"round\" d=\"m3.5 12.5.772-2.316a1 1 0 0 1 .949-.684H13.5m0 0a.72.72 0 0 1 .684.949l-1.456 4.367a1 1 0 0 1-.949.684H2.5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h1.586a1 1 0 0 1 .707.293l1.414 1.414a1 1 0 0 0 .707.293H12.5a1 1 0 0 1 1 1z\"/><path d=\"M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5\"/></g></svg>"
  },
  {
    "name": "EmptyFilter",
    "filename": "empty-filter.svg",
    "category": "flash-screen",
    "tags": [
      "flash-screen",
      "empty",
      "filter",
      "funnel",
      "search"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path d=\"M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5\"/><path fill=\"currentColor\" fill-opacity=\".25\" stroke-linejoin=\"round\" d=\"M7.5 4.5c-3.5 0-4 1-4 1s.5 1 4 1 4-1 4-1-.5-1-4-1\"/><path stroke-linejoin=\"round\" d=\"M2.5 6.5v.172a2 2 0 0 0 .586 1.414l3.121 3.121a1 1 0 0 1 .293.707V14.5l2 1v-3.586a1 1 0 0 1 .293-.707l3.121-3.121a2 2 0 0 0 .586-1.414V6.5\"/></g></svg>"
  },
  {
    "name": "EmptyFile",
    "filename": "empty-file.svg",
    "category": "flash-screen",
    "tags": [
      "flash-screen",
      "empty",
      "file",
      "document",
      "note",
      "page",
      "draft",
      "item",
      "sheet",
      "content",
      "data"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path d=\"M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5\"/><path stroke-linejoin=\"round\" d=\"M3.5 15.5h8a1 1 0 0 0 1-1v-6l-4-4h-5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1M4.5 8.5h2m-2 3h6m-6 2h6\"/><path fill=\"currentColor\" fill-opacity=\".25\" stroke-linejoin=\"round\" d=\"m12.5 8.5-4-4v3a1 1 0 0 0 1 1z\"/></g></svg>"
  },
  {
    "name": "EmptyDynamic",
    "filename": "empty-dynamic.svg",
    "category": "flash-screen",
    "tags": [
      "flash-screen",
      "empty",
      "sign",
      "inbox",
      "email",
      "dynamic"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path stroke-linejoin=\"round\" d=\"M9.454 7.306v3.474c0 1.071 1.694 1.31 2.58-.14.752-1.226.568-3.096-.37-4.326-1.382-1.812-4.576-2.49-6.896-.992-2.133 1.376-2.892 4.16-1.714 6.411 1.166 2.227 3.902 3.306 6.38 2.501m.012-4.803c0 1.153-.909 2.088-2.03 2.088s-2.03-.935-2.03-2.088.909-2.088 2.03-2.088 2.03.934 2.03 2.088\"/><path d=\"M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5\"/></g></svg>"
  },
  {
    "name": "EmptyDatabase",
    "filename": "empty-database.svg",
    "category": "flash-screen",
    "tags": [
      "flash-screen",
      "empty",
      "database",
      "hosting",
      "server",
      "hardware"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path d=\"M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5\"/><path fill=\"currentColor\" fill-opacity=\".25\" stroke-linejoin=\"round\" d=\"M7.5 4.5c-2.551 0-3.882.61-4.511 1.052-.33.232-.33.664 0 .896C3.619 6.89 4.949 7.5 7.5 7.5s3.882-.61 4.511-1.052c.33-.232.33-.664 0-.896C11.381 5.11 10.051 4.5 7.5 4.5\"/><path stroke-linejoin=\"round\" d=\"M2.5 10s1 1.5 5 1.5 5-1.5 5-1.5\"/><path stroke-linejoin=\"round\" d=\"M7.5 4.5c-3.031 0-4.34.861-4.796 1.279-.145.133-.204.326-.204.524v7.394c0 .198.059.391.204.524C3.161 14.64 4.47 15.5 7.5 15.5s4.34-.861 4.796-1.279c.145-.133.204-.326.204-.524V6.303c0-.198-.059-.391-.204-.524C11.839 5.36 10.53 4.5 7.5 4.5\"/></g></svg>"
  },
  {
    "name": "EmptyData",
    "filename": "empty-data.svg",
    "category": "flash-screen",
    "tags": [
      "flash-screen",
      "empty",
      "data",
      "archive",
      "storage"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path stroke-linejoin=\"round\" d=\"M4 9.5H.5v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5H11a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-.5-.5\"/><path fill=\"currentColor\" fill-opacity=\".25\" stroke-linejoin=\"round\" d=\"M4 9.5H.5l2.709-4.514a1 1 0 0 1 .857-.486h6.868a1 1 0 0 1 .857.486L14.5 9.5H11a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 0-.5-.5\"/><path d=\"M5.5 13.5h4M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5\"/></g></svg>"
  },
  {
    "name": "EmptyConnector",
    "filename": "empty-connector.svg",
    "category": "flash-screen",
    "tags": [
      "flash-screen",
      "empty",
      "connector",
      "connect",
      "link"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.892 5.5A3.54 3.54 0 0 1 12 9l-3 3a3.54 3.54 0 0 1-3.5.892m5-9.784A3.54 3.54 0 0 0 7 4L4 7a3.54 3.54 0 0 0-.892 3.5M14.5 1.5l-5 5m-3 3-5 5\"/><path stroke-opacity=\".25\" d=\"M14.636 4.5A7.503 7.503 0 0 1 4.5 14.636M1.364 11.5a7.503 7.503 0 0 1 10.381-10\"/></g></svg>"
  },
  {
    "name": "EmptyChart",
    "filename": "empty-chart.svg",
    "category": "flash-screen",
    "tags": [
      "flash-screen",
      "empty",
      "bar",
      "chart",
      "diagram"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path stroke-linecap=\"round\" d=\"M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5\"/><path fill=\"currentColor\" fill-opacity=\".25\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8 4.5H7a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5\"/><path stroke-linejoin=\"round\" d=\"M3 7.5H2a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5ZM13 5.5h-1a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M.5 15.5h14\"/></g></svg>"
  },
  {
    "name": "YesNo",
    "filename": "yes-no.svg",
    "category": "forms",
    "tags": [
      "forms",
      "question",
      "type",
      "form"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M7.5 13.5a6 6 0 0 0 0-12z\"/><path d=\"M7.5 13.5a6 6 0 0 1 0-12\"/></g></svg>"
  },
  {
    "name": "Welcome",
    "filename": "welcome.svg",
    "category": "forms",
    "tags": [
      "forms",
      "question",
      "type",
      "form"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 2.5h11a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-11M3.5 4.5v3m0 0v3m0-3h3m0-3v6m3-2v2M9.5 6.5h.005\"/></g></svg>"
  },
  {
    "name": "Website",
    "filename": "website.svg",
    "category": "forms",
    "tags": [
      "forms",
      "question",
      "type",
      "form",
      "world",
      "location",
      "globe",
      "earth"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 7.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0\"/><path d=\"M7.5 1.5c-3 3-3 9 0 12M7.5 1.5c3 3 3 9 0 12M2 5.5h11m-11 4h11\"/></g></svg>"
  },
  {
    "name": "UrlRedirect",
    "filename": "url-redirect.svg",
    "category": "forms",
    "tags": [
      "forms",
      "question",
      "type",
      "form",
      "url",
      "end"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m13.5 2.5-4 4m4-4v3m0-3h-3M7.5 3.5h-5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11m-8-8h-2v6h2m-2-3h2\"/><path d=\"M7.5 11.5v-3l2 3v-3m2 0v3h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1z\"/></g></svg>"
  },
  {
    "name": "ToolbarScreenAspectVerticalSolid",
    "filename": "toolbar-screen-aspect-vertical-solid.svg",
    "category": "forms",
    "tags": [
      "forms",
      "solid",
      "screen",
      "aspect",
      "toolbar"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M0 4.5A2.5 2.5 0 0 1 2.5 2h11A2.5 2.5 0 0 1 16 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 11.5z\" clip-rule=\"evenodd\"/></svg>"
  },
  {
    "name": "ToolbarScreenAspectVerticalRegular",
    "filename": "toolbar-screen-aspect-vertical-regular.svg",
    "category": "forms",
    "tags": [
      "forms",
      "screen",
      "aspect",
      "toolbar"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13.5 2.5h-11a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2\"/></svg>"
  },
  {
    "name": "ToolbarScreenAspectSquareSolid",
    "filename": "toolbar-screen-aspect-square-solid.svg",
    "category": "forms",
    "tags": [
      "forms",
      "solid",
      "screen",
      "aspect",
      "toolbar"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M1 3.5A2.5 2.5 0 0 1 3.5 1h9A2.5 2.5 0 0 1 15 3.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5z\" clip-rule=\"evenodd\"/></svg>"
  },
  {
    "name": "ToolbarScreenAspectSquareRegular",
    "filename": "toolbar-screen-aspect-square-regular.svg",
    "category": "forms",
    "tags": [
      "forms",
      "screen",
      "aspect",
      "toolbar"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.5 1.5h-9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2\"/></svg>"
  },
  {
    "name": "ToolbarScreenAspectHorizontalSolid",
    "filename": "toolbar-screen-aspect-horizontal-solid.svg",
    "category": "forms",
    "tags": [
      "forms",
      "solid",
      "screen",
      "aspect",
      "toolbar"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3 2.5A2.5 2.5 0 0 1 5.5 0h5A2.5 2.5 0 0 1 13 2.5v11a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 13.5z\" clip-rule=\"evenodd\"/></svg>"
  },
  {
    "name": "ToolbarScreenAspectHorizontalRegular",
    "filename": "toolbar-screen-aspect-horizontal-regular.svg",
    "category": "forms",
    "tags": [
      "forms",
      "screen",
      "aspect",
      "toolbar"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.5.5h-5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-11a2 2 0 0 0-2-2\"/></svg>"
  },
  {
    "name": "ToolbarPreviewSolid",
    "filename": "toolbar-preview-solid.svg",
    "category": "forms",
    "tags": [
      "forms",
      "solid",
      "eye",
      "view",
      "visible",
      "watch",
      "toolbar"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"m15.5 8 .439-.24zm.438.24a.5.5 0 0 0 0-.48v-.002l-.002-.004-.008-.014-.029-.05-.109-.185a15.558 15.558 0 0 0-1.991-2.6C12.454 3.495 10.456 2 8 2S3.546 3.495 2.2 4.905A15.6 15.6 0 0 0 .1 7.69l-.028.05-.008.014-.002.004v.002a.5.5 0 0 0 0 .48v.002l.002.004.008.014a5 5 0 0 0 .138.235 15.552 15.552 0 0 0 1.991 2.6C3.546 12.505 5.544 14 8 14s4.454-1.495 5.8-2.905a15.6 15.6 0 0 0 2.1-2.785l.028-.05.008-.014.002-.004zM.5 8l-.438-.24zm15.439.24L15.5 8zM6 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6\" clip-rule=\"evenodd\"/></svg>"
  },
  {
    "name": "ToolbarPreviewRegular",
    "filename": "toolbar-preview-regular.svg",
    "category": "forms",
    "tags": [
      "forms",
      "eye",
      "view",
      "visible",
      "watch",
      "toolbar"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M.5 8s3-5.5 7.5-5.5S15.5 8 15.5 8s-3 5.5-7.5 5.5S.5 8 .5 8\"/><path d=\"M8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5\"/></g></svg>"
  },
  {
    "name": "ToolbarCreateSolid",
    "filename": "toolbar-create-solid.svg",
    "category": "forms",
    "tags": [
      "forms",
      "solid",
      "edit",
      "design",
      "pen",
      "pencil",
      "draw",
      "create"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M1 15.5h14\"/><path fill=\"currentColor\" d=\"M11.56.854a1.5 1.5 0 0 0-2.12 0l-.586.585a.5.5 0 0 0 0 .707l3 3a.5.5 0 0 0 .707 0l.585-.585a1.5 1.5 0 0 0 0-2.122zM11.146 6.56a.5.5 0 0 0 0-.706l-3-3a.5.5 0 0 0-.707 0L1.842 8.45a1.5 1.5 0 0 0-.394.696L.515 12.88a.5.5 0 0 0 .606.606l3.732-.933a1.5 1.5 0 0 0 .696-.394z\"/></svg>"
  },
  {
    "name": "ToolbarCreateRegular",
    "filename": "toolbar-create-regular.svg",
    "category": "forms",
    "tags": [
      "forms",
      "edit",
      "design",
      "pen",
      "pencil",
      "draw",
      "create"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1 15.5h14M9.793 1.207a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414l-7.597 7.597a1 1 0 0 1-.465.263L1 13l.933-3.731a1 1 0 0 1 .263-.465zM8.5 2.5l3 3\"/></g></svg>"
  },
  {
    "name": "Statement",
    "filename": "statement.svg",
    "category": "forms",
    "tags": [
      "forms",
      "question",
      "type",
      "form",
      "quote",
      "marks",
      "blockquote",
      "comment"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.5 1.5h-10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1H7a.5.5 0 0 1 .5.5v1.5l2.874-1.916a.5.5 0 0 1 .277-.084H12.5a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M6.5 4.5h-2v2h2z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6.5 6.5v-2h-2v2zm0 0c0 2-2 2-2 2\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M10.5 4.5h-2v2h2z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.5 6.5v-2h-2v2zm0 0c0 2-2 2-2 2\"/></svg>"
  },
  {
    "name": "ShortText",
    "filename": "short-text.svg",
    "category": "forms",
    "tags": [
      "forms",
      "question",
      "type",
      "form",
      "text"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 13.5h13M11.5 10.5 8 1.5l-3.5 9M5.667 7.5h4.666\"/></g></svg>"
  },
  {
    "name": "SettingsSolid",
    "filename": "settings-solid.svg",
    "category": "forms",
    "tags": [
      "forms",
      "solid",
      "control",
      "preferences",
      "system"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M6.64 1.418A.5.5 0 0 1 7.133 1h1.734a.5.5 0 0 1 .493.418l.263 1.576q.397.129.77.319l1.304-.929a.5.5 0 0 1 .644.054l1.218 1.222a.5.5 0 0 1 .053.644l-.929 1.303q.193.372.322.77l1.577.263a.5.5 0 0 1 .418.493v1.734a.5.5 0 0 1-.418.493l-1.573.263a5 5 0 0 1-.321.77l.928 1.304a.5.5 0 0 1-.054.644l-1.222 1.218a.5.5 0 0 1-.643.053l-1.304-.929a5 5 0 0 1-.77.322l-.263 1.577a.5.5 0 0 1-.493.418H7.133a.5.5 0 0 1-.493-.418l-.263-1.573a5 5 0 0 1-.77-.321l-1.304.928a.5.5 0 0 1-.643-.054L2.438 12.34a.5.5 0 0 1-.054-.643l.929-1.304a5 5 0 0 1-.319-.77L1.418 9.36A.5.5 0 0 1 1 8.867V7.133a.5.5 0 0 1 .418-.493l1.576-.263q.129-.397.319-.77l-.929-1.304a.5.5 0 0 1 .054-.643L3.66 2.438a.5.5 0 0 1 .643-.054l1.305.929q.371-.19.77-.319zM8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4M5 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0\" clip-rule=\"evenodd\"/></svg>"
  },
  {
    "name": "SettingsRegular",
    "filename": "settings-regular.svg",
    "category": "forms",
    "tags": [
      "forms",
      "control",
      "preferences",
      "system"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3\"/><path d=\"M14.5 8.867V7.133l-1.887-.314a4.7 4.7 0 0 0-.52-1.246l1.112-1.56-1.218-1.222-1.56 1.111a4.7 4.7 0 0 0-1.246-.515L8.867 1.5H7.133L6.82 3.387a4.7 4.7 0 0 0-1.246.515l-1.56-1.11-1.222 1.221 1.111 1.56c-.23.389-.404.808-.515 1.246L1.5 7.133v1.734l1.887.314c.111.438.285.857.515 1.246l-1.11 1.56 1.221 1.222 1.56-1.111c.389.231.808.407 1.246.52l.314 1.882h1.734l.314-1.887a4.7 4.7 0 0 0 1.246-.52l1.56 1.112 1.222-1.218-1.111-1.56c.231-.388.407-.808.52-1.246z\"/></g></svg>"
  },
  {
    "name": "RoundedSmall",
    "filename": "rounded-small.svg",
    "category": "forms",
    "tags": [
      "forms",
      "rounded",
      "radius"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13.5 3.5h-11a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h11\"/></svg>"
  },
  {
    "name": "RoundedNone",
    "filename": "rounded-none.svg",
    "category": "forms",
    "tags": [
      "forms",
      "rounded",
      "radius"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13.5 3.5h-12v9h12\"/></svg>"
  },
  {
    "name": "RoundedMedium",
    "filename": "rounded-medium.svg",
    "category": "forms",
    "tags": [
      "forms",
      "rounded",
      "radius"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13.5 3.5h-9a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h9\"/></svg>"
  },
  {
    "name": "RoundedFull",
    "filename": "rounded-full.svg",
    "category": "forms",
    "tags": [
      "forms",
      "rounded",
      "radius"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13.5 3.5H6a4.5 4.5 0 0 0 0 9h7.5\"/></svg>"
  },
  {
    "name": "Rating",
    "filename": "rating.svg",
    "category": "forms",
    "tags": [
      "forms",
      "question",
      "type",
      "form",
      "star",
      "favorite"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m7.5 1.5 1.854 3.786 4.146.607-3 2.946.708 4.161L7.5 11.036 3.792 13 4.5 8.839l-3-2.946 4.146-.607z\"/></svg>"
  },
  {
    "name": "RatingThumbUpSolid",
    "filename": "rating-thumb-up-solid.svg",
    "category": "forms",
    "tags": [
      "forms",
      "solid",
      "rating"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g fill=\"currentColor\"><path d=\"M2 7H1a.945.945 0 0 0-1 1v7a.945.945 0 0 0 1 1h1zM14 6H9V2a1.89 1.89 0 0 0-2-2L4 7v9h8a2.91 2.91 0 0 0 2.9-2.4l1-5.2A1.937 1.937 0 0 0 14 6\"/></g></svg>"
  },
  {
    "name": "RatingThumbUpRegular",
    "filename": "rating-thumb-up-regular.svg",
    "category": "forms",
    "tags": [
      "forms",
      "rating"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 7.5H0v8h3zM5 15.5h6.9a2 2 0 0 0 1.952-1.566l1.111-5A2 2 0 0 0 13.007 6.5H9v-4a2 2 0 0 0-2-2l-2 6\"/></g></svg>"
  },
  {
    "name": "RatingStarSolid",
    "filename": "rating-star-solid.svg",
    "category": "forms",
    "tags": [
      "forms",
      "solid",
      "rating",
      "shapes",
      "star",
      "favorite"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"m15.144 5.438-4.316-.627L8.897.9C8.559.217 7.441.217 7.103.9l-1.93 3.911-4.317.627a1.002 1.002 0 0 0-.554 1.707l3.124 3.044-.737 4.299a1 1 0 0 0 1.451 1.054L8 13.513l3.861 2.03c.728.381 1.591-.234 1.451-1.054l-.737-4.299 3.124-3.044a1.003 1.003 0 0 0-.555-1.708\"/></svg>"
  },
  {
    "name": "RatingSmileSolid",
    "filename": "rating-smile-solid.svg",
    "category": "forms",
    "tags": [
      "forms",
      "solid",
      "rating"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M6 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5.429 9.542a.5.5 0 0 0-.858.515 4 4 0 0 0 6.858 0 .5.5 0 1 0-.858-.515 3 3 0 0 1-5.142 0\" clip-rule=\"evenodd\"/></svg>"
  },
  {
    "name": "RatingSmileRegular",
    "filename": "rating-smile-regular.svg",
    "category": "forms",
    "tags": [
      "forms",
      "rating"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8 15.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15\"/><path fill=\"currentColor\" d=\"M5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2M11 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11 9.8a3.5 3.5 0 0 1-6 0\"/></svg>"
  },
  {
    "name": "RatingShapeRegular",
    "filename": "rating-shape-regular.svg",
    "category": "forms",
    "tags": [
      "forms",
      "rating",
      "shapes",
      "star",
      "favorite"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m8 .867 2.318 4.696 5.182.753-3.75 3.655.885 5.162L8 12.696l-4.635 2.437.885-5.162L.5 6.316l5.182-.753z\"/></svg>"
  },
  {
    "name": "RatingHeartSolid",
    "filename": "rating-heart-solid.svg",
    "category": "forms",
    "tags": [
      "forms",
      "solid",
      "rating",
      "shapes",
      "heart"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M11 2a3.94 3.94 0 0 0-3 1.371A3.94 3.94 0 0 0 5 2a4 4 0 0 0-2.865 6.785l5.508 5.629a.5.5 0 0 0 .715-.001l5.315-5.454A3.988 3.988 0 0 0 11 2\"/></svg>"
  },
  {
    "name": "RatingHeartRegular",
    "filename": "rating-heart-regular.svg",
    "category": "forms",
    "tags": [
      "forms",
      "rating",
      "shapes",
      "heart"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M14.5 6A3.49 3.49 0 0 0 8 4.223a3.492 3.492 0 1 0-5.507 4.213L8 14.065l5.338-5.477A3.48 3.48 0 0 0 14.5 6\"/></svg>"
  },
  {
    "name": "Ranking",
    "filename": "ranking.svg",
    "category": "forms",
    "tags": [
      "forms",
      "question",
      "type",
      "form",
      "sort"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7.5 3.5h6m-6 4h4m-4 4h2M3.5 1.5v12m0-12-2 2m2-2 2 2m-2 10 2-2m-2 2-2-2\"/></g></svg>"
  },
  {
    "name": "PictureChoice",
    "filename": "picture-choice.svg",
    "category": "forms",
    "tags": [
      "forms",
      "question",
      "type",
      "form",
      "image"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"/><path d=\"M11.5 1.5h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2\"/><path d=\"M13.5 9.5 10 6l-4 4-1.5-1.5-3 3\"/></g></svg>"
  },
  {
    "name": "Phone",
    "filename": "phone.svg",
    "category": "forms",
    "tags": [
      "forms",
      "question",
      "type",
      "form",
      "phone",
      "message",
      "sms"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 1.5h-2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-5\"/><path d=\"M5.5 12a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M13.5 1.5h-6a1 1 0 0 0-1 1v6l3-2h4a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1\"/></g></svg>"
  },
  {
    "name": "OpinionScale",
    "filename": "opinion-scale.svg",
    "category": "forms",
    "tags": [
      "forms",
      "question",
      "type",
      "form"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 13.5h12M12.5 3v8a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5M8.5 6v5a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5M2.5 8v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5\"/></g></svg>"
  },
  {
    "name": "MultipleChoice",
    "filename": "multiple-choice.svg",
    "category": "forms",
    "tags": [
      "forms",
      "question",
      "type",
      "form",
      "success",
      "select",
      "done",
      "checked",
      "tick",
      "completed",
      "choice"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path d=\"M11.5 1.5h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m4.5 7.5 2 2 4-4\"/></g></svg>"
  },
  {
    "name": "Matrix",
    "filename": "matrix.svg",
    "category": "forms",
    "tags": [
      "forms",
      "question",
      "type",
      "form",
      "grid"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.5 5.5h8m-8 4h8m-6-6v8m4-8v8\"/><path d=\"M11.5 1.5h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Z\"/></g></svg>"
  },
  {
    "name": "LongText",
    "filename": "long-text.svg",
    "category": "forms",
    "tags": [
      "forms",
      "question",
      "type",
      "form",
      "text"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 1.5h3m-3 4h3m-3 4h3m-13 4h13M8.5 10.5 5 1.5l-3.5 9M2.667 7.5h4.666\"/></g></svg>"
  },
  {
    "name": "LogicSolid",
    "filename": "logic-solid.svg",
    "category": "forms",
    "tags": [
      "forms",
      "logic",
      "branch"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path fill=\"currentColor\" d=\"M2.5 2.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M10.5 2.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M2.5 12.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/><path d=\"M3.5 11.5v-2a2 2 0 0 1 2-2h4a2 2 0 0 0 2-2v-2M3.5 3.5v3\"/></g></svg>"
  },
  {
    "name": "LogicRegular",
    "filename": "logic-regular.svg",
    "category": "forms",
    "tags": [
      "forms",
      "logic",
      "branch"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 2.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M10.5 2.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M2.5 12.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/><path d=\"M3.5 11.5v-2a2 2 0 0 1 2-2h4a2 2 0 0 0 2-2v-2M3.5 3.5v3\"/></g></svg>"
  },
  {
    "name": "LayoutWallpaper",
    "filename": "layout-wallpaper.svg",
    "category": "forms",
    "tags": [
      "forms",
      "layout",
      "place",
      "interface",
      "widget",
      "template"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M13.5 2.5h-12a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1\"/><path d=\"M3.5 5.5h8m-8 2h8m-8 2h3\"/></g></svg>"
  },
  {
    "name": "LayoutTopRight",
    "filename": "layout-top-right.svg",
    "category": "forms",
    "tags": [
      "forms",
      "transform",
      "resize",
      "measure"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 2.5h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1\"/><path fill=\"currentColor\" d=\"M8.5 7.5v-5h4a1 1 0 0 1 1 1v4z\"/></g></svg>"
  },
  {
    "name": "LayoutTopLeft",
    "filename": "layout-top-left.svg",
    "category": "forms",
    "tags": [
      "forms",
      "transform",
      "resize",
      "measure"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 2.5h-10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1\"/><path fill=\"currentColor\" d=\"M6.5 7.5v-5h-4a1 1 0 0 0-1 1v4z\"/></g></svg>"
  },
  {
    "name": "LayoutStack",
    "filename": "layout-stack.svg",
    "category": "forms",
    "tags": [
      "forms",
      "layout",
      "place",
      "interface",
      "widget",
      "template"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.5 2.5h-12a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M9 6.5H3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5\"/><path d=\"M2.5 4.5h7m-7 6h3\"/></g></svg>"
  },
  {
    "name": "LayoutSplitRight",
    "filename": "layout-split-right.svg",
    "category": "forms",
    "tags": [
      "forms",
      "layout",
      "place",
      "interface",
      "widget",
      "template"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 2.5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M9 4.5h3a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5\"/><path d=\"M6.5 6.5h-4m4 2h-2\"/></g></svg>"
  },
  {
    "name": "LayoutSplitLeft",
    "filename": "layout-split-left.svg",
    "category": "forms",
    "tags": [
      "forms",
      "layout",
      "place",
      "interface",
      "widget",
      "template"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.5 2.5h-12a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M6 4.5H3a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5\"/><path d=\"M8.5 6.5h4m-4 2h2\"/></g></svg>"
  },
  {
    "name": "LayoutFloatRight",
    "filename": "layout-float-right.svg",
    "category": "forms",
    "tags": [
      "forms",
      "layout",
      "place",
      "interface",
      "widget",
      "template"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 2.5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M9 6.5h3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5\"/><path d=\"M6.5 6.5h-4m4 2h-2\"/></g></svg>"
  },
  {
    "name": "LayoutFloatLeft",
    "filename": "layout-float-left.svg",
    "category": "forms",
    "tags": [
      "forms",
      "layout",
      "place",
      "interface",
      "widget",
      "template"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.5 2.5h-12a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M6 6.5H3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5\"/><path d=\"M8.5 6.5h4m-4 2h2\"/></g></svg>"
  },
  {
    "name": "LayoutBottomRight",
    "filename": "layout-bottom-right.svg",
    "category": "forms",
    "tags": [
      "forms",
      "transform",
      "resize",
      "measure"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 12.5h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1\"/><path fill=\"currentColor\" d=\"M8.5 7.5v5h4a1 1 0 0 0 1-1v-4z\"/></g></svg>"
  },
  {
    "name": "LayoutBottomLeft",
    "filename": "layout-bottom-left.svg",
    "category": "forms",
    "tags": [
      "forms",
      "transform",
      "resize",
      "measure"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 12.5h-10a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1\"/><path fill=\"currentColor\" d=\"M6.5 7.5v5h-4a1 1 0 0 1-1-1v-4z\"/></g></svg>"
  },
  {
    "name": "Group",
    "filename": "group.svg",
    "category": "forms",
    "tags": [
      "forms",
      "question",
      "type",
      "form"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 1.5h-9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2\"/><path d=\"M9.5 3.5h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1\"/><path d=\"M12.5 7.5v4a1 1 0 0 1-1 1h-4\"/></g></svg>"
  },
  {
    "name": "Form",
    "filename": "form.svg",
    "category": "forms",
    "tags": [
      "forms",
      "file",
      "survey"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M4.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M4.5 11.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8.5 7.5h2m-2 4h2m-5-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8.5 1.5h-5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8m-4-4 4 4m-4-4v3a1 1 0 0 0 1 1h3\"/></svg>"
  },
  {
    "name": "FormFile",
    "filename": "form-file.svg",
    "category": "forms",
    "tags": [
      "forms",
      "file"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"m12.5 5.5-4-4v3a1 1 0 0 0 1 1z\"/><path d=\"M8.5 1.5h-5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8\"/></g></svg>"
  },
  {
    "name": "FormDelete",
    "filename": "form-delete.svg",
    "category": "forms",
    "tags": [
      "forms",
      "clear",
      "remove",
      "delete",
      "survey"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11.5 7.5h1m-1 4h1M7.5 10.5h-4M9.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"m14.5 5.5-4-4v3a1 1 0 0 0 1 1z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.5 1.5h-4a1 1 0 0 0-1 1v2m5-3 4 4m-4-4v3a1 1 0 0 0 1 1h3m0 0v8a1 1 0 0 1-1 1h-3\"/></svg>"
  },
  {
    "name": "FormAdd",
    "filename": "form-add.svg",
    "category": "forms",
    "tags": [
      "forms",
      "plus",
      "create",
      "add",
      "survey"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11.5 7.5h1m-1 4h1M7.5 10.5h-4m2 2v-4M9.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"m14.5 5.5-4-4v3a1 1 0 0 0 1 1z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.5 1.5h-4a1 1 0 0 0-1 1v2m5-3 4 4m-4-4v3a1 1 0 0 0 1 1h3m0 0v8a1 1 0 0 1-1 1h-3\"/></svg>"
  },
  {
    "name": "Ended",
    "filename": "ended.svg",
    "category": "forms",
    "tags": [
      "forms",
      "question",
      "type",
      "form",
      "end"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13.5 2.5h-11a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11m-8-8h-2v6h2m-2-3h2m2 3v-6l2 6v-6m2 0v6h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z\"/></svg>"
  },
  {
    "name": "EmbedTypeStandard",
    "filename": "embed-type-standard.svg",
    "category": "forms",
    "tags": [
      "forms",
      "embed"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.5 2.5h-12a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M9 6.5H3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5\"/><path d=\"M2.5 4.5h7m-7 6h3\"/></g></svg>"
  },
  {
    "name": "EmbedTypeSlider",
    "filename": "embed-type-slider.svg",
    "category": "forms",
    "tags": [
      "forms",
      "embed"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.5 2.5h-12a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M10.5 12.5v-10h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1z\"/></g></svg>"
  },
  {
    "name": "EmbedTypeSideTab",
    "filename": "embed-type-side-tab.svg",
    "category": "forms",
    "tags": [
      "forms",
      "embed"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.5 2.5h-12a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M12 4.5h-2a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5\"/><path d=\"M7.5 7v1\"/></g></svg>"
  },
  {
    "name": "EmbedTypePopup",
    "filename": "embed-type-popup.svg",
    "category": "forms",
    "tags": [
      "forms",
      "embed"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.5 2.5h-12a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M12 4.5H3a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5\"/></g></svg>"
  },
  {
    "name": "EmbedTypePopover",
    "filename": "embed-type-popover.svg",
    "category": "forms",
    "tags": [
      "forms",
      "embed"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.5 2.5h-12a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M10 4.5H8a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5\"/><path d=\"M11.5 10a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0\"/></g></svg>"
  },
  {
    "name": "EmbedTypeFullPage",
    "filename": "embed-type-full-page.svg",
    "category": "forms",
    "tags": [
      "forms",
      "embed"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-opacity=\".25\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13.5 2.5h-12a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1\"/></svg>"
  },
  {
    "name": "Dropdown",
    "filename": "dropdown.svg",
    "category": "forms",
    "tags": [
      "forms",
      "question",
      "type",
      "form"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 6.5 7 9l2.5-2.5\"/><path d=\"M1.5 2.5h11a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-11\"/></g></svg>"
  },
  {
    "name": "DesignSolid",
    "filename": "design-solid.svg",
    "category": "forms",
    "tags": [
      "forms",
      "solid",
      "palette",
      "design",
      "color",
      "paint"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M1 7.5C1 3.924 3.925 1 7.502 1 11 1 13.982 3.577 14 6.801v.003a3.846 3.846 0 0 1-4.032 3.83c-.698-.013-1.933-.036-1.303.931.639.983.167 2.435-1.163 2.435C3.925 14 1 11.076 1 7.5M4 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m4-2a1 1 0 1 0 0 2 1 1 0 0 0 0-2m2 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0M4 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2\" clip-rule=\"evenodd\"/></svg>"
  },
  {
    "name": "DesignRegular",
    "filename": "design-regular.svg",
    "category": "forms",
    "tags": [
      "forms",
      "palette",
      "design",
      "color",
      "paint"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path fill=\"currentColor\" d=\"M5 5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8 4.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M11 7.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M4 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"/><path d=\"M7.502 1.5c-3.3 0-6.002 2.7-6.002 6s2.701 6 6.002 6c.556 0 .99-.448.99-1.013 0-.539-.526-.81-.526-1.35-.02-1.192 1.41-1 2.2-1A3.346 3.346 0 0 0 13.5 6.803C13.484 3.907 10.78 1.5 7.502 1.5\"/></g></svg>"
  },
  {
    "name": "Date",
    "filename": "date.svg",
    "category": "forms",
    "tags": [
      "forms",
      "question",
      "type",
      "form",
      "calendar",
      "date",
      "time"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 2.5h-2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-4 0h2M1.5 5.5h12M4.5 1.5v2m6-2v2M3.5 7.5h.005m1.995 0h.005m1.995 0h.005M3.5 9.5h.005m1.995 0h.005m1.995 0h.005m1.995-2h.005m-.005 2h.005m1.995-2h.005m-.005 2h.005m-8.005 2h.005m1.995 0h.005m1.995 0h.005m1.995 0h.005m1.995 0h.005\"/></g></svg>"
  },
  {
    "name": "CreateSolid",
    "filename": "create-solid.svg",
    "category": "forms",
    "tags": [
      "forms",
      "solid",
      "edit",
      "design",
      "pen",
      "pencil",
      "draw",
      "create"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M10.44 1.854a1.5 1.5 0 0 1 2.12 0l.586.585a1.5 1.5 0 0 1 0 2.122l-.792.793a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 0-.708zM8.145 4.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.196.12l-3 1a.5.5 0 0 1-.632-.632l1-3a.5.5 0 0 1 .12-.196z\" clip-rule=\"evenodd\"/></svg>"
  },
  {
    "name": "CreateRegular",
    "filename": "create-regular.svg",
    "category": "forms",
    "tags": [
      "forms",
      "edit",
      "design",
      "pen",
      "pencil",
      "draw",
      "create"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m12.793 2.793-.586-.586a1 1 0 0 0-1.414 0L2.5 10.5l-1 3 3-1 8.293-8.293a1 1 0 0 0 0-1.414M9.5 3.5l2 2\"/></g></svg>"
  },
  {
    "name": "Contactinfo",
    "filename": "contactinfo.svg",
    "category": "forms",
    "tags": [
      "forms",
      "question",
      "type",
      "form",
      "profile",
      "account",
      "avatar",
      "person",
      "member"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path d=\"M12.5 1.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11.5 12.5v-1a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v1\"/><path fill=\"currentColor\" fill-opacity=\".25\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4\"/></g></svg>"
  },
  {
    "name": "Collector",
    "filename": "collector.svg",
    "category": "forms",
    "tags": [
      "forms",
      "collector",
      "cube"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9.5 3.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M7.5 3.5h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4\"/></g></svg>"
  },
  {
    "name": "CollectorRemove",
    "filename": "collector-remove.svg",
    "category": "forms",
    "tags": [
      "forms",
      "collector",
      "clear",
      "remove",
      "delete",
      "cube"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6.5 4.5h-3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3M13 4.5h-3M14.5 4.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0\"/></g></svg>"
  },
  {
    "name": "CollectorAdd",
    "filename": "collector-add.svg",
    "category": "forms",
    "tags": [
      "forms",
      "collector",
      "plus",
      "create",
      "add",
      "cube"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6.5 4.5h-3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3M13 4.5h-3M11.5 6V3M14.5 4.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0\"/></g></svg>"
  },
  {
    "name": "CollectorActive",
    "filename": "collector-active.svg",
    "category": "forms",
    "tags": [
      "forms",
      "collector",
      "cube"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path fill=\"currentColor\" d=\"M9.5 3.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/><path d=\"M7.5 3.5h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4\"/></g></svg>"
  },
  {
    "name": "AlignmentRight",
    "filename": "alignment-right.svg",
    "category": "forms",
    "tags": [
      "forms",
      "alignment",
      "right"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13.5 3.5h-12m12 4h-9m9 4h-6\"/></svg>"
  },
  {
    "name": "AlignmentLeft",
    "filename": "alignment-left.svg",
    "category": "forms",
    "tags": [
      "forms",
      "alignment",
      "left"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M1.5 3.5h12m-12 4h9m-9 4h6\"/></svg>"
  },
  {
    "name": "AlignmentCenter",
    "filename": "alignment-center.svg",
    "category": "forms",
    "tags": [
      "forms",
      "alignment",
      "center"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13.5 3.5h-12m9 4h-6m9 4h-12\"/></svg>"
  },
  {
    "name": "Address",
    "filename": "address.svg",
    "category": "forms",
    "tags": [
      "forms",
      "question",
      "type",
      "form",
      "location",
      "gps",
      "map"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.603 7.192C12.536 4.392 10.452 1.5 7.5 1.5S2.464 4.392 3.397 7.192C4.191 9.572 7.5 13.5 7.5 13.5s3.31-3.928 4.103-6.308\"/><path d=\"M5.5 5.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/></g></svg>"
  },
  {
    "name": "Speechless",
    "filename": "speechless.svg",
    "category": "emoticons",
    "tags": [
      "nps",
      "emoticon"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8 15.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15\"/><path fill=\"currentColor\" d=\"M5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2M11 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M5.5 10.5h5\"/></svg>"
  },
  {
    "name": "Smile",
    "filename": "smile.svg",
    "category": "emoticons",
    "tags": [
      "nps",
      "emoticon"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8 15.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15\"/><path fill=\"currentColor\" d=\"M5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2M11 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11 9.8a3.5 3.5 0 0 1-6 0\"/></svg>"
  },
  {
    "name": "Satisfied",
    "filename": "satisfied.svg",
    "category": "emoticons",
    "tags": [
      "nps",
      "emoticon"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 15.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15\"/><path d=\"M12.388 9a4.5 4.5 0 0 1-8.776 0M3.5 6a1.5 1.5 0 0 1 3 0M9.5 6a1.5 1.5 0 0 1 3 0\"/></g></svg>"
  },
  {
    "name": "Sad",
    "filename": "sad.svg",
    "category": "emoticons",
    "tags": [
      "nps",
      "emoticon"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8 15.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15\"/><path fill=\"currentColor\" d=\"M5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2M11 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M5 11.2a3.5 3.5 0 0 1 6 0\"/></svg>"
  },
  {
    "name": "DeleteReaction",
    "filename": "delete-reaction.svg",
    "category": "emoticons",
    "tags": [
      "emoticon",
      "remove",
      "delete",
      "close"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 13.5a6 6 0 1 1 6-6m-4 2.236a3 3 0 0 1-2 .764 3 3 0 0 1-2-.764M15 12.5h-5m2.5 2.5v-5m-7-3.5h.005m3.995 0h.005\"/></svg>"
  },
  {
    "name": "Angry",
    "filename": "angry.svg",
    "category": "emoticons",
    "tags": [
      "nps",
      "emoticon"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 15.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15\"/><path d=\"M10 9.5H6a1.5 1.5 0 0 0 0 3h4a1.5 1.5 0 0 0 0-3M4.5 5.5l2 1M11.5 5.5l-2 1\"/></g></svg>"
  },
  {
    "name": "AddReaction",
    "filename": "add-reaction.svg",
    "category": "emoticons",
    "tags": [
      "emoticon",
      "add",
      "plus",
      "create",
      "new"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7.5 13.5a6 6 0 1 1 6-6m-4 2.236a3 3 0 0 1-2 .764 3 3 0 0 1-2-.764m0-3.236h.005m3.995 0h.005M14.268 14.268l-3.536-3.536m0 3.536 3.536-3.536\"/></g></svg>"
  },
  {
    "name": "Folder",
    "filename": "folder.svg",
    "category": "files",
    "tags": [
      "folder",
      "document",
      "catalog",
      "file"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M1.5 11.5v-8a1 1 0 0 1 1-1h1.586a1 1 0 0 1 .707.293l1.414 1.414a1 1 0 0 0 .707.293H12.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1\"/></svg>"
  },
  {
    "name": "FolderSettings",
    "filename": "folder-settings.svg",
    "category": "files",
    "tags": [
      "folder",
      "document",
      "catalog",
      "file",
      "control",
      "preferences",
      "system"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.5 7.5v-2a1 1 0 0 0-1-1H6.914a1 1 0 0 1-.707-.293L4.793 2.793a1 1 0 0 0-.707-.293H2.5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4\"/><path d=\"M11.5 13.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M11.5 9.5v-1m0 5v1m2-3h1m-5 0h-1m4.414-1.414.707-.707m-3.535 3.535-.707.707m3.535-.707.707.707m-3.535-3.535-.707-.707\"/></g></svg>"
  },
  {
    "name": "FolderRemove",
    "filename": "folder-remove.svg",
    "category": "files",
    "tags": [
      "folder",
      "document",
      "catalog",
      "file",
      "delete",
      "remove",
      "close",
      "exit",
      "cancel",
      "discard"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 12.5h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7.914a1 1 0 0 1-.707-.293L5.793 2.793a1 1 0 0 0-.707-.293H3.5a1 1 0 0 0-1 1v2M7.5 10.5h-4\"/><path d=\"M9.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0\"/></g></svg>"
  },
  {
    "name": "FolderPlus",
    "filename": "folder-plus.svg",
    "category": "files",
    "tags": [
      "folder",
      "document",
      "catalog",
      "file",
      "create",
      "add"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 12.5h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7.914a1 1 0 0 1-.707-.293L5.793 2.793a1 1 0 0 0-.707-.293H3.5a1 1 0 0 0-1 1v2\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M9.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0\"/><path d=\"M7.5 10.5h-4m2 2v-4\"/></g></svg>"
  },
  {
    "name": "FolderPen",
    "filename": "folder-pen.svg",
    "category": "files",
    "tags": [
      "folder",
      "document",
      "catalog",
      "file",
      "edit",
      "design",
      "pen",
      "pencil",
      "draw",
      "create"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 8.5v-5a1 1 0 0 1 1-1h1.586a1 1 0 0 1 .707.293l1.414 1.414a1 1 0 0 0 .707.293H12.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-5\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"m1.5 13.5 1-3 3.646-3.646a.5.5 0 0 1 .708 0l1.292 1.292a.5.5 0 0 1 0 .708L4.5 12.5z\"/></g></svg>"
  },
  {
    "name": "FolderOpen",
    "filename": "folder-open.svg",
    "category": "files",
    "tags": [
      "folder",
      "document",
      "catalog",
      "file",
      "open",
      "archive"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m3.5 9.5.772-2.316a1 1 0 0 1 .949-.684H13.5m0 0a.72.72 0 0 1 .684.949l-1.456 4.367a1 1 0 0 1-.949.684H2.5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h1.586a1 1 0 0 1 .707.293l1.414 1.414a1 1 0 0 0 .707.293H12.5a1 1 0 0 1 1 1z\"/></svg>"
  },
  {
    "name": "FolderLock",
    "filename": "folder-lock.svg",
    "category": "files",
    "tags": [
      "folder",
      "document",
      "catalog",
      "file",
      "lock",
      "security",
      "safe",
      "privacy"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.5 6.5v-1a1 1 0 0 0-1-1H6.914a1 1 0 0 1-.707-.293L4.793 2.793a1 1 0 0 0-.707-.293H2.5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3\"/><path d=\"M13.5 10.5h-5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M9.5 10V9a1.5 1.5 0 0 1 3 0v1\"/></g></svg>"
  },
  {
    "name": "FolderInput",
    "filename": "folder-input.svg",
    "category": "files",
    "tags": [
      "folder",
      "document",
      "catalog",
      "file",
      "arrow",
      "right",
      "data",
      "import",
      "input"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 6.5v-3a1 1 0 0 1 1-1h1.586a1 1 0 0 1 .707.293l1.414 1.414a1 1 0 0 0 .707.293H13.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-1M7.5 6.5l2 2m0 0-2 2m2-2h-8\"/></g></svg>"
  },
  {
    "name": "FolderDelete",
    "filename": "folder-delete.svg",
    "category": "files",
    "tags": [
      "folder",
      "document",
      "catalog",
      "file",
      "clear",
      "delete",
      "remove",
      "close",
      "exit",
      "cancel",
      "discard"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 12.5h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7.914a1 1 0 0 1-.707-.293L5.793 2.793a1 1 0 0 0-.707-.293H3.5a1 1 0 0 0-1 1v2\"/><path d=\"M9.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0M4 9l3 3m0-3-3 3\"/></g></svg>"
  },
  {
    "name": "FolderClosed",
    "filename": "folder-closed.svg",
    "category": "files",
    "tags": [
      "folder",
      "document",
      "catalog",
      "file",
      "closed",
      "archive"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 11.5v-8a1 1 0 0 1 1-1h1.586a1 1 0 0 1 .707.293l1.414 1.414a1 1 0 0 0 .707.293H12.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1M1.5 6.5h12\"/></g></svg>"
  },
  {
    "name": "File",
    "filename": "file.svg",
    "category": "files",
    "tags": [
      "file",
      "document",
      "note",
      "page",
      "draft",
      "item",
      "sheet",
      "content",
      "data"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"m12.5 5.5-4-4v3a1 1 0 0 0 1 1z\"/><path d=\"M8.5 1.5h-5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8\"/></g></svg>"
  },
  {
    "name": "FileUpload",
    "filename": "file-upload.svg",
    "category": "files",
    "tags": [
      "file",
      "document",
      "note",
      "page",
      "draft",
      "item",
      "sheet",
      "content",
      "arrow",
      "up",
      "data"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7.5 12.5v-5m0 0-2 2m2-2 2 2\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"m12.5 5.5-4-4v3a1 1 0 0 0 1 1z\"/><path d=\"M8.5 1.5h-5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8\"/></g></svg>"
  },
  {
    "name": "FileTree",
    "filename": "file-tree.svg",
    "category": "files",
    "tags": [
      "file",
      "document",
      "note",
      "page",
      "draft",
      "item",
      "sheet",
      "content",
      "list",
      "bullet",
      "options"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9.5 11.5h4m-4-4h4m-9-4h9m-12-1v5m0 0v3a1 1 0 0 0 1 1h2m-3-4h3M4.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M4.5 11.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/></g></svg>"
  },
  {
    "name": "FileSub",
    "filename": "file-sub.svg",
    "category": "files",
    "tags": [
      "file",
      "document",
      "note",
      "page",
      "draft",
      "item",
      "sheet",
      "content",
      "list",
      "bullet",
      "options",
      "sub"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7.5 2.5v5a1 1 0 0 0 1 1h4M12.5 8.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/></g></svg>"
  },
  {
    "name": "FileShare",
    "filename": "file-share.svg",
    "category": "files",
    "tags": [
      "file",
      "document",
      "note",
      "page",
      "draft",
      "item",
      "sheet",
      "content",
      "share"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6.5 2.5h-3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3\"/><path d=\"M10.5 8.5v-2c-1.832 0-3.858.152-5 2 0-3.77 2.688-5 5-5v-2l4 3.5z\"/></g></svg>"
  },
  {
    "name": "FileSettings",
    "filename": "file-settings.svg",
    "category": "files",
    "tags": [
      "file",
      "document",
      "note",
      "page",
      "draft",
      "item",
      "sheet",
      "content",
      "control",
      "preferences",
      "system"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7.5 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7.5 7.5v-1m0 5v1m2-3h1m-5 0h-1m4.414-1.414.707-.707m-3.535 3.535-.707.707m3.535-.707.707.707M6.086 8.086l-.707-.707\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"m12.5 5.5-4-4v3a1 1 0 0 0 1 1z\"/><path d=\"M8.5 1.5h-5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8\"/></g></svg>"
  },
  {
    "name": "FileRefresh",
    "filename": "file-refresh.svg",
    "category": "files",
    "tags": [
      "file",
      "document",
      "note",
      "page",
      "draft",
      "item",
      "sheet",
      "content",
      "loading",
      "loop",
      "process",
      "arrow",
      "refresh"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"m13.5 5.5-4-4v3a1 1 0 0 0 1 1z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.5 1.5h-4a1 1 0 0 0-1 1v2m5-3 4 4m-4-4v3a1 1 0 0 0 1 1h3m0 0v7a1 1 0 0 1-1 1h-2M9.364 9.465A4 4 0 1 0 9.208 12\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m7.422 9.095 1.932.517.517-1.931\"/></svg>"
  },
  {
    "name": "FileMove",
    "filename": "file-move.svg",
    "category": "files",
    "tags": [
      "file",
      "document",
      "note",
      "page",
      "draft",
      "item",
      "sheet",
      "content",
      "transfer",
      "arrow",
      "right",
      "data"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m11.5 3.5 2 2m0 0-2 2m2-2h-7a2 2 0 0 0-2 2M6.5 9.5h-3a1 1 0 0 0-1 1v4m4-5V12a.5.5 0 0 0 .5.5h2.5m-3-3 3 3m0 0v2M9.5 7.5v1a1 1 0 0 0 1 1h3m-4-8v2\"/></g></svg>"
  },
  {
    "name": "FileImport",
    "filename": "file-import.svg",
    "category": "files",
    "tags": [
      "file",
      "document",
      "note",
      "page",
      "draft",
      "item",
      "sheet",
      "content",
      "arrow",
      "right",
      "data",
      "import",
      "input"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"m13.5 5.5-4-4v3a1 1 0 0 0 1 1z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.5 1.5h-4a1 1 0 0 0-1 1v6m5-7 4 4m-4-4v3a1 1 0 0 0 1 1h3m0 0v8a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-1M7.5 8.5l2 2m0 0-2 2m2-2h-8\"/></svg>"
  },
  {
    "name": "FileExport",
    "filename": "file-export.svg",
    "category": "files",
    "tags": [
      "file",
      "document",
      "note",
      "page",
      "draft",
      "item",
      "sheet",
      "content",
      "arrow",
      "right",
      "data",
      "share",
      "export",
      "output"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"m10.5 5.5-4-4v3a1 1 0 0 0 1 1z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6.5 1.5h-4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-1m-4-11 4 4m-4-4v3a1 1 0 0 0 1 1h3m0 0v3M12.5 8.5l2 2m0 0-2 2m2-2h-8\"/></svg>"
  },
  {
    "name": "FileEdit",
    "filename": "file-edit.svg",
    "category": "files",
    "tags": [
      "file",
      "document",
      "note",
      "page",
      "draft",
      "item",
      "sheet",
      "content",
      "edit",
      "design",
      "pen",
      "pencil",
      "draw",
      "create"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7.5 1.5h-5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"m6.5 9.5 1-3 4.646-4.646a.5.5 0 0 1 .708 0l1.292 1.292a.5.5 0 0 1 0 .708L9.5 8.5z\"/><path d=\"M9.5 10.5V12a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V9a.5.5 0 0 1 .5-.5h.5\"/></g></svg>"
  },
  {
    "name": "FileDuplicate",
    "filename": "file-duplicate.svg",
    "category": "files",
    "tags": [
      "file",
      "document",
      "note",
      "page",
      "draft",
      "item",
      "sheet",
      "content",
      "duplicate",
      "copy",
      "clone",
      "paste"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M12.5 10.5h-5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3l3 3v5a1 1 0 0 1-1 1\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.5 1.5h-3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5m-3-3 3 3m-3-3V4a.5.5 0 0 0 .5.5h2.5\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 5.5h-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-1\"/></svg>"
  },
  {
    "name": "FileDownload",
    "filename": "file-download.svg",
    "category": "files",
    "tags": [
      "file",
      "document",
      "note",
      "page",
      "draft",
      "item",
      "sheet",
      "content",
      "arrow",
      "down",
      "data"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7.5 7.5v5m0 0-2-2m2 2 2-2\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"m12.5 5.5-4-4v3a1 1 0 0 0 1 1z\"/><path d=\"M8.5 1.5h-5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8\"/></g></svg>"
  },
  {
    "name": "FileDelete",
    "filename": "file-delete.svg",
    "category": "files",
    "tags": [
      "file",
      "document",
      "note",
      "page",
      "draft",
      "item",
      "sheet",
      "content",
      "clear",
      "delete",
      "remove",
      "close",
      "exit",
      "cancel",
      "discard"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path d=\"M8.5 9.5h-7m1 0v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4\"/><path stroke-linejoin=\"round\" d=\"M3.5 9.5v-2h3v2\"/><path fill=\"currentColor\" fill-opacity=\".25\" stroke-linejoin=\"round\" d=\"m13.5 5.5-4-4v3a1 1 0 0 0 1 1z\"/><path stroke-linejoin=\"round\" d=\"M9.5 1.5h-4a1 1 0 0 0-1 1v2m9 1v7a1 1 0 0 1-1 1h-2\"/></g></svg>"
  },
  {
    "name": "FileClear",
    "filename": "file-clear.svg",
    "category": "files",
    "tags": [
      "file",
      "document",
      "note",
      "page",
      "draft",
      "item",
      "sheet",
      "content",
      "clear",
      "delete",
      "remove",
      "close",
      "exit",
      "cancel",
      "discard"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"m12.5 5.5-4-4v3a1 1 0 0 0 1 1z\"/><path d=\"M8.5 1.5h-5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8M5.5 7.5l4 4m0-4-4 4\"/></g></svg>"
  },
  {
    "name": "FileAdd",
    "filename": "file-add.svg",
    "category": "files",
    "tags": [
      "file",
      "document",
      "note",
      "page",
      "draft",
      "item",
      "sheet",
      "content",
      "create",
      "add"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"m14.5 5.5-4-4v3a1 1 0 0 0 1 1z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.5 1.5h-4a1 1 0 0 0-1 1v2m5-3 4 4m-4-4v3a1 1 0 0 0 1 1h3m0 0v8a1 1 0 0 1-1 1h-3M7.5 10.5h-4m2 2v-4\"/><path fill=\"currentColor\" fill-opacity=\".25\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0\"/></svg>"
  },
  {
    "name": "FieldTypeUser",
    "filename": "field-type-user.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.5 12.5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3m-2-7a2 2 0 1 1-4 0 2 2 0 0 1 4 0\"/></svg>"
  },
  {
    "name": "FieldTypeUrl",
    "filename": "field-type-url.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m8 4 .086-.086a2 2 0 0 1 2.828 0l.172.172a2 2 0 0 1 0 2.828L9.207 8.793a1 1 0 0 1-1.414 0L7 8m0 3-.086.086a2 2 0 0 1-2.828 0l-.172-.172a2 2 0 0 1 0-2.828l1.879-1.879a1 1 0 0 1 1.414 0L8 7\"/></svg>"
  },
  {
    "name": "FieldTypeTime",
    "filename": "field-type-time.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7.5 2.5a5 5 0 1 1 0 10 5 5 0 0 1 0-10\"/><path d=\"M7.5 4.5v3h2\"/></g></svg>"
  },
  {
    "name": "FieldTypeText",
    "filename": "field-type-text.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m3.5 11.5 4-8 4 8M5 8.5h5\"/></g></svg>"
  },
  {
    "name": "FieldTypeSystemUser",
    "filename": "field-type-system-user.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table",
      "dynamic"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"currentColor\" d=\"M3.5 12.5a3 3 0 0 1 3-3h1m2-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0\"/><path stroke=\"#05F\" d=\"M10.5 13.5 12 12m0 0-2.5-1.5L11 9m1 3 1.5-1.5L11 9m1.5-1.5L11 9\"/></g></svg>"
  },
  {
    "name": "FieldTypeSystemId",
    "filename": "field-type-system-id.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table",
      "dynamic"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"#05F\" d=\"M10.5 13.5 12 12m0 0-2.5-1.5L11 9m1 3 1.5-1.5L11 9m1.5-1.5L11 9\"/><path stroke=\"currentColor\" d=\"M11.5 4c0 .828-2.015 1.5-4.5 1.5S2.5 4.828 2.5 4m9 0c0-.828-2.015-1.5-4.5-1.5S2.5 3.172 2.5 4m9 0v1.5M2.5 4v3.5m0 0V11c-.003.24.168.478.498.691.33.214.809.399 1.397.538.588.14 1.268.23 1.982.262.715.034 1.443.01 2.123-.071m-6-4.92c1.5 1 4.219 1.178 6 1\"/></g></svg>"
  },
  {
    "name": "FieldTypeSystemDate",
    "filename": "field-type-system-date.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table",
      "dynamic"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"#05F\" d=\"M10.5 13.5 12 12m0 0-2.5-1.5L11 9m1 3 1.5-1.5L11 9m1.5-1.5L11 9\"/><path stroke=\"currentColor\" d=\"M4.5 3.5h-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5m2-9h1a1 1 0 0 1 1 1v1m-6-2h2M2.5 6.5h8M4.5 2.5v2m6-2v2M4.5 8.5h.005m-.005 2h.005M6.5 8.5h.005m-.005 2h.005M8.5 8.5h.005\"/></g></svg>"
  },
  {
    "name": "FieldTypeSingleSelect",
    "filename": "field-type-single-select.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 4.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M8.5 4.5h4m-4 6h4M2.5 10.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M4.5 4.5h.005\"/></g></svg>"
  },
  {
    "name": "FieldTypeSelectAi",
    "filename": "field-type-select-ai.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table",
      "ai"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"currentColor\" d=\"M4.5 2.5H3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-.5M8.5 4.5h4M5.5 8.5H3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h2.5\"/><path stroke=\"currentColor\" d=\"m4 4 1 1 2-2\"/><path stroke=\"#AB0A83\" d=\"M7.5 10.5c1.5 0 3-1.5 3-3 0 1.5 1.5 3 3 3-1.5 0-3 1.5-3 3 0-1.5-1.5-3-3-3\"/></g></svg>"
  },
  {
    "name": "FieldTypeRating",
    "filename": "field-type-rating.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m7.5 2.5 1.545 3.13 3.455.505L10 8.57l.59 3.44-3.09-1.625-3.09 1.625L5 8.57 2.5 6.135l3.455-.505z\"/></svg>"
  },
  {
    "name": "FieldTypePrimary",
    "filename": "field-type-primary.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 2.5v10M11.5 6.5l-6-3v6z\"/></g></svg>"
  },
  {
    "name": "FieldTypePhone",
    "filename": "field-type-phone.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.444 9.96v1.5a1 1 0 0 1-1.09 1 9.9 9.9 0 0 1-4.315-1.535 9.75 9.75 0 0 1-3-3A9.9 9.9 0 0 1 2.504 3.59 1 1 0 0 1 3.5 2.5H5a1 1 0 0 1 1 .86q.095.722.35 1.405a1 1 0 0 1-.225 1.055l-.635.635a8 8 0 0 0 3 3l.635-.635a1 1 0 0 1 1.055-.225q.683.255 1.405.35a1 1 0 0 1 .86 1.015\"/></svg>"
  },
  {
    "name": "FieldTypePercent",
    "filename": "field-type-percent.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m11.5 3.5-8 8M6 4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m5.5 5.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0\"/></svg>"
  },
  {
    "name": "FieldTypeNumber",
    "filename": "field-type-number.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.5 6.5h8m-8 3h8m-5-6-1 9m4-9-1 9\"/></svg>"
  },
  {
    "name": "FieldTypeMultiSelect",
    "filename": "field-type-multi-select.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 2.5H3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-.5M8.5 4.5h4m-4 6h4M6 8.5H3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5\"/><path d=\"m4 4 1 1 2-2\"/></g></svg>"
  },
  {
    "name": "FieldTypeMail",
    "filename": "field-type-mail.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.5 5 8.015 7.85a.97.97 0 0 1-1.03 0L2.5 5m1-1.5h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1\"/></svg>"
  },
  {
    "name": "FieldTypeLookup",
    "filename": "field-type-lookup.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.5 12.5 11 11M2.5 2.5h10m-10 3h10m-10 3h3m-3 3h3m6-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0\"/></svg>"
  },
  {
    "name": "FieldTypeLongText",
    "filename": "field-type-long-text.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 5.5h3M8.5 3.5h4m-4 3h4m-10 3h10m-10 3h6M2.5 6.5l2-4 2 4\"/></g></svg>"
  },
  {
    "name": "FieldTypeLongTextAi",
    "filename": "field-type-long-text-ai.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table",
      "ai"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"currentColor\" d=\"M3 5.5h3M8.5 2.5h4m-4 3h4m-10 4h3m-3 3h3M2.5 6.5l2-4 2 4\"/><path stroke=\"#AB0A83\" d=\"M7.5 10.5c1.5 0 3-1.5 3-3 0 1.5 1.5 3 3 3-1.5 0-3 1.5-3 3 0-1.5-1.5-3-3-3\"/></g></svg>"
  },
  {
    "name": "FieldTypeLock",
    "filename": "field-type-lock.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.5 7.5h-6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1M5.5 7V5.5a2 2 0 1 1 4 0V7\"/></g></svg>"
  },
  {
    "name": "FieldTypeLinked",
    "filename": "field-type-linked.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 3.5h9m-9 8h9m-3-4h3M2.5 7.5h5m0 0-2-2m2 2-2 2\"/></g></svg>"
  },
  {
    "name": "FieldTypeLinkedAi",
    "filename": "field-type-linked-ai.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table",
      "ai"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"currentColor\" d=\"M3.5 3.5h9m-9 8h2M2.5 7.5h5m0 0-2-2m2 2-2 2\"/><path stroke=\"#AB0A83\" d=\"M7.5 10.5c1.5 0 3-1.5 3-3 0 1.5 1.5 3 3 3-1.5 0-3 1.5-3 3 0-1.5-1.5-3-3-3\"/></g></svg>"
  },
  {
    "name": "FieldTypeFormula",
    "filename": "field-type-formula.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 2.5H9.988a2 2 0 0 0-1.916 1.425l-2.144 7.15A2 2 0 0 1 4.012 12.5H2.5M3.5 6.5h7M12.5 12.5l-3-3m3 0-3 3\"/></g></svg>"
  },
  {
    "name": "FieldTypeFilter",
    "filename": "field-type-filter.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 4.5 8.5 8v4.5l-2-1V8l-3-3.5m3 0h2M2.5 2.5h10\"/></g></svg>"
  },
  {
    "name": "FieldTypeDate",
    "filename": "field-type-date.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 3.5h-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-1m-4 0h2M2.5 6.5h10M4.5 2.5v2m6-2v2M4.5 8.5h.005m1.995 0h.005m1.995 0h.005m-4.005 2h.005m1.995 0h.005m1.995 0h.005m1.995-2h.005m-.005 2h.005\"/></g></svg>"
  },
  {
    "name": "FieldTypeDateAndTime",
    "filename": "field-type-date-and-time.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 3.5h-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2m5-9h1a1 1 0 0 1 1 1v1m-6-2h2M2.5 6.5h5M4.5 2.5v2m6-2v2M11.5 11.5l-1-1v-1\"/><path d=\"M13.5 10.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0M4.5 8.5h.005m-.005 2h.005\"/></g></svg>"
  },
  {
    "name": "FieldTypeCurrency",
    "filename": "field-type-currency.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 3v10M10 4.5H6.25a1.75 1.75 0 1 0 0 3.5h2.5a1.75 1.75 0 1 1 0 3.5H4.5\"/></svg>"
  },
  {
    "name": "FieldTypeCount",
    "filename": "field-type-count.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M5.5 4.5h4m-4 2h.005m1.995 0h.005m1.995 0h.005M5.5 8.5h.005m1.995 0h.005m-2.005 2h.005m1.995 0h.005m2-2v2M4.5 2.5h6a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1\"/></svg>"
  },
  {
    "name": "FieldTypeCheckbox",
    "filename": "field-type-checkbox.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m6.5 8 1 1 2-2m-5-3.5h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1\"/></svg>"
  },
  {
    "name": "FieldTypeButton",
    "filename": "field-type-button.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M5 2.5 5.5 4M4 5.5 2.5 5m6-1.5-1 1m-3 3-1 1M6 6l2.5 6.5 1-3 3-1z\"/></svg>"
  },
  {
    "name": "FieldTypeAutoNumber",
    "filename": "field-type-auto-number.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m3 3.5 1-1v4M3 9.5s0-1 1-1 1 1 1 1c0 .5-.5 1-1 1.5-1.5 1.5-1 1.5-1 1.5h2M10 12.5 7.5 10m2.5 2.5 2.5-2.5M10 12.5v-10\"/></g></svg>"
  },
  {
    "name": "FieldTypeAttachment",
    "filename": "field-type-attachment.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8.5 2.5h.086a1 1 0 0 1 .707.293l1.914 1.914a1 1 0 0 1 .293.707V5.5m-3-3h-4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6m-3-3V5a.5.5 0 0 0 .5.5h2.5\"/></svg>"
  },
  {
    "name": "FieldTypeArray",
    "filename": "field-type-array.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 3.5h-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1m6-8h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1M4.5 7.5h.005M7.5 7.5h.005M10.5 7.5h.005\"/></g></svg>"
  },
  {
    "name": "FieldTypeAi",
    "filename": "field-type-ai.svg",
    "category": "field-type",
    "tags": [
      "field",
      "type",
      "data",
      "datasheet",
      "table",
      "ai"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke-linecap=\"round\" stroke-linejoin=\"round\"><path fill=\"currentColor\" stroke=\"currentColor\" d=\"M9.5 4.5a2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0-2 2 2 2 0 0 0-2-2\"/><path stroke=\"#AB0A83\" d=\"M2.5 9.5a4 4 0 0 0 4-4 4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4\"/></g></svg>"
  },
  {
    "name": "Visible",
    "filename": "visible.svg",
    "category": "interface",
    "tags": [
      "interface",
      "view",
      "watch",
      "see",
      "show",
      "visibility",
      "visible",
      "preview",
      "read"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13.5 8.576C12.873 6.237 10.5 4.5 8 4.5S3.127 6.237 2.5 8.576\"/><path fill=\"currentColor\" d=\"M8 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4\"/></svg>"
  },
  {
    "name": "Viewport",
    "filename": "viewport.svg",
    "category": "interface",
    "tags": [
      "interface",
      "layout",
      "browser",
      "web"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 5.5h.005m1.995 0h.005m1.995 0h.005M3.5 3.5h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1\"/></svg>"
  },
  {
    "name": "VariablesString",
    "filename": "variables-string.svg",
    "category": "interface",
    "tags": [
      "interface",
      "variables",
      "typography",
      "text",
      "input",
      "font",
      "paragraph",
      "format"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 2.5h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1\"/><path d=\"M5.5 6.5v-1h2m0 0h2v1m-2-1v4m-1 0h2\"/></g></svg>"
  },
  {
    "name": "VariablesNumber",
    "filename": "variables-number.svg",
    "category": "interface",
    "tags": [
      "interface",
      "variables",
      "hash",
      "number",
      "href"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 2.5h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1M5.5 6.5H10m-5 2h4.5M7 5l-1 5m3-5-1 5\"/></g></svg>"
  },
  {
    "name": "VariablesEnum",
    "filename": "variables-enum.svg",
    "category": "interface",
    "tags": [
      "interface",
      "variables",
      "dropdown",
      "arrow",
      "down"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 2.5h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1\"/><path d=\"m5.5 6.5 2 2 2-2\"/></g></svg>"
  },
  {
    "name": "VariablesColor",
    "filename": "variables-color.svg",
    "category": "interface",
    "tags": [
      "interface",
      "variables",
      "palette",
      "design",
      "paint",
      "color",
      "art",
      "draw"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path fill=\"currentColor\" d=\"M8.75 5.5a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5M10.75 7.5a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5M6.25 6a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5M5.25 8.5a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5\"/><path d=\"M8 3C5.25 3 3 5.25 3 8s2.25 5 5 5a.826.826 0 0 0 .824-.844.86.86 0 0 0-.219-.562.75.75 0 0 1-.219-.563.82.82 0 0 1 .835-.834h.998a2.79 2.79 0 0 0 2.777-2.777C12.982 5.006 10.73 3 8 3\"/></g></svg>"
  },
  {
    "name": "VariablesBoolean",
    "filename": "variables-boolean.svg",
    "category": "interface",
    "tags": [
      "interface",
      "variables",
      "toggle",
      "switch",
      "preferences",
      "options"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 4.5H6a3.5 3.5 0 1 0 0 7h3a3.5 3.5 0 1 0 0-7\"/><path d=\"M4.5 8a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0\"/></g></svg>"
  },
  {
    "name": "Variable",
    "filename": "variable.svg",
    "category": "interface",
    "tags": [
      "interface",
      "variables"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linejoin=\"round\"><path d=\"M7.5 2.5 12 5v5l-4.5 2.5L3 10V5z\"/><path stroke-linecap=\"round\" d=\"M6.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/></g></svg>"
  },
  {
    "name": "UnlockAspectRatio",
    "filename": "unlock-aspect-ratio.svg",
    "category": "interface",
    "tags": [
      "interface",
      "link",
      "connection",
      "url",
      "hyperlink",
      "aspect"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10 10.5h1a2.5 2.5 0 0 0 0-5h-1m-4 0H5a2.5 2.5 0 0 0 0 5h1\"/></svg>"
  },
  {
    "name": "TransformsScale",
    "filename": "transforms-scale.svg",
    "category": "interface",
    "tags": [
      "interface",
      "sharing",
      "expand"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8 3.5H4.5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V8M9 9.5H6.5m0 0V7m0 2.5 6-6m0 0H10m2.5 0V6\"/></svg>"
  },
  {
    "name": "TransformsRotate",
    "filename": "transforms-rotate.svg",
    "category": "interface",
    "tags": [
      "interface",
      "loading",
      "loop",
      "process",
      "arrow",
      "refresh",
      "rotate"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.5 8A4.5 4.5 0 1 0 8 3.5a4.88 4.88 0 0 0-3.37 1.37L3.5 6m0 0V3.5m0 2.5H6\"/></svg>"
  },
  {
    "name": "TransformsPerspective",
    "filename": "transforms-perspective.svg",
    "category": "interface",
    "tags": [
      "interface",
      "arrow",
      "3d",
      "axis"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 3.5v8h8M4.5 11.5l3-3\"/><path d=\"m3 5 1.5-1.5L6 5M11 10l1.5 1.5L11 13\"/></g></svg>"
  },
  {
    "name": "TransformsDepth",
    "filename": "transforms-depth.svg",
    "category": "interface",
    "tags": [
      "interface",
      "3d",
      "axis"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M4.5 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"/><path d=\"M4.5 5.5v6h6M4.5 11.5l3-3\"/></g></svg>"
  },
  {
    "name": "Transforms3dRotate",
    "filename": "transforms-3d-rotate.svg",
    "category": "interface",
    "tags": [
      "interface",
      "arrow",
      "3d",
      "axis"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.733 5.25C9.321 3.619 8.476 2.5 7.5 2.5 6.12 2.5 5 4.739 5 7.5s1.12 5 2.5 5q.257 0 .5-.1m1.097-4.046 1.907.93-.93 1.906M11 9.286c-.902.442-2.137.715-3.5.715-2.761 0-5-1.12-5-2.5S4.739 5 7.5 5c2.419 0 4.437.859 4.9 2\"/></svg>"
  },
  {
    "name": "ToolbarText",
    "filename": "toolbar-text.svg",
    "category": "interface",
    "tags": [
      "interface",
      "toolbar",
      "typography",
      "text",
      "input",
      "font",
      "paragraph",
      "format"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2 1.5h12M8 1.5v13\"/></g></svg>"
  },
  {
    "name": "ToolbarStar",
    "filename": "toolbar-star.svg",
    "category": "interface",
    "tags": [
      "interface",
      "toolbar",
      "shape",
      "star"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m8 .867 2.318 4.696 5.182.753-3.75 3.655.885 5.162L8 12.696l-4.635 2.437.885-5.162L.5 6.316l5.182-.753z\"/></svg>"
  },
  {
    "name": "ToolbarSelect",
    "filename": "toolbar-select.svg",
    "category": "interface",
    "tags": [
      "interface",
      "toolbar",
      "cursor",
      "arrow",
      "click",
      "mouse"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m1 1 5.822 14L8.89 8.914 15 6.822z\"/></svg>"
  },
  {
    "name": "ToolbarScale",
    "filename": "toolbar-scale.svg",
    "category": "interface",
    "tags": [
      "interface",
      "toolbar",
      "scale",
      "right",
      "arrow",
      "zoom"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5.5h-6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6m-5 2h-4m0 0v-4m0 4 9-9m0 0h-3.889M14.5.5v3.889\"/></svg>"
  },
  {
    "name": "ToolbarRectangle",
    "filename": "toolbar-rectangle.svg",
    "category": "interface",
    "tags": [
      "interface",
      "toolbar",
      "shape",
      "rectangle",
      "square"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M14.5.5h-13a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1\"/></svg>"
  },
  {
    "name": "ToolbarPosition",
    "filename": "toolbar-position.svg",
    "category": "interface",
    "tags": [
      "interface",
      "toolbar"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5.5v2m-7 5h2m10 0h2m-7 5v2m2-7a2 2 0 1 1-4 0 2 2 0 0 1 4 0\"/></svg>"
  },
  {
    "name": "ToolbarPolygon",
    "filename": "toolbar-polygon.svg",
    "category": "interface",
    "tags": [
      "interface",
      "toolbar",
      "shape",
      "triangle"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m8 1.5-7.5 13h15z\"/></svg>"
  },
  {
    "name": "ToolbarPenTool",
    "filename": "toolbar-pen-tool.svg",
    "category": "interface",
    "tags": [
      "interface",
      "toolbar",
      "signature",
      "pen",
      "edit",
      "sign",
      "pencil"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M.5 15.5l5.44-5.44M7.5.5l8 8\"/><path d=\"m13.5 6.5-2 7-11 2 2-11 7-2\"/></g></svg>"
  },
  {
    "name": "ToolbarLine",
    "filename": "toolbar-line.svg",
    "category": "interface",
    "tags": [
      "interface",
      "toolbar",
      "line",
      "divider"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" d=\"m13.5 2.5-11 11\"/></svg>"
  },
  {
    "name": "ToolbarImage",
    "filename": "toolbar-image.svg",
    "category": "interface",
    "tags": [
      "interface",
      "toolbar",
      "image",
      "photo",
      "picture",
      "media",
      "graphic"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m.5 12.5 3-3 2 2 5-5 5 5\"/><path d=\"M14 15.5H2A1.5 1.5 0 0 1 .5 14V2A1.5 1.5 0 0 1 2 .5h12A1.5 1.5 0 0 1 15.5 2v12a1.5 1.5 0 0 1-1.5 1.5\"/><path d=\"M5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3\"/></g></svg>"
  },
  {
    "name": "ToolbarHand",
    "filename": "toolbar-hand.svg",
    "category": "interface",
    "tags": [
      "interface",
      "toolbar",
      "cursor",
      "grab",
      "hand",
      "hold"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7.5 3.5V3a1.5 1.5 0 0 0-3 0v6.5l-2.321-.913A1.21 1.21 0 0 0 .82 10.505l2.619 2.9a6.14 6.14 0 0 0 4.618 2.1h1.307A6.136 6.136 0 0 0 15.5 9.364V3.5a1 1 0 0 0-2 0v1\"/><path d=\"M10.5 3.5V3a1.5 1.5 0 1 1 3 0v3.5M7.5 6.5V2a1.5 1.5 0 0 1 3 0v4.5\"/></g></svg>"
  },
  {
    "name": "ToolbarFrame",
    "filename": "toolbar-frame.svg",
    "category": "interface",
    "tags": [
      "interface",
      "toolbar",
      "design",
      "frame"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" d=\"M1.5 4.5h13m-13 7h13m-3-10v13m-7-13v13\"/></svg>"
  },
  {
    "name": "ToolbarEllipse",
    "filename": "toolbar-ellipse.svg",
    "category": "interface",
    "tags": [
      "interface",
      "toolbar",
      "circle",
      "radio",
      "shape"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8 15.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15\"/></svg>"
  },
  {
    "name": "ToolbarComponent",
    "filename": "toolbar-component.svg",
    "category": "interface",
    "tags": [
      "interface",
      "toolbar",
      "component",
      "widget"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path d=\"m8.354.854 2.292 2.292a.5.5 0 0 1 0 .708L8.354 6.146a.5.5 0 0 1-.708 0L5.354 3.854a.5.5 0 0 1 0-.708L7.646.854a.5.5 0 0 1 .708 0ZM8.354 9.854l2.292 2.292a.5.5 0 0 1 0 .708l-2.292 2.292a.5.5 0 0 1-.708 0l-2.292-2.292a.5.5 0 0 1 0-.708l2.292-2.292a.5.5 0 0 1 .708 0ZM15.146 8.354l-2.292 2.292a.5.5 0 0 1-.708 0L9.854 8.354a.5.5 0 0 1 0-.708l2.292-2.292a.5.5 0 0 1 .708 0l2.292 2.292a.5.5 0 0 1 0 .708ZM6.146 8.354l-2.292 2.292a.5.5 0 0 1-.708 0L.854 8.354a.5.5 0 0 1 0-.708l2.292-2.292a.5.5 0 0 1 .708 0l2.292 2.292a.5.5 0 0 1 0 .708Z\"/></g></svg>"
  },
  {
    "name": "ToolbarComment",
    "filename": "toolbar-comment.svg",
    "category": "interface",
    "tags": [
      "interface",
      "toolbar"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 5.5h7M4.5 8.5h7M15.5 7C15.5 3.41 12.142.5 8 .5S.5 3.41.5 7s3.358 6.5 7.5 6.5q.788-.002 1.532-.137L13.5 15.5v-4.091c1.238-1.159 2-2.705 2-4.409\"/></g></svg>"
  },
  {
    "name": "ToolbarArrow",
    "filename": "toolbar-arrow.svg",
    "category": "interface",
    "tags": [
      "interface",
      "toolbar",
      "arrow",
      "top",
      "right",
      "forward"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m13.5 2.5-11 11m11-11v3m0-3h-3\"/></svg>"
  },
  {
    "name": "ToolbarAi",
    "filename": "toolbar-ai.svg",
    "category": "interface",
    "tags": [
      "interface",
      "toolbar",
      "ai",
      "integration",
      "extension",
      "sparkle",
      "magic"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M.5 10.5a5 5 0 0 0 5-5 5 5 0 0 0 5 5 5 5 0 0 0-5 5 5 5 0 0 0-5-5M9.5 3.5a3 3 0 0 0 3-3 3 3 0 0 0 3 3 3 3 0 0 0-3 3 3 3 0 0 0-3-3\"/></g></svg>"
  },
  {
    "name": "Target",
    "filename": "target.svg",
    "category": "interface",
    "tags": [
      "interface",
      "target",
      "goals"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" d=\"M12.5 7.5a5 5 0 1 0-10 0 5 5 0 0 0 10 0Z\"/><path stroke=\"currentColor\" d=\"M10 7.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z\"/><path fill=\"currentColor\" d=\"M8 7.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0\"/></svg>"
  },
  {
    "name": "SubIndicatorDot",
    "filename": "sub-indicator-dot.svg",
    "category": "interface",
    "tags": [
      "interface",
      "solid",
      "dot"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4\"/></svg>"
  },
  {
    "name": "Styles",
    "filename": "styles.svg",
    "category": "interface",
    "tags": [
      "interface",
      "app",
      "application",
      "dots",
      "circles"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path d=\"M6.5 4.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM12.5 4.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM6.5 10.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM12.5 10.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z\"/></g></svg>"
  },
  {
    "name": "StyleText",
    "filename": "style-text.svg",
    "category": "interface",
    "tags": [
      "interface",
      "typography",
      "text",
      "input",
      "font",
      "paragraph",
      "format"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 4.5v-1h8v1M7.5 3.5V11M6 11.5h3\"/></g></svg>"
  },
  {
    "name": "StickyTop",
    "filename": "sticky-top.svg",
    "category": "interface",
    "tags": [
      "interface",
      "upload",
      "arrow"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M5 5h6m-5 6H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2M8 7v6m0-6L6.5 8.5M8 7l1.5 1.5\"/></svg>"
  },
  {
    "name": "StackRow",
    "filename": "stack-row.svg",
    "category": "interface",
    "tags": [
      "interface",
      "horizontal",
      "stack",
      "layout",
      "row"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path d=\"M2.5 3.5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1zM2.5 9.5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1z\"/></g></svg>"
  },
  {
    "name": "StackRowWrap",
    "filename": "stack-row-wrap.svg",
    "category": "interface",
    "tags": [
      "interface",
      "stack",
      "layout",
      "grid"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path d=\"M2.5 3.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1zM2.5 9.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zM9.5 3.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zM7.5 9.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1z\"/></g></svg>"
  },
  {
    "name": "StackColumn",
    "filename": "stack-column.svg",
    "category": "interface",
    "tags": [
      "interface",
      "vertical",
      "stack",
      "layout",
      "column"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path d=\"M2.5 3.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM8.5 3.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z\"/></g></svg>"
  },
  {
    "name": "StackColumnWrap",
    "filename": "stack-column-wrap.svg",
    "category": "interface",
    "tags": [
      "interface",
      "stack",
      "layout",
      "grid"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path d=\"M2.5 3.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM2.5 10.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM8.5 3.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM8.5 8.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z\"/></g></svg>"
  },
  {
    "name": "SpanRow",
    "filename": "span-row.svg",
    "category": "interface",
    "tags": [
      "interface",
      "grid",
      "span"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path d=\"M12.5 7.5v-4a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1Z\"/><path stroke-linecap=\"round\" stroke-opacity=\".5\" d=\"M12.5 10.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1\"/><path stroke-linecap=\"round\" d=\"M3.5 4.5s-1 1-1 3 1 3 1 3\"/></g></svg>"
  },
  {
    "name": "SpanColumn",
    "filename": "span-column.svg",
    "category": "interface",
    "tags": [
      "interface",
      "grid",
      "span"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path d=\"M7.5 2.5h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1Z\"/><path stroke-linecap=\"round\" stroke-opacity=\".5\" d=\"M10.5 2.5h1a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1\"/><path stroke-linecap=\"round\" d=\"M4.5 11.5s1 1 3 1 3-1 3-1\"/></g></svg>"
  },
  {
    "name": "Rotate",
    "filename": "rotate.svg",
    "category": "interface",
    "tags": [
      "interface",
      "rotate"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.5 3.5v10h10\"/><path d=\"M8 13a5 5 0 0 0-5-5\"/></g></svg>"
  },
  {
    "name": "Rotate90Right",
    "filename": "rotate-90-right.svg",
    "category": "interface",
    "tags": [
      "interface",
      "process",
      "arrow",
      "refresh",
      "rotate"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path d=\"M10.293 8.793 8.207 6.707a1 1 0 0 0-1.414 0L4.707 8.793a1 1 0 0 0 0 1.414l2.086 2.086a1 1 0 0 0 1.414 0l2.086-2.086a1 1 0 0 0 0-1.414ZM4.5 4.5l1.232-1.232a2.5 2.5 0 0 1 3.536 0L10.5 4.5\"/><path stroke-linejoin=\"round\" d=\"M10.5 2.5v2l-2 .5\"/></g></svg>"
  },
  {
    "name": "Relative",
    "filename": "relative.svg",
    "category": "interface",
    "tags": [
      "interface",
      "percent",
      "percentage",
      "relative",
      "finance"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m11.5 3.5-8 8M6 4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m5.5 5.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0\"/></svg>"
  },
  {
    "name": "RadiusTr",
    "filename": "radius-tr.svg",
    "category": "interface",
    "tags": [
      "interface",
      "radius",
      "rounded",
      "border",
      "top",
      "right"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" d=\"M12.5 11.5v-4a4 4 0 0 0-4-4h-4\"/></svg>"
  },
  {
    "name": "RadiusTl",
    "filename": "radius-tl.svg",
    "category": "interface",
    "tags": [
      "interface",
      "radius",
      "rounded",
      "border",
      "top",
      "left"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" d=\"M11.5 3.5h-4a4 4 0 0 0-4 4v4\"/></svg>"
  },
  {
    "name": "RadiusBr",
    "filename": "radius-br.svg",
    "category": "interface",
    "tags": [
      "interface",
      "radius",
      "rounded",
      "border",
      "right",
      "bottom"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" d=\"M4.5 12.5h4a4 4 0 0 0 4-4v-4\"/></svg>"
  },
  {
    "name": "RadiusBl",
    "filename": "radius-bl.svg",
    "category": "interface",
    "tags": [
      "interface",
      "radius",
      "rounded",
      "border",
      "left",
      "bottom"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" d=\"M3.5 4.5v4a4 4 0 0 0 4 4h4\"/></svg>"
  },
  {
    "name": "RadiusAll",
    "filename": "radius-all.svg",
    "category": "interface",
    "tags": [
      "interface",
      "radius",
      "rounded",
      "border"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.5 12.5h1a2 2 0 0 0 2-2v-1m-7 3h-1a2 2 0 0 1-2-2v-1m0-4v-1a2 2 0 0 1 2-2h1m4 0h1a2 2 0 0 1 2 2v1\"/></svg>"
  },
  {
    "name": "PaddingV",
    "filename": "padding-v.svg",
    "category": "interface",
    "tags": [
      "interface",
      "horizontal",
      "padding",
      "border"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 2.5h10M2.5 12.5h10\"/><path stroke-opacity=\".5\" d=\"M10.5 9.5v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1\"/></g></svg>"
  },
  {
    "name": "PaddingT",
    "filename": "padding-t.svg",
    "category": "interface",
    "tags": [
      "interface",
      "top",
      "padding",
      "border"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 2.5h10\"/><path stroke-opacity=\".5\" d=\"M10.5 9.5v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1\"/></g></svg>"
  },
  {
    "name": "PaddingR",
    "filename": "padding-r.svg",
    "category": "interface",
    "tags": [
      "interface",
      "right",
      "padding",
      "border"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 12.5v-10\"/><path stroke-opacity=\".5\" d=\"M9.5 4.5h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1\"/></g></svg>"
  },
  {
    "name": "PaddingPer",
    "filename": "padding-per.svg",
    "category": "interface",
    "tags": [
      "interface",
      "padding",
      "border"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 10.5v-6M12.5 10.5v-6M4.5 2.5h6M4.5 12.5h6\"/><path stroke-opacity=\".5\" d=\"M9.5 4.5h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1\"/></g></svg>"
  },
  {
    "name": "PaddingL",
    "filename": "padding-l.svg",
    "category": "interface",
    "tags": [
      "interface",
      "left",
      "padding",
      "border"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 12.5v-10\"/><path stroke-opacity=\".5\" d=\"M9.5 4.5h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1\"/></g></svg>"
  },
  {
    "name": "PaddingH",
    "filename": "padding-h.svg",
    "category": "interface",
    "tags": [
      "interface",
      "vertical"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 12.5v-10M12.5 12.5v-10\"/><path stroke-opacity=\".5\" d=\"M9.5 4.5h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1\"/></g></svg>"
  },
  {
    "name": "PaddingB",
    "filename": "padding-b.svg",
    "category": "interface",
    "tags": [
      "interface",
      "bottom"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 12.5h10\"/><path stroke-opacity=\".5\" d=\"M10.5 9.5v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1\"/></g></svg>"
  },
  {
    "name": "Opacity",
    "filename": "opacity.svg",
    "category": "interface",
    "tags": [
      "interface",
      "gradient",
      "opacity",
      "blur",
      "alpha"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 2.5h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1\"/><path stroke-opacity=\".25\" d=\"M4.5 10.5h.005m1.995-2h.005m1.995-2h.005m1.995-2h.005m-.005 2h.005M8.5 8.5h.005m-2.005 2h.005m1.995 0h.005m1.995 0h.005m-.005-2h.005\"/></g></svg>"
  },
  {
    "name": "Mixed",
    "filename": "mixed.svg",
    "category": "interface",
    "tags": [
      "interface",
      "group"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 9.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7\"/><path stroke-opacity=\".5\" d=\"M9 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7\"/></g></svg>"
  },
  {
    "name": "MinimizeUi",
    "filename": "minimize-ui.svg",
    "category": "interface",
    "tags": [
      "interface",
      "dock"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path stroke-linejoin=\"round\" d=\"M12.6 2.5H3.4a.9.9 0 0 0-.9.9v8.2a.9.9 0 0 0 .9.9h9.2a.9.9 0 0 0 .9-.9V3.4a.9.9 0 0 0-.9-.9\"/><path d=\"M6.5 4.5v6\"/></g></svg>"
  },
  {
    "name": "MinWidth",
    "filename": "min-width.svg",
    "category": "interface",
    "tags": [
      "interface",
      "arrow",
      "vertical",
      "collapse",
      "fold",
      "split"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.5 7.5h3m0 0L4 6m1.5 1.5L4 9m8.5-1.5h-3m0 0L11 9M9.5 7.5 11 6M7.5 2.5v10\"/></svg>"
  },
  {
    "name": "MinHeight",
    "filename": "min-height.svg",
    "category": "interface",
    "tags": [
      "interface",
      "arrow",
      "horizontal",
      "collapse",
      "fold",
      "split"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 2.5v3m0 0L9 4M7.5 5.5 6 4m1.5 8.5v-3m0 0L6 11m1.5-1.5L9 11m3.5-3.5h-10\"/></svg>"
  },
  {
    "name": "MaxWidth",
    "filename": "max-width.svg",
    "category": "interface",
    "tags": [
      "interface",
      "arrow",
      "horizontal",
      "maximize"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 7.5h6m-6 0L6 6M4.5 7.5 6 9m4.5-1.5L9 9m1.5-1.5L9 6m-6.5 6.5v-10m10 10v-10\"/></svg>"
  },
  {
    "name": "MaxHeight",
    "filename": "max-height.svg",
    "category": "interface",
    "tags": [
      "interface",
      "arrow",
      "vertical",
      "maximize"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 4.5v6m0-6L9 6M7.5 4.5 6 6m1.5 4.5L6 9m1.5 1.5L9 9M2.5 2.5h10m-10 10h10\"/></svg>"
  },
  {
    "name": "Mask",
    "filename": "mask.svg",
    "category": "interface",
    "tags": [
      "interface",
      "boolean",
      "group",
      "mask"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 5.5h2.5a1 1 0 0 1 1 1V9m-6-3.5a1 1 0 0 0-1 1m3 6h1m-4-4v1m1 3a1 1 0 0 1-1-1m7 0a1 1 0 0 1-1 1\"/><path d=\"M5.5 6a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0\"/></g></svg>"
  },
  {
    "name": "LockAspectRatio",
    "filename": "lock-aspect-ratio.svg",
    "category": "interface",
    "tags": [
      "interface",
      "link",
      "connection",
      "url",
      "hyperlink",
      "aspect"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path stroke-linejoin=\"round\" d=\"M10 10.5h1a2.5 2.5 0 0 0 0-5h-1m-4 0H5a2.5 2.5 0 0 0 0 5h1\"/><path d=\"M5 8h6\"/></g></svg>"
  },
  {
    "name": "ListFolder",
    "filename": "list-folder.svg",
    "category": "interface",
    "tags": [
      "interface",
      "folder",
      "directory",
      "folder-open",
      "folder-closed",
      "file",
      "catalog"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6.728 3.184 7.5 5.5h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-.999V3.5a1 1 0 0 1 1-.999h2.28a1 1 0 0 1 .948.684M7.5 5.5h-5\"/></g></svg>"
  },
  {
    "name": "Letter",
    "filename": "letter.svg",
    "category": "interface",
    "tags": [
      "interface",
      "typography",
      "text",
      "input",
      "font",
      "paragraph",
      "format"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 4.5v-1h8v1M7.5 3.5V11M6 11.5h3\"/></g></svg>"
  },
  {
    "name": "LayoutRow",
    "filename": "layout-row.svg",
    "category": "interface",
    "tags": [
      "interface",
      "stack",
      "layout",
      "row",
      "horizontal"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.5 7.5h10m-9-5h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1\"/></svg>"
  },
  {
    "name": "LayoutColumn",
    "filename": "layout-column.svg",
    "category": "interface",
    "tags": [
      "interface",
      "column",
      "vertical",
      "layout"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 2.5v10m-4-10h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1\"/></svg>"
  },
  {
    "name": "InteractionTriggerWhilePressing",
    "filename": "interaction-trigger-while-pressing.svg",
    "category": "interface",
    "tags": [
      "interface",
      "interaction",
      "dot"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 8.073c-.952.38-1.5.904-1.5 1.427 0 1 2 2 5 2s5-1 5-2c0-.523-.548-1.047-1.5-1.427\"/><path d=\"M6 6.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0\"/></g></svg>"
  },
  {
    "name": "InteractionTriggerWhileHovering",
    "filename": "interaction-trigger-while-hovering.svg",
    "category": "interface",
    "tags": [
      "interface",
      "interaction",
      "dot"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 9.5c0-1 2-2 5-2s5 1 5 2m-10 0c0 1 2 2 5 2s5-1 5-2m-10 0v2c0 1 2 2 5 2s5-1 5-2v-2M6 4.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0\"/></g></svg>"
  },
  {
    "name": "InteractionTriggerOnDrag",
    "filename": "interaction-trigger-on-drag.svg",
    "category": "interface",
    "tags": [
      "interface",
      "arrow",
      "interaction",
      "cursor"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m9.5 2.5-2 2m2-2h-2m2 0v2m-5 3-2 2m0 0v-2m0 2h2m0-5-2-2m0 0v2m0-2h2M6 6l2.5 6.5 1-3 3-1z\"/></svg>"
  },
  {
    "name": "InteractionTriggerOnClick",
    "filename": "interaction-trigger-on-click.svg",
    "category": "interface",
    "tags": [
      "interface",
      "interaction",
      "cursor",
      "arrow"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M5 2.5 5.5 4M4 5.5 2.5 5m6-1.5-1 1m-3 3-1 1M6 6l2.5 6.5 1-3 3-1z\"/></svg>"
  },
  {
    "name": "InteractionTriggerMouseUp",
    "filename": "interaction-trigger-mouse-up.svg",
    "category": "interface",
    "tags": [
      "interface",
      "interaction",
      "arrow",
      "upload"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 8.073c-.952.38-1.5.904-1.5 1.427 0 1 2 2 5 2s5-1 5-2c0-.523-.548-1.047-1.5-1.427M7.5 9.5V6m0 0L6 7.5M7.5 6 9 7.5M9 3l-.5 1M6 3l.5 1M10 5.5l1-.5m-6 .5L4 5\"/></g></svg>"
  },
  {
    "name": "InteractionTriggerMouseLeave",
    "filename": "interaction-trigger-mouse-leave.svg",
    "category": "interface",
    "tags": [
      "interface",
      "right",
      "arrow",
      "forward",
      "output",
      "export",
      "interaction"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11.5 9.5v1a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v1m-7 2h5m0 0-2-2m2 2-2 2\"/></svg>"
  },
  {
    "name": "InteractionTriggerMouseEnter",
    "filename": "interaction-trigger-mouse-enter.svg",
    "category": "interface",
    "tags": [
      "interface",
      "right",
      "arrow",
      "forward",
      "input",
      "import",
      "interaction"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.5 5.5v-1a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-1m2-2h5m0 0-2-2m2 2-2 2\"/></svg>"
  },
  {
    "name": "InteractionTriggerMouseDown",
    "filename": "interaction-trigger-mouse-down.svg",
    "category": "interface",
    "tags": [
      "interface",
      "interaction"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 8.073c-.952.38-1.5.904-1.5 1.427 0 1 2 2 5 2s5-1 5-2c0-.523-.548-1.047-1.5-1.427M7.5 6v3.5m0 0L9 8M7.5 9.5 6 8M9 3l-.5 1M6 3l.5 1M10 5.5l1-.5m-6 .5L4 5\"/></g></svg>"
  },
  {
    "name": "InteractionTriggerKeyGamepad",
    "filename": "interaction-trigger-key-gamepad.svg",
    "category": "interface",
    "tags": [
      "interface",
      "interaction"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8.5 2.5h-2a1 1 0 0 0-1 1v2h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2v-2a1 1 0 0 0-1-1\"/><path d=\"M6.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/></g></svg>"
  },
  {
    "name": "InteractionTriggerAfterDelay",
    "filename": "interaction-trigger-after-delay.svg",
    "category": "interface",
    "tags": [
      "interface",
      "interaction",
      "clock",
      "day",
      "time",
      "watch",
      "stopwatch"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6.5 2.5h2m-1 6L9 7m2.5 1.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0\"/></svg>"
  },
  {
    "name": "InteractionNone",
    "filename": "interaction-none.svg",
    "category": "interface",
    "tags": [
      "interface",
      "interaction",
      "circle",
      "cancel",
      "ban",
      "error",
      "slash",
      "wrong",
      "failure",
      "null"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m3.95 3.95 7.1 7.1M12.5 7.5a5 5 0 1 1-10 0 5 5 0 0 1 10 0\"/></svg>"
  },
  {
    "name": "InteractionActionSwapOverlay",
    "filename": "interaction-action-swap-overlay.svg",
    "category": "interface",
    "tags": [
      "interface",
      "arrow",
      "horizontal",
      "interaction"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 7.5h10m-10 0L4 6M2.5 7.5 4 9m8.5-1.5L11 6m1.5 1.5L11 9M2.5 2.5h3a1 1 0 0 1 1 1v2m0 4v2a1 1 0 0 1-1 1h-3m6-7v-2a1 1 0 0 1 1-1h3m-4 7v2a1 1 0 0 0 1 1h3\"/></g></svg>"
  },
  {
    "name": "InteractionActionSetVariableMode",
    "filename": "interaction-action-set-variable-mode.svg",
    "category": "interface",
    "tags": [
      "interface",
      "interaction",
      "photo",
      "image",
      "media",
      "picture",
      "gallery",
      "photography",
      "graphic",
      "paint",
      "palette",
      "color"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7.5 10.5a2 2 0 0 1-4 0v-6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1z\"/><path d=\"M10.35 8.5h1.15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6M5.5 10.5h.005\"/><path d=\"m7.5 6 1.15-1.15a1.2 1.2 0 0 1 1.702.002l.948.948a1.2 1.2 0 0 1 .013 1.717L6.95 11.9\"/></g></svg>"
  },
  {
    "name": "InteractionActionScrollTo",
    "filename": "interaction-action-scroll-to.svg",
    "category": "interface",
    "tags": [
      "interface",
      "interaction"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 0v7m4-3a5 5 0 0 1-8 0m3-2h2\"/></svg>"
  },
  {
    "name": "InteractionActionOpenOverlay",
    "filename": "interaction-action-open-overlay.svg",
    "category": "interface",
    "tags": [
      "interface",
      "interaction",
      "add",
      "plus",
      "create",
      "new"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 9.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M10.5 9.5h-2m1 1v-2\"/><path d=\"M10.5 6.5v-3a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3\"/></g></svg>"
  },
  {
    "name": "InteractionActionNavigateTo",
    "filename": "interaction-action-navigate-to.svg",
    "category": "interface",
    "tags": [
      "interface",
      "horizontal",
      "arrow",
      "right",
      "next",
      "forward",
      "interaction"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.5 7.5h-10m10 0-3-3m3 3-3 3\"/></svg>"
  },
  {
    "name": "InteractionActionConditional",
    "filename": "interaction-action-conditional.svg",
    "category": "interface",
    "tags": [
      "interface",
      "interaction",
      "branch",
      "split",
      "if",
      "logic",
      "git"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m3.5 10.5 2 2m0-2-2 2m7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M4.5 8.5v-1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1m-3-5v3\"/></g></svg>"
  },
  {
    "name": "InteractionActionCloseOverlay",
    "filename": "interaction-action-close-overlay.svg",
    "category": "interface",
    "tags": [
      "interface",
      "interaction",
      "remove",
      "delete",
      "close"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 2.5h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1M6 6l3 3m0-3L6 9\"/></g></svg>"
  },
  {
    "name": "InteractionActionChangeTo",
    "filename": "interaction-action-change-to.svg",
    "category": "interface",
    "tags": [
      "interface",
      "interaction",
      "loading",
      "loop",
      "process",
      "arrow",
      "refresh"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.5 8A4.5 4.5 0 0 1 8 3.5a4.88 4.88 0 0 1 3.37 1.37L12.5 6m0 0V3.5m0 2.5H10m2.5 2A4.5 4.5 0 0 1 8 12.5a4.88 4.88 0 0 1-3.37-1.37L3.5 10m0 0H6m-2.5 0v2.5\"/></svg>"
  },
  {
    "name": "InteractionActionBack",
    "filename": "interaction-action-back.svg",
    "category": "interface",
    "tags": [
      "interface",
      "interaction",
      "arrow",
      "back",
      "backward"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m4.5 4.5-2 2m0 0 2 2m-2-2h7a2 2 0 1 1 0 4H9\"/></svg>"
  },
  {
    "name": "ImageSmall",
    "filename": "image-small.svg",
    "category": "interface",
    "tags": [
      "interface",
      "image",
      "photo",
      "picture",
      "media",
      "gallery",
      "graphic"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" d=\"M2.5 4.5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2z\"/><path fill=\"currentColor\" d=\"M6 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0\"/><path stroke=\"currentColor\" stroke-linejoin=\"round\" d=\"m3 12 6.5-6.5 3 2\"/></svg>"
  },
  {
    "name": "HyperlinkBroken",
    "filename": "hyperlink-broken.svg",
    "category": "interface",
    "tags": [
      "interface",
      "link",
      "connection",
      "url",
      "hyperlink",
      "unlink",
      "remove",
      "broken"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path d=\"M7.5 4.5 8 4a2.121 2.121 0 1 1 3 3l-.5.5M7.5 10.5 7 11a2.121 2.121 0 0 1-3-3l.5-.5\"/><path stroke-linejoin=\"round\" d=\"M11 9.5h1.5m-3 1.5v1.5M5.5 4V2.5M4 5.5H2.5\"/></g></svg>"
  },
  {
    "name": "HugWidth",
    "filename": "hug-width.svg",
    "category": "interface",
    "tags": [
      "interface",
      "arrow",
      "horizontal",
      "collapse",
      "fold"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.5 7.5h4m0 0-2-2m2 2-2 2m9-2h-4m0 0 2 2m-2-2 2-2\"/></svg>"
  },
  {
    "name": "HugHeight",
    "filename": "hug-height.svg",
    "category": "interface",
    "tags": [
      "interface",
      "arrow",
      "vertical",
      "collapse",
      "fold"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 2.5v4m0 0 2-2m-2 2-2-2m2 9v-4m0 0-2 2m2-2 2 2\"/></svg>"
  },
  {
    "name": "House",
    "filename": "house.svg",
    "category": "interface",
    "tags": [
      "interface",
      "house",
      "home",
      "building"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m12.5 6.5-5-4-5 4v6.002c0 .552.448.998 1 .998h2v-4h4v4h2c.552 0 1-.446 1-.998z\"/></svg>"
  },
  {
    "name": "Hidden",
    "filename": "hidden.svg",
    "category": "interface",
    "tags": [
      "interface",
      "view",
      "watch",
      "see",
      "show",
      "visibility",
      "visible",
      "preview",
      "read"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 5.5c.627 2.34 3 4.077 5.5 4.077s4.873-1.738 5.5-4.077M8 10v1.5M11.5 8.5 13 10M4.5 8.5 3 10\"/></g></svg>"
  },
  {
    "name": "Grid",
    "filename": "grid.svg",
    "category": "interface",
    "tags": [
      "interface",
      "grid",
      "gallery",
      "boxes"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path d=\"M2.5 3.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM2.5 9.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM8.5 3.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM8.5 9.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z\"/></g></svg>"
  },
  {
    "name": "GapV",
    "filename": "gap-v.svg",
    "category": "interface",
    "tags": [
      "interface",
      "horizontal",
      "gap"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 2.5v2h-10v-2m0 10v-2h10v2\"/><path stroke-opacity=\".5\" d=\"M10.5 7.5h-6\"/></g></svg>"
  },
  {
    "name": "GapH",
    "filename": "gap-h.svg",
    "category": "interface",
    "tags": [
      "interface",
      "vertical",
      "gap"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 2.5h2v10h-2m10 0h-2v-10h2\"/><path stroke-opacity=\".5\" d=\"M7.5 4.5v6\"/></g></svg>"
  },
  {
    "name": "Frame",
    "filename": "frame.svg",
    "category": "interface",
    "tags": [
      "interface",
      "frame",
      "design",
      "tool"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.5 4.5h10m-10 6h10m-2-8v10m-6-10v10\"/></svg>"
  },
  {
    "name": "FlipVertical",
    "filename": "flip-vertical.svg",
    "category": "interface",
    "tags": [
      "interface",
      "arrow",
      "horizontal",
      "flip",
      "split"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.5 7.5h-10m8-5-3 3-3-3zm-6 10 3-3 3 3z\"/></svg>"
  },
  {
    "name": "FlipHorizontal",
    "filename": "flip-horizontal.svg",
    "category": "interface",
    "tags": [
      "interface",
      "arrow",
      "vertical",
      "flip",
      "split"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 2.5v10m-5-8 3 3-3 3zm10 6-3-3 3-3z\"/></svg>"
  },
  {
    "name": "FixedWidth",
    "filename": "fixed-width.svg",
    "category": "interface",
    "tags": [
      "interface",
      "horizontal",
      "maximize"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.5 7.5h10m-10 0v-2m0 2v2m10-2v2m0-2v-2\"/></svg>"
  },
  {
    "name": "FixedHeight",
    "filename": "fixed-height.svg",
    "category": "interface",
    "tags": [
      "interface",
      "vertical"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 2.5v10m0-10h2m-2 0h-2m2 10h-2m2 0h2\"/></svg>"
  },
  {
    "name": "FillWidth",
    "filename": "fill-width.svg",
    "category": "interface",
    "tags": [
      "interface",
      "arrow",
      "horizontal",
      "maximize",
      "move"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.5 7.5h10m-10 0 2-2m-2 2 2 2m8-2-2 2m2-2-2-2\"/></svg>"
  },
  {
    "name": "FillHeight",
    "filename": "fill-height.svg",
    "category": "interface",
    "tags": [
      "interface",
      "arrow",
      "vertical",
      "maximize",
      "move"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 2.5v10m0-10 2 2m-2-2-2 2m2 8-2-2m2 2 2-2\"/></svg>"
  },
  {
    "name": "FileSolid",
    "filename": "file-solid.svg",
    "category": "interface",
    "tags": [
      "interface",
      "solid",
      "folder",
      "directory",
      "folder-open",
      "folder-closed",
      "file",
      "catalog"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g fill=\"currentColor\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 2.5h2v4a1 1 0 0 0 1 1h4v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1\"/><path d=\"M8.5 5.5v-3l3 3z\"/></g></svg>"
  },
  {
    "name": "Embed",
    "filename": "embed.svg",
    "category": "interface",
    "tags": [
      "interface",
      "code",
      "app",
      "development",
      "web"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m4.5 5.5-2 2 2 2m6 0 2-2-2-2M9.5 3.5l-4 8\"/></g></svg>"
  },
  {
    "name": "Element",
    "filename": "element.svg",
    "category": "interface",
    "tags": [
      "interface",
      "square",
      "aspect",
      "rectangle",
      "shape",
      "boxes"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" d=\"M2.5 4.5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2z\"/></svg>"
  },
  {
    "name": "EffectsSettings",
    "filename": "effects-settings.svg",
    "category": "interface",
    "tags": [
      "interface",
      "effect",
      "theme",
      "weather",
      "sun"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 2.5v1m0 8v1M3.965 3.965l.705.705m5.66 5.66.705.705M2.5 7.5h1m8 0h1m-7.83 2.83-.705.705m7.07-7.07-.705.705M9.5 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0\"/></svg>"
  },
  {
    "name": "EffectLayerBlur",
    "filename": "effect-layer-blur.svg",
    "category": "interface",
    "tags": [
      "interface",
      "effect",
      "gradient",
      "opacity",
      "blur",
      "alpha"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g fill=\"currentColor\"><path d=\"M3.367 11.433a.2.2 0 1 1 0 .4.2.2 0 0 1 0-.4M3.367 9.497a.283.283 0 1 1 0 .566.283.283 0 0 1 0-.566M3.367 7.56a.367.367 0 1 1 0 .733.367.367 0 0 1 0-.733M3.367 5.707a.367.367 0 1 1 0 .733.367.367 0 0 1 0-.733M3.367 3.937a.283.283 0 1 1 0 .566.283.283 0 0 1 0-.566M3.367 2.166a.2.2 0 1 1 0 .4.2.2 0 0 1 0-.4M5.22 11.35a.283.283 0 1 1 0 .566.283.283 0 0 1 0-.566M5.22 9.372a.408.408 0 1 1 0 .816.408.408 0 0 1 0-.816M5.22 7.394a.532.532 0 1 1 0 1.065.532.532 0 0 1 0-1.065M5.22 5.54a.532.532 0 1 1 0 1.066.532.532 0 0 1 0-1.065M5.22 3.812a.408.408 0 1 1 0 .816.408.408 0 0 1 0-.816M5.22 2.084a.283.283 0 1 1 0 .566.283.283 0 0 1 0-.566M7.073 11.267a.367.367 0 1 1 0 .733.367.367 0 0 1 0-.733M7.073 9.248a.532.532 0 1 1 0 1.064.532.532 0 0 1 0-1.064M7.073 7.228a.699.699 0 1 1 0 1.398.699.699 0 0 1 0-1.398M7.073 5.374a.699.699 0 1 1 0 1.398.699.699 0 0 1 0-1.398M7.073 3.688a.532.532 0 1 1 0 1.064.532.532 0 0 1 0-1.064M7.073 2a.367.367 0 1 1 0 .733.367.367 0 0 1 0-.733M8.927 11.267a.367.367 0 1 1 0 .733.367.367 0 0 1 0-.733M8.927 9.248a.532.532 0 1 1 0 1.064.532.532 0 0 1 0-1.064M8.927 7.228a.699.699 0 1 1 0 1.398.699.699 0 0 1 0-1.398M8.927 5.374a.699.699 0 1 1 0 1.398.699.699 0 0 1 0-1.398M8.927 3.688a.532.532 0 1 1 0 1.064.532.532 0 0 1 0-1.064M8.927 2a.367.367 0 1 1 0 .733.367.367 0 0 1 0-.733M10.78 11.35a.283.283 0 1 1 0 .567.283.283 0 0 1 0-.567M10.78 9.372a.408.408 0 1 1 0 .816.408.408 0 0 1 0-.816M10.78 7.394a.532.532 0 1 1 0 1.065.532.532 0 0 1 0-1.065M10.78 5.54a.532.532 0 1 1 0 1.066.532.532 0 0 1 0-1.065M10.78 3.812a.408.408 0 1 1 0 .816.408.408 0 0 1 0-.816M10.78 2.084a.283.283 0 1 1 0 .566.283.283 0 0 1 0-.566M12.634 11.433a.2.2 0 1 1 0 .4.2.2 0 0 1 0-.4M12.634 9.497a.283.283 0 1 1 0 .566.283.283 0 0 1 0-.566M12.633 7.56a.367.367 0 1 1 0 .733.367.367 0 0 1 0-.733M12.633 5.707a.367.367 0 1 1 0 .733.367.367 0 0 1 0-.733M12.634 3.937a.283.283 0 1 1 0 .566.283.283 0 0 1 0-.566M12.634 2.166a.2.2 0 1 1 0 .4.2.2 0 0 1 0-.4\"/></g></svg>"
  },
  {
    "name": "EffectInnerShadow",
    "filename": "effect-inner-shadow.svg",
    "category": "interface",
    "tags": [
      "interface",
      "effect",
      "shadow"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11.6 2.5H4.4a.9.9 0 0 0-.9.9v7.2a.9.9 0 0 0 .9.9h7.2a.9.9 0 0 0 .9-.9V3.4a.9.9 0 0 0-.9-.9\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M13 10.611c0 .753-.61 1.364-1.364 1.364H4.364C3.61 11.975 3 11.365 3 10.61V9h10z\"/></svg>"
  },
  {
    "name": "EffectDropShadow",
    "filename": "effect-drop-shadow.svg",
    "category": "interface",
    "tags": [
      "interface",
      "effect",
      "shadow"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M13 12.636C13 13.39 12.39 14 11.636 14H4.364C3.61 14 3 13.39 3 12.636v-2.11l1.364.93h7.272l1.364-.93z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11.6 2.5H4.4a.9.9 0 0 0-.9.9v7.2a.9.9 0 0 0 .9.9h7.2a.9.9 0 0 0 .9-.9V3.4a.9.9 0 0 0-.9-.9\"/></svg>"
  },
  {
    "name": "EffectBackgroundBlur",
    "filename": "effect-background-blur.svg",
    "category": "interface",
    "tags": [
      "interface",
      "effect",
      "gradient",
      "opacity",
      "blur",
      "alpha"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11.6 2.5H4.4a.9.9 0 0 0-.9.9v7.2a.9.9 0 0 0 .9.9h7.2a.9.9 0 0 0 .9-.9V3.4a.9.9 0 0 0-.9-.9\"/><path fill=\"currentColor\" d=\"M5.22 4.47a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5M5.22 6.573a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M5.22 8.427a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M5.22 10.03a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5M7.073 4.72a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M7.073 6.823a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7.073 8.677a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7.073 10.28a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8.927 4.72a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8.927 6.823a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M8.927 8.677a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M8.927 10.28a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M10.78 4.47a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5M10.78 6.573a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M10.78 8.427a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M10.78 10.03a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5\"/></svg>"
  },
  {
    "name": "EditObject",
    "filename": "edit-object.svg",
    "category": "interface",
    "tags": [
      "interface",
      "shape",
      "square",
      "line",
      "group",
      "path"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path d=\"M2.5 3.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM10.5 3.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM2.5 11.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM10.5 11.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM4.5 3.5h6M11.5 4.5v6m-1 1h-6m-1-1v-6\"/></g></svg>"
  },
  {
    "name": "DuplicateGroup",
    "filename": "duplicate-group.svg",
    "category": "interface",
    "tags": [
      "interface",
      "add",
      "plus",
      "create",
      "new",
      "paste",
      "clone",
      "copy",
      "duplicate"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 5.5h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1\"/><path d=\"M5.5 10.5h-2a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M11.5 9.5h-4m2 2v-4\"/></g></svg>"
  },
  {
    "name": "Dimensional",
    "filename": "dimensional.svg",
    "category": "interface",
    "tags": [
      "interface",
      "3d",
      "axis",
      "shape",
      "cube"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 8.5v5m0-5-5-3m5 3 5-3m-5 8-5-3v-5m5 8 5-3v-5m-10 0 5-3 5 3\"/></svg>"
  },
  {
    "name": "DimensionalTransforms",
    "filename": "dimensional-transforms.svg",
    "category": "interface",
    "tags": [
      "interface",
      "arrow",
      "3d",
      "axis"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 3.5v8h8M4.5 11.5l3-3\"/><path d=\"m3 5 1.5-1.5L6 5M11 10l1.5 1.5L11 13\"/></g></svg>"
  },
  {
    "name": "ComponentSolid",
    "filename": "component-solid.svg",
    "category": "interface",
    "tags": [
      "interface",
      "solid",
      "component",
      "widget"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g fill=\"currentColor\"><path d=\"M5.784 4.686a.97.97 0 0 1 0-1.372l1.03-1.03a.97.97 0 0 1 1.372 0l1.03 1.03a.97.97 0 0 1 0 1.372l-1.03 1.03a.97.97 0 0 1-1.372 0zM5.784 11.686a.97.97 0 0 1 0-1.372l1.03-1.03a.97.97 0 0 1 1.372 0l1.03 1.03a.97.97 0 0 1 0 1.372l-1.03 1.03a.97.97 0 0 1-1.372 0zM10.314 5.784a.97.97 0 0 1 1.372 0l1.03 1.03a.97.97 0 0 1 0 1.372l-1.03 1.03a.97.97 0 0 1-1.372 0l-1.03-1.03a.97.97 0 0 1 0-1.372zM3.314 5.784a.97.97 0 0 1 1.372 0l1.03 1.03a.97.97 0 0 1 0 1.372l-1.03 1.03a.97.97 0 0 1-1.372 0l-1.03-1.03a.97.97 0 0 1 0-1.372z\"/></g></svg>"
  },
  {
    "name": "ComponentOutline",
    "filename": "component-outline.svg",
    "category": "interface",
    "tags": [
      "interface",
      "component",
      "widget"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linejoin=\"round\"><path d=\"M9.646 4.146 8.354 2.854a.5.5 0 0 0-.708 0L6.354 4.146a.5.5 0 0 0 0 .708l1.292 1.292a.5.5 0 0 0 .708 0l1.292-1.292a.5.5 0 0 0 0-.708ZM6.146 7.646 4.854 6.354a.5.5 0 0 0-.708 0L2.854 7.646a.5.5 0 0 0 0 .708l1.292 1.292a.5.5 0 0 0 .708 0l1.292-1.292a.5.5 0 0 0 0-.708ZM13.146 7.646l-1.293-1.292a.5.5 0 0 0-.707 0L9.854 7.646a.5.5 0 0 0 0 .708l1.292 1.292a.5.5 0 0 0 .707 0l1.293-1.292a.5.5 0 0 0 0-.708ZM9.646 11.146 8.354 9.854a.5.5 0 0 0-.708 0l-1.292 1.292a.5.5 0 0 0 0 .707l1.292 1.293a.5.5 0 0 0 .708 0l1.292-1.293a.5.5 0 0 0 0-.707Z\"/></g></svg>"
  },
  {
    "name": "ColorTypeSolid",
    "filename": "color-type-solid.svg",
    "category": "interface",
    "tags": [
      "interface",
      "color"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path d=\"M2.5 4.5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2z\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M10 4.5H5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5Z\"/></g></svg>"
  },
  {
    "name": "ColorTypeImage",
    "filename": "color-type-image.svg",
    "category": "interface",
    "tags": [
      "interface",
      "color",
      "image",
      "photo",
      "picture",
      "media",
      "gallery",
      "graphic"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path d=\"M2.5 4.5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2z\"/><path stroke-linejoin=\"round\" d=\"m2.5 10 3.146-3.146a.5.5 0 0 1 .708 0L11.5 12\"/><path d=\"M8.5 5.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z\"/></g></svg>"
  },
  {
    "name": "ColorTypeGradient",
    "filename": "color-type-gradient.svg",
    "category": "interface",
    "tags": [
      "interface",
      "color",
      "gradient",
      "opacity",
      "blur",
      "alpha"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path d=\"M2.5 4.5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 4.5h.005m-.005 2h.005m-.005 4h.005m-.005-2h.005\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-opacity=\".75\" d=\"M6.5 4.5h.005m-.005 2h.005m-.005 4h.005m-.005-2h.005\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-opacity=\".5\" d=\"M8.5 4.5h.005m-.005 2h.005m-.005 4h.005m-.005-2h.005\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-opacity=\".25\" d=\"M10.5 4.5h.005m-.005 2h.005m-.005 4h.005m-.005-2h.005\"/></g></svg>"
  },
  {
    "name": "ColorOpacity",
    "filename": "color-opacity.svg",
    "category": "interface",
    "tags": [
      "interface",
      "color",
      "opacity",
      "alpha"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11.5 2.5h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1\"/><path fill=\"currentColor\" fill-opacity=\".5\" d=\"M3 3h3v3H3zM9 3h3v3H9zM6 6h3v3H6zM3 9h3v3H3zM9 9h3v3H9z\"/></svg>"
  },
  {
    "name": "ColorAlpha",
    "filename": "color-alpha.svg",
    "category": "interface",
    "tags": [
      "interface",
      "color",
      "opacity",
      "alpha"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" d=\"M7.5 12.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z\"/><path fill=\"currentColor\" fill-opacity=\".5\" d=\"M3.964 11.036a5 5 0 1 0 7.072-7.072L7.5 7.5z\"/></svg>"
  },
  {
    "name": "Code",
    "filename": "code.svg",
    "category": "interface",
    "tags": [
      "interface",
      "arrow",
      "enlarge",
      "horizontal",
      "move",
      "code"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M5 5 2.5 7.5 5 10m5 0 2.5-2.5L10 5\"/></svg>"
  },
  {
    "name": "Centralize",
    "filename": "centralize.svg",
    "category": "interface",
    "tags": [
      "interface",
      "arrow"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m12.5 2.5-3 3m0 0H12m-2.5 0V3m-7 9.5 3-3m0 0H3m2.5 0V12m-3-9.5 3 3m0 0V3m0 2.5H3m9.5 7-3-3m0 0V12m0-2.5H12\"/></svg>"
  },
  {
    "name": "Border",
    "filename": "border.svg",
    "category": "interface",
    "tags": [
      "interface",
      "border",
      "divider",
      "alignment"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.5 3.5h10\"/><path fill=\"currentColor\" d=\"M12.5 6.5h-10v1h10zM12.5 10.5h-10v2h10z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.5 6.5h-10v1h10zM12.5 10.5h-10v2h10z\"/></svg>"
  },
  {
    "name": "BorderT",
    "filename": "border-t.svg",
    "category": "interface",
    "tags": [
      "interface",
      "border",
      "top",
      "divider",
      "alignment"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 2.5h10\"/><path stroke-opacity=\".5\" d=\"M2.5 4.5v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7\"/></g></svg>"
  },
  {
    "name": "BorderSolid",
    "filename": "border-solid.svg",
    "category": "interface",
    "tags": [
      "interface",
      "border",
      "divider",
      "alignment"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.5 7.5h10\"/></svg>"
  },
  {
    "name": "BorderR",
    "filename": "border-r.svg",
    "category": "interface",
    "tags": [
      "interface",
      "border",
      "right",
      "divider",
      "alignment"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 2.5v10\"/><path stroke-opacity=\".5\" d=\"M10.5 2.5h-7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h7\"/></g></svg>"
  },
  {
    "name": "BorderPer",
    "filename": "border-per.svg",
    "category": "interface",
    "tags": [
      "interface",
      "border",
      "divider",
      "alignment"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 2.5h6m-8 2v6m2 2h6m2-8v6\"/></svg>"
  },
  {
    "name": "BorderL",
    "filename": "border-l.svg",
    "category": "interface",
    "tags": [
      "interface",
      "border",
      "left",
      "divider",
      "alignment"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 12.5v-10\"/><path stroke-opacity=\".5\" d=\"M4.5 12.5h7a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-7\"/></g></svg>"
  },
  {
    "name": "BorderDouble",
    "filename": "border-double.svg",
    "category": "interface",
    "tags": [
      "interface",
      "border",
      "divider",
      "alignment"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 6.5h10M2.5 8.5h10\"/></g></svg>"
  },
  {
    "name": "BorderDotted",
    "filename": "border-dotted.svg",
    "category": "interface",
    "tags": [
      "interface",
      "border",
      "divider",
      "alignment"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.5 7.5h.005m1.995 0h.005m1.995 0h.005m1.995 0h.005m1.995 0h.005m1.995 0h.005\"/></svg>"
  },
  {
    "name": "BorderDash",
    "filename": "border-dash.svg",
    "category": "interface",
    "tags": [
      "interface",
      "border",
      "divider",
      "alignment"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.5 7.5h2m2 0h2m2 0h2\"/></svg>"
  },
  {
    "name": "BorderB",
    "filename": "border-b.svg",
    "category": "interface",
    "tags": [
      "interface",
      "border",
      "bottom",
      "divider",
      "alignment"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 12.5h-10\"/><path stroke-opacity=\".5\" d=\"M12.5 10.5v-7a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v7\"/></g></svg>"
  },
  {
    "name": "BooleanXor",
    "filename": "boolean-xor.svg",
    "category": "interface",
    "tags": [
      "interface",
      "boolean",
      "group",
      "path"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g fill=\"currentColor\" fill-opacity=\".25\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6.5 12.5h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-2v3a1 1 0 0 1-1 1h-3v2a1 1 0 0 0 1 1\"/><path d=\"M8.5 2.5h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2v-3a1 1 0 0 1 1-1h3v-2a1 1 0 0 0-1-1\"/></g></svg>"
  },
  {
    "name": "BooleanUnion",
    "filename": "boolean-union.svg",
    "category": "interface",
    "tags": [
      "interface",
      "boolean",
      "group",
      "path"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-opacity=\".25\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 2.5h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3v-3a1 1 0 0 0-1-1\"/></svg>"
  },
  {
    "name": "BooleanIntersection",
    "filename": "boolean-intersection.svg",
    "category": "interface",
    "tags": [
      "interface",
      "boolean",
      "group",
      "path"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6.5 12.5h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-2v3a1 1 0 0 1-1 1h-3v2a1 1 0 0 0 1 1\"/><path d=\"M8.5 2.5h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2v-3a1 1 0 0 1 1-1h3v-2a1 1 0 0 0-1-1\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M6.5 5.5h3v3a1 1 0 0 1-1 1h-3v-3a1 1 0 0 1 1-1\"/></g></svg>"
  },
  {
    "name": "BooleanDifference",
    "filename": "boolean-difference.svg",
    "category": "interface",
    "tags": [
      "interface",
      "boolean",
      "group",
      "path"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6.5 12.5h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M2.5 3.5v5a1 1 0 0 0 1 1h2v-3a1 1 0 0 1 1-1h3v-2a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1\"/></g></svg>"
  },
  {
    "name": "ArtificialIntelligence",
    "filename": "artificial-intelligence.svg",
    "category": "interface",
    "tags": [
      "interface",
      "ai",
      "integration",
      "extension",
      "sparkle",
      "magic"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linejoin=\"round\"><path d=\"M8 2.5C8 5.814 10.186 8 13.5 8 10.186 8 8 10.186 8 13.5 8 10.186 5.814 8 2.5 8 5.814 8 8 5.814 8 2.5Z\"/><path stroke-linecap=\"round\" d=\"M10.5 4.5h2M3.5 11.5h2M11.5 3.5v2M4.5 10.5v2\"/></g></svg>"
  },
  {
    "name": "ApplyVariable",
    "filename": "apply-variable.svg",
    "category": "interface",
    "tags": [
      "interface",
      "variable"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path d=\"M7.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM2.5 7.5h5\"/><path stroke-linejoin=\"round\" d=\"m4 10 4.5 2.5L13 10V5L8.5 2.5 4 5\"/></g></svg>"
  },
  {
    "name": "ViewSmall",
    "filename": "view-small.svg",
    "category": "design",
    "tags": [
      "view",
      "watch",
      "see",
      "show",
      "visibility",
      "visible",
      "preview",
      "read"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.638 8.528a1.08 1.08 0 0 1 0-1.056C3.308 6.283 5.179 3.5 8 3.5s4.692 2.783 5.362 3.972a1.08 1.08 0 0 1 0 1.056C12.692 9.717 10.821 12.5 8 12.5S3.308 9.717 2.638 8.528\"/><path d=\"M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4\"/></g></svg>"
  },
  {
    "name": "Version",
    "filename": "version.svg",
    "category": "design",
    "tags": [
      "history",
      "portfolio",
      "versions",
      "machine",
      "backup",
      "carousel"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linejoin=\"round\"><path d=\"m7.5 1.5-6 3 6 3 6-3z\"/><path stroke-linecap=\"round\" d=\"m1.5 7.5 6 3 6-3M1.5 10.5l6 3 6-3\"/></g></svg>"
  },
  {
    "name": "TagSmall",
    "filename": "tag-small.svg",
    "category": "design",
    "tags": [
      "label",
      "badge",
      "mark",
      "ticket",
      "tag"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.5 2.5h5l5.561 5.561a1.5 1.5 0 0 1 0 2.121l-2.879 2.879a1.5 1.5 0 0 1-2.121 0L2.5 7.5z\"/></svg>"
  },
  {
    "name": "Swatchbook",
    "filename": "swatchbook.svg",
    "category": "design",
    "tags": [
      "photo",
      "image",
      "media",
      "picture",
      "gallery",
      "photography",
      "graphic",
      "paint",
      "palette",
      "color"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 2.5v9a2 2 0 1 0 4 0v-9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1\"/><path d=\"M6.5 6.672 9.621 3.55a1 1 0 0 1 1.415 0l1.414 1.414a1 1 0 0 1 0 1.415l-6.95 6.95\"/><path d=\"M9.5 9.5h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-8M4.5 11.5h.005\"/></g></svg>"
  },
  {
    "name": "SwatchbookAi",
    "filename": "swatchbook-ai.svg",
    "category": "design",
    "tags": [
      "photo",
      "image",
      "media",
      "picture",
      "gallery",
      "photography",
      "graphic",
      "ai",
      "color",
      "palette",
      "paint"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"currentColor\" d=\"M2.5 2.5v9a2 2 0 1 0 4 0v-9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1M6.5 6.672 9.621 3.55a1 1 0 0 1 1.415 0l1.414 1.414a1 1 0 0 1 0 1.415l-.293.293M8.5 13.5h-4M4.5 11.5h.005\"/><path stroke=\"#AB0A83\" d=\"M8.5 11.5c1.5 0 3-1.5 3-3 0 1.5 1.5 3 3 3-1.5 0-3 1.5-3 3 0-1.5-1.5-3-3-3\"/></g></svg>"
  },
  {
    "name": "Show",
    "filename": "show.svg",
    "category": "design",
    "tags": [
      "view",
      "watch",
      "see",
      "show",
      "visibility",
      "visible",
      "preview",
      "read"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5.5 7.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/><path d=\"M7.5 5.5a2 2 0 0 1-2 2\"/><path d=\"M7.5 3.5c-3.185 0-5.102 2.536-5.75 3.57a.8.8 0 0 0 0 .86c.648 1.034 2.565 3.57 5.75 3.57s5.102-2.536 5.75-3.57a.8.8 0 0 0 0-.86C12.603 6.035 10.686 3.5 7.5 3.5\"/></g></svg>"
  },
  {
    "name": "Rename",
    "filename": "rename.svg",
    "category": "design",
    "tags": [
      "edit",
      "pencil",
      "create",
      "draw",
      "writer",
      "design"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8.5 2.5h1m0 0h1m-1 0v11m-1 0h2M7.5 4.5h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5m4-7h1a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-1\"/></g></svg>"
  },
  {
    "name": "Printer",
    "filename": "printer.svg",
    "category": "design",
    "tags": [
      "fax",
      "device",
      "office"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.5 10.5h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1m-9-7v-1a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1m-1 6v3a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1\"/></svg>"
  },
  {
    "name": "MaximizeAreaSmall",
    "filename": "maximize-area-small.svg",
    "category": "design",
    "tags": [
      "preview",
      "zoom",
      "expand",
      "fullscreen",
      "gallery"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.5 2.5H12A1.5 1.5 0 0 1 13.5 4v1.5M5.5 2.5H4A1.5 1.5 0 0 0 2.5 4v1.5M10.5 13.5H12a1.5 1.5 0 0 0 1.5-1.5v-1.5M5.5 13.5H4A1.5 1.5 0 0 1 2.5 12v-1.5M8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5\"/></g></svg>"
  },
  {
    "name": "Image",
    "filename": "image.svg",
    "category": "design",
    "tags": [
      "photo",
      "image",
      "media",
      "picture",
      "gallery",
      "photography",
      "graphic"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"/><path d=\"M11.5 1.5h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2\"/><path d=\"M13.5 9.5 10 6l-4 4-1.5-1.5-3 3\"/></g></svg>"
  },
  {
    "name": "ImageSettings",
    "filename": "image-settings.svg",
    "category": "design",
    "tags": [
      "photo",
      "image",
      "media",
      "picture",
      "gallery",
      "photography",
      "graphic",
      "system",
      "settings",
      "gear",
      "cog",
      "tools",
      "control",
      "preferences"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 13.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M11.5 9.5v-1m0 5v1m2-3h1m-5 0h-1m4.414-1.414.707-.707m-3.535 3.535-.707.707m3.535-.707.707.707m-3.535-3.535-.707-.707M4.5 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"/><path d=\"M12.5 6.5v-3a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3\"/><path d=\"m2 11 2.5-2.5L6 10l3.5-3.5\"/></g></svg>"
  },
  {
    "name": "ImageRemove",
    "filename": "image-remove.svg",
    "category": "design",
    "tags": [
      "photo",
      "image",
      "media",
      "picture",
      "gallery",
      "photography",
      "graphic",
      "remove",
      "delete",
      "close"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"/><path d=\"M12.5 8.5v-5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h5M10.5 10.5l4 4m0-4-4 4\"/><path d=\"m2 11 2.5-2.5L6 10l3.5-3.5\"/></g></svg>"
  },
  {
    "name": "ImageNew",
    "filename": "image-new.svg",
    "category": "design",
    "tags": [
      "image",
      "photo",
      "picture",
      "media",
      "gallery",
      "graphic",
      "add",
      "plus",
      "create",
      "new"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M14.5 3.5h-4m2 2v-4M2 13l2.5-2.5L6 12l3.5-3.5\"/><path d=\"M12.5 8.5v4a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h4\"/></g></svg>"
  },
  {
    "name": "ImageImport",
    "filename": "image-import.svg",
    "category": "design",
    "tags": [
      "photo",
      "image",
      "media",
      "picture",
      "gallery",
      "photography",
      "graphic",
      "right",
      "input",
      "import"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"/><path d=\"M12.5 8.5v-5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2\"/><path d=\"m2 11 2.5-2.5L6 10l3.5-3.5M12.5 10.5l2 2m0 0-2 2m2-2h-7\"/></g></svg>"
  },
  {
    "name": "ImageExport",
    "filename": "image-export.svg",
    "category": "design",
    "tags": [
      "photo",
      "image",
      "media",
      "picture",
      "gallery",
      "photography",
      "graphic",
      "right",
      "arrow",
      "export"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m6.5 7.5 2 2m0 0-2 2m2-2h-7M5.5 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M14.5 10.5 11 7l-1 1\"/><path d=\"M2.5 7.5v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2\"/></g></svg>"
  },
  {
    "name": "ImageDuplicate",
    "filename": "image-duplicate.svg",
    "category": "design",
    "tags": [
      "photo",
      "image",
      "media",
      "picture",
      "gallery",
      "photography",
      "graphic",
      "duplicate",
      "copy"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m6 9 4.5-4.5 3 3\"/><path d=\"M12.5 1.5h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1\"/><path d=\"M3.25 6.5H2.5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-.75M7.5 3.5h.005\"/></g></svg>"
  },
  {
    "name": "ImageDelete",
    "filename": "image-delete.svg",
    "category": "design",
    "tags": [
      "photo",
      "image",
      "media",
      "picture",
      "gallery",
      "photography",
      "graphic",
      "remove",
      "delete",
      "close"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path stroke-linejoin=\"round\" d=\"M4.5 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"/><path stroke-linejoin=\"round\" d=\"M12.5 5.5v-2a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3M2 11l2.5-2.5\"/><path d=\"M14.5 9.5h-7m1 0v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4\"/><path stroke-linejoin=\"round\" d=\"M9.5 9.5v-2h3v2\"/></g></svg>"
  },
  {
    "name": "ImageAi",
    "filename": "image-ai.svg",
    "category": "design",
    "tags": [
      "image",
      "photo",
      "picture",
      "media",
      "gallery",
      "graphic",
      "ai"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"currentColor\" d=\"M4.5 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"/><path stroke=\"currentColor\" d=\"M12.5 8.5v4a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h4\"/><path stroke=\"currentColor\" d=\"m2 13 2.5-2.5L6 12l3.5-3.5\"/><path fill=\"#AB0A83\" stroke=\"#AB0A83\" d=\"M10.5 3.5a2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0-2 2 2 2 0 0 0-2-2\"/></g></svg>"
  },
  {
    "name": "ImageAdd",
    "filename": "image-add.svg",
    "category": "design",
    "tags": [
      "photo",
      "image",
      "media",
      "picture",
      "gallery",
      "photography",
      "graphic",
      "add",
      "plus",
      "create",
      "new"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"/><path d=\"M12.5 8.5v-5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h5M14.5 12.5h-4m2 2v-4\"/><path d=\"m2 11 2.5-2.5L6 10l3.5-3.5\"/></g></svg>"
  },
  {
    "name": "Hide",
    "filename": "hide.svg",
    "category": "design",
    "tags": [
      "view",
      "watch",
      "see",
      "show",
      "visibility",
      "visible",
      "preview",
      "read"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7.5 5.5c.512 0 1.024.195 1.414.586S9.5 6.988 9.5 7.5m-2 2a2 2 0 0 1-1.414-.586A2 2 0 0 1 5.5 7.5\"/><path d=\"M3 5.5a9 9 0 0 0-1.25 1.568.8.8 0 0 0 0 .863C2.397 8.964 4.314 11.5 7.5 11.5a5.8 5.8 0 0 0 1.5-.196M12 9.5a9 9 0 0 0 1.25-1.568.8.8 0 0 0 0-.863C12.603 6.036 10.686 3.5 7.5 3.5c-.536 0-1.036.072-1.5.196M2.5 2.5l10 10\"/></g></svg>"
  },
  {
    "name": "FillColor",
    "filename": "fill-color.svg",
    "category": "design",
    "tags": [
      "image",
      "media",
      "picture",
      "gallery",
      "photo",
      "photography",
      "graphic",
      "color",
      "palette",
      "paint"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M13.5 12.5a1 1 0 0 1-2 0c0-.8 1-2 1-2s1 1.2 1 2M6.5 6.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/><path d=\"m3.5 2.5 3 3m7 7a1 1 0 0 1-2 0c0-.8 1-2 1-2s1 1.2 1 2m-6-11L2.207 6.793a1 1 0 0 0 0 1.414l4.086 4.086a1 1 0 0 0 1.414 0L13 7zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2\"/></g></svg>"
  },
  {
    "name": "ExpandSmall",
    "filename": "expand-small.svg",
    "category": "design",
    "tags": [
      "preview",
      "zoom",
      "expand",
      "fullscreen",
      "gallery"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.5 2.5H12A1.5 1.5 0 0 1 13.5 4v1.5M5.5 2.5H4A1.5 1.5 0 0 0 2.5 4v1.5M10.5 13.5H12a1.5 1.5 0 0 0 1.5-1.5v-1.5M5.5 13.5H4A1.5 1.5 0 0 1 2.5 12v-1.5\"/></g></svg>"
  },
  {
    "name": "Edit",
    "filename": "edit.svg",
    "category": "design",
    "tags": [
      "edit",
      "pencil",
      "create",
      "draw",
      "writer",
      "design"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m11.793 3.793-.586-.586a1 1 0 0 0-1.414 0L2.5 10.5l-1 3 3-1 7.293-7.293a1 1 0 0 0 0-1.414M8.5 4.5l2 2M6.5 13.5h7\"/></g></svg>"
  },
  {
    "name": "EditSmall",
    "filename": "edit-small.svg",
    "category": "design",
    "tags": [
      "edit",
      "pencil",
      "create",
      "draw",
      "writer",
      "design"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 13.5h11M10.5 2.5l2 2-6 6-3 1 1-3z\"/></g></svg>"
  },
  {
    "name": "EditReadonly",
    "filename": "edit-readonly.svg",
    "category": "design",
    "tags": [
      "edit",
      "pencil",
      "create",
      "draw",
      "writer",
      "design"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m5.5 8.5-2 2-1 3 3-1 2-2m1-5 2.293-2.293a1 1 0 0 1 1.414 0l.586.586a1 1 0 0 1 0 1.414L10.5 7.5M9.5 4.5l2 2M2.5 2.5l11 11\"/></g></svg>"
  },
  {
    "name": "Duplicate",
    "filename": "duplicate.svg",
    "category": "design",
    "tags": [
      "paste",
      "clone",
      "copy",
      "duplicate"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7.5 1.5h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1M8.5 11.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h1\"/></g></svg>"
  },
  {
    "name": "DuplicateNew",
    "filename": "duplicate-new.svg",
    "category": "design",
    "tags": [
      "paste",
      "clone",
      "copy",
      "duplicate",
      "add",
      "plus",
      "create",
      "new"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><rect width=\"9\" height=\"9\" x=\"5\" y=\"5\" rx=\"1.5\"/><path d=\"M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.5 8v1.5m0 1.5V9.5m0 0H8m1.5 0H11\"/></g></svg>"
  },
  {
    "name": "DeleteKeySmall",
    "filename": "delete-key-small.svg",
    "category": "design",
    "tags": [
      "backspace",
      "remove",
      "delete",
      "close"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 3.5H6.5L2.5 8l4 4.5H12a1.5 1.5 0 0 0 1.5-1.5V5A1.5 1.5 0 0 0 12 3.5\"/></svg>"
  },
  {
    "name": "CopySmall",
    "filename": "copy-small.svg",
    "category": "design",
    "tags": [
      "paste",
      "clone",
      "copy",
      "duplicate"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path d=\"M2.5 3.5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1z\"/><path d=\"M10.5 5.5h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2\"/></g></svg>"
  },
  {
    "name": "CollapseLayers",
    "filename": "collapse-layers.svg",
    "category": "design",
    "tags": [
      "collapse",
      "expand",
      "details",
      "toggle",
      "accordion",
      "more",
      "less",
      "unfold"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path stroke-linejoin=\"round\" d=\"m9.5 12.5 2-2 2 2M9.5 3.5l2 2 2-2\"/><path d=\"M2.5 3.5h5m-5 3h5m-5 3h5m-5 3h5\"/></g></svg>"
  },
  {
    "name": "UsersSmall",
    "filename": "users-small.svg",
    "category": "collaborators",
    "tags": [
      "user",
      "account",
      "profile",
      "avatar",
      "person",
      "human",
      "member",
      "organization",
      "group",
      "team"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 12.5v-1a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1M6.5 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M13 12.5v-1a2 2 0 0 0-1.5-1.935M10 3.565a2 2 0 0 1 0 3.875\"/></g></svg>"
  },
  {
    "name": "UserSmall",
    "filename": "user-small.svg",
    "category": "collaborators",
    "tags": [
      "user",
      "account",
      "profile",
      "avatar",
      "person",
      "human",
      "member"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 12.5v-1a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v1M8 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4\"/></g></svg>"
  },
  {
    "name": "UserSettingsSmall",
    "filename": "user-settings-small.svg",
    "category": "collaborators",
    "tags": [
      "user",
      "account",
      "profile",
      "avatar",
      "person",
      "human",
      "member",
      "control",
      "preferences",
      "system"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M6.5 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7 9.5H5a2 2 0 0 0-2 2v1M12.85 10.2l-.45-.15M9.6 8.95l-.45-.15M10.3 11.35l.15-.45M11.55 8.1l.15-.45M11.8 11.35l-.2-.5M10.4 8.15l-.2-.5M9.15 10.3l.5-.2M12.35 8.9l.5-.2\"/></g></svg>"
  },
  {
    "name": "UserSearchSmall",
    "filename": "user-search-small.svg",
    "category": "collaborators",
    "tags": [
      "user",
      "account",
      "profile",
      "avatar",
      "person",
      "human",
      "member",
      "search",
      "magnifier",
      "glass",
      "view",
      "lookup"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7.15 9.5H5.5a2 2 0 0 0-2 2v1M10.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M12.5 12.5l-.95-.95\"/></g></svg>"
  },
  {
    "name": "UserRemoveSmall",
    "filename": "user-remove-small.svg",
    "category": "collaborators",
    "tags": [
      "user",
      "account",
      "profile",
      "avatar",
      "person",
      "human",
      "member",
      "clear",
      "remove",
      "delete"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 12.5v-1a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1M6.5 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M13 7.5h-3\"/></g></svg>"
  },
  {
    "name": "UserDeleteSmall",
    "filename": "user-delete-small.svg",
    "category": "collaborators",
    "tags": [
      "user",
      "account",
      "profile",
      "avatar",
      "person",
      "human",
      "member",
      "clear",
      "remove",
      "delete"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 12.5v-1a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1M6.5 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M10.5 6 13 8.5M13 6l-2.5 2.5\"/></g></svg>"
  },
  {
    "name": "UserCheckSmall",
    "filename": "user-check-small.svg",
    "category": "collaborators",
    "tags": [
      "user",
      "account",
      "profile",
      "avatar",
      "person",
      "human",
      "member",
      "success",
      "select",
      "done",
      "checked",
      "tick",
      "completed",
      "choice"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 12.5v-1a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1M6.5 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M10 7.5l1 1 2-2\"/></g></svg>"
  },
  {
    "name": "UserAddSmall",
    "filename": "user-add-small.svg",
    "category": "collaborators",
    "tags": [
      "user",
      "account",
      "profile",
      "avatar",
      "person",
      "human",
      "member",
      "plus",
      "create",
      "add"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 12.5v-1a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1M6.5 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M11.5 6v3M13 7.5h-3\"/></g></svg>"
  },
  {
    "name": "Use",
    "filename": "use.svg",
    "category": "collaborators",
    "tags": [
      "user",
      "account",
      "profile",
      "avatar",
      "person",
      "human",
      "member"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0M2.5 13.5v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1\"/></g></svg>"
  },
  {
    "name": "UseSettings",
    "filename": "use-settings.svg",
    "category": "collaborators",
    "tags": [
      "user",
      "account",
      "profile",
      "avatar",
      "person",
      "human",
      "member",
      "control",
      "preferences",
      "system"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.5 13.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M10.5 9.5v-1m0 5v1m2-3h1m-5 0h-1m4.414-1.414.707-.707m-3.535 3.535-.707.707m3.535-.707.707.707m-3.535-3.535-.707-.707M3.5 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0M1.5 13.5v-1a3 3 0 0 1 3-3h2\"/></g></svg>"
  },
  {
    "name": "UseRemove",
    "filename": "use-remove.svg",
    "category": "collaborators",
    "tags": [
      "user",
      "account",
      "profile",
      "avatar",
      "person",
      "human",
      "member",
      "clear",
      "remove",
      "delete"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0M1.5 13.5v-1a3 3 0 0 1 3-3h2M13.5 9.5h-4\"/></g></svg>"
  },
  {
    "name": "UseLock",
    "filename": "use-lock.svg",
    "category": "collaborators",
    "tags": [
      "user",
      "account",
      "profile",
      "avatar",
      "person",
      "human",
      "member",
      "lock",
      "security",
      "safe",
      "privacy"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0M1.5 13.5v-1a3 3 0 0 1 3-3h3\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M13.5 10.5h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1\"/><path d=\"M10.5 10V9a1.5 1.5 0 0 1 3 0v1\"/></g></svg>"
  },
  {
    "name": "UseInvitation",
    "filename": "use-invitation.svg",
    "category": "collaborators",
    "tags": [
      "user",
      "account",
      "profile",
      "avatar",
      "person",
      "human",
      "member",
      "arrow",
      "right",
      "import",
      "invitation"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 4.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0M14.5 13.5v-1a3 3 0 0 0-3-3h-2M5.5 9.5l2 2m0 0-2 2m2-2h-6\"/></g></svg>"
  },
  {
    "name": "UseEdit",
    "filename": "use-edit.svg",
    "category": "collaborators",
    "tags": [
      "user",
      "account",
      "profile",
      "avatar",
      "person",
      "human",
      "member",
      "edit",
      "design",
      "pen",
      "pencil",
      "draw",
      "create"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0M1.5 13.5v-1a3 3 0 0 1 3-3h2M7.5 14.5l1-3 3.646-3.646a.5.5 0 0 1 .708 0l1.292 1.292a.5.5 0 0 1 0 .708L10.5 13.5z\"/></g></svg>"
  },
  {
    "name": "UseDelete",
    "filename": "use-delete.svg",
    "category": "collaborators",
    "tags": [
      "user",
      "account",
      "profile",
      "avatar",
      "person",
      "human",
      "member",
      "clear",
      "remove",
      "delete"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0M1.5 13.5v-1a3 3 0 0 1 3-3h2M12.914 10.914l-2.828-2.828m0 2.828 2.828-2.828\"/></g></svg>"
  },
  {
    "name": "UseCancelInvitation",
    "filename": "use-cancel-invitation.svg",
    "category": "collaborators",
    "tags": [
      "user",
      "account",
      "profile",
      "avatar",
      "person",
      "human",
      "member",
      "arrow",
      "right",
      "import",
      "cancel",
      "invitation"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path stroke-linejoin=\"round\" d=\"M12.5 4.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0M14.5 13.5v-1a3 3 0 0 0-3-3M8.5 9.5l2 2m0 0-2 2m2-2h-4m-5 0h1\"/><path d=\"m6.5 8.5-4 6\"/></g></svg>"
  },
  {
    "name": "UseAdminister",
    "filename": "use-administer.svg",
    "category": "collaborators",
    "tags": [
      "user",
      "account",
      "profile",
      "avatar",
      "person",
      "human",
      "member"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.5 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0M1.5 13.5v-1a3 3 0 0 1 3-3h3\"/><path d=\"m13.793 8.793-1.586-1.586a1 1 0 0 0-1.414 0l-.586.586a1 1 0 0 0 0 1.414l1.586 1.586a1 1 0 0 0 1.414 0l.586-.586a1 1 0 0 0 0-1.414Z\"/><path stroke-linecap=\"round\" d=\"m11 10-3.5 3.5M9.5 13.5l-1-1m2 0-1-1\"/></g></svg>"
  },
  {
    "name": "UseAdd",
    "filename": "use-add.svg",
    "category": "collaborators",
    "tags": [
      "user",
      "account",
      "profile",
      "avatar",
      "person",
      "human",
      "member",
      "plus",
      "create",
      "add"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0M1.5 13.5v-1a3 3 0 0 1 3-3h2M13.5 9.5h-4m2 2v-4\"/></g></svg>"
  },
  {
    "name": "Security",
    "filename": "security.svg",
    "category": "collaborators",
    "tags": [
      "role",
      "lock",
      "security",
      "safe",
      "privacy"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m7.5 1.5-5 3c0 6 5 9 5 9s5-3 5-9z\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M6.5 6.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/><path d=\"M7.5 7.5v2\"/></g></svg>"
  },
  {
    "name": "Role",
    "filename": "role.svg",
    "category": "collaborators",
    "tags": [
      "role",
      "lock",
      "security",
      "safe",
      "privacy",
      "key",
      "password"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linejoin=\"round\"><path d=\"m11.207 9.793 1.879-1.879a2 2 0 0 0 0-2.828l-2.172-2.172a2 2 0 0 0-2.828 0L6.207 4.793a1 1 0 0 0 0 1.414L7 7l-4.5 4.5v2h2l1-1v-1h1v-1h1L9 9l.793.793a1 1 0 0 0 1.414 0Z\"/><path stroke-linecap=\"round\" d=\"m9.5 4.5 2 2\"/></g></svg>"
  },
  {
    "name": "RoleRemove",
    "filename": "role-remove.svg",
    "category": "collaborators",
    "tags": [
      "role",
      "lock",
      "security",
      "safe",
      "privacy",
      "key",
      "password"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8.086 2.914 6.207 4.793a1 1 0 0 0 0 1.414L7 7l-4.5 4.5v2h2l1-1v-1h1v-1h1L9 9l.793.793a1 1 0 0 0 1.414 0l1.879-1.879a2 2 0 0 0 0-2.828l-2.172-2.172a2 2 0 0 0-2.828 0M9.5 4.5l2 2M14.5 12.5h-4\"/></g></svg>"
  },
  {
    "name": "RoleAdd",
    "filename": "role-add.svg",
    "category": "collaborators",
    "tags": [
      "role",
      "lock",
      "security",
      "safe",
      "privacy",
      "key",
      "password"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9.793 9.793 9 9l-1.5 1.5h-1v1h-1v1l-1 1h-2v-2L7 7l-.793-.793a1 1 0 0 1 0-1.414l1.879-1.879a2 2 0 0 1 2.828 0L13.5 5.5a1.414 1.414 0 0 1 0 2M9.5 4.5l2 2M14.5 11.5h-4m2 2v-4\"/></g></svg>"
  },
  {
    "name": "Organization",
    "filename": "organization.svg",
    "category": "collaborators",
    "tags": [
      "organization",
      "business",
      "company",
      "building"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5.5 5.5h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2m3 0h4a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1M4.5 7.5h.005m-.005 2h.005m-.005 2h.005M9.5 5.5h.005m-.005 2h.005m-.005 2h.005m-.005 2h.005m-.005-8h.005M11.5 5.5h.005m-.005 2h.005m-.005 2h.005m-.005 2h.005m-.005-8h.005\"/></g></svg>"
  },
  {
    "name": "OrganizationSwitch",
    "filename": "organization-switch.svg",
    "category": "collaborators",
    "tags": [
      "organization",
      "business",
      "company",
      "building",
      "loading",
      "loop",
      "process",
      "arrow",
      "refresh"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 12.5H6A2.5 2.5 0 0 0 7.5 8m-2-.5H4A2.5 2.5 0 0 0 2.5 12\"/><path d=\"m6.5 10.5-2 2 2 2M3.5 5.5l2 2-2 2M7.5 5.5v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3M9.5 5.5h.005m-.005-2h.005M11.5 5.5h.005m-.005 2h.005m-.005 2h.005m-.005 2h.005m-.005-8h.005\"/></g></svg>"
  },
  {
    "name": "OrganizationJoin",
    "filename": "organization-join.svg",
    "category": "collaborators",
    "tags": [
      "organization",
      "business",
      "company",
      "building",
      "arrow",
      "right",
      "import",
      "input"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9.5 13.5h3a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3m-2 0h-2a1 1 0 0 0-1 1v1m3 6h-2a1 1 0 0 1-1-1v-1M9.5 5.5h.005m-.005-2h.005M11.5 5.5h.005m-.005 2h.005m-.005 2h.005m-.005 2h.005m-.005-8h.005M7.5 7.5l2 2m0 0-2 2m2-2h-8\"/></g></svg>"
  },
  {
    "name": "OrganizationAdd",
    "filename": "organization-add.svg",
    "category": "collaborators",
    "tags": [
      "organization",
      "business",
      "company",
      "building",
      "plus",
      "create",
      "add"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.5 4.5v-2a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2m-2 1h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1M14.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0M12.5 10.5h-4m2 2v-4M4.5 7.5h.005m-.005 2h.005m-.005 2h.005M9.5 3.5h.005m1.995 0h.005\"/></g></svg>"
  },
  {
    "name": "MemberAccounts",
    "filename": "member-accounts.svg",
    "category": "collaborators",
    "tags": [
      "user",
      "account",
      "profile",
      "avatar",
      "person",
      "human",
      "member",
      "docment",
      "book"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 13V3.5a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3A1.5 1.5 0 0 0 1.5 13m0 0A1.5 1.5 0 0 0 3 14.5h9.5a1 1 0 0 0 1-1V13\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M6.5 5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0M4.5 10.5v1h7v-1a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2\"/></g></svg>"
  },
  {
    "name": "ViewChart",
    "filename": "view-chart.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business",
      "bar"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 1.5h-10a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1\"/><path d=\"M4.5 11V4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5M10 7.5H9a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5\"/></g></svg>"
  },
  {
    "name": "TrendLine",
    "filename": "trend-line.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business",
      "line"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 12.5h2m0 0h10m-10 0v-11m0 11v2M12.5 2.5l-7 7m7-7v2m0-2h-2M9.5 8.5h4m0 0L12 7m1.5 1.5L12 10\"/></g></svg>"
  },
  {
    "name": "Table",
    "filename": "table.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business",
      "grid"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 2.5h-10a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1M1.5 5.5h12m-8 0v8m-4-4h12m-4-4v8\"/></g></svg>"
  },
  {
    "name": "StackedBar",
    "filename": "stacked-bar.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business",
      "bar",
      "stacked"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2 2.5h4.5v2H2a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5M9.5 8.5v-2H2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5zM5.5 10.5H2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3.5z\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M11 2.5H6.5v2H11a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5M13 6.5H9.5v2H13a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5M11 10.5H5.5v2H11a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5\"/></g></svg>"
  },
  {
    "name": "ScrollingWords",
    "filename": "scrolling-words.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.5 4.5h8m-8 3h4m2 0h2m-8 3h6m-7 2h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1\"/></svg>"
  },
  {
    "name": "RowStacked",
    "filename": "row-stacked.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business",
      "bar",
      "stacked"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12.5h2.5v-2H3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5M8.5 6.5v2H3a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5zM4.5 4.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h1.5z\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M7 12.5H5.5v-2H7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5M12 8.5H8.5v-2H12a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5M10 4.5H4.5v-2H10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5\"/></g></svg>"
  },
  {
    "name": "RowNormal",
    "filename": "row-normal.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business",
      "bar"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12.5h4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5M12.5 7v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5M2.5 3v1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5\"/></g></svg>"
  },
  {
    "name": "RowGroup",
    "filename": "row-group.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business",
      "bar"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path fill=\"currentColor\" d=\"M12.5 7v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5\"/><path d=\"M3 12.5h4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5M2.5 3v1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5\"/></g></svg>"
  },
  {
    "name": "Radar",
    "filename": "radar.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m10 11-3 1.5L2.5 10V5L7 2.5 10 4\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"m13.5 4.5-5 3 5 3z\"/></g></svg>"
  },
  {
    "name": "Quadrant",
    "filename": "quadrant.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5.5 4.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M5.5 9.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M10.5 9.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M1.5 12.5h2m0 0h10m-10 0v-11m0 11v2\"/></g></svg>"
  },
  {
    "name": "Pie",
    "filename": "pie.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 8.5a5 5 0 0 0 10 0h-5v-5a5 5 0 0 0-5 5\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M9.5 6.5V2.6a5.01 5.01 0 0 1 3.9 3.9z\"/></g></svg>"
  },
  {
    "name": "Picture",
    "filename": "picture.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business",
      "image"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 2.5h-9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"m9.346 7.11-5.919 5.524a.5.5 0 0 0 .342.866H12.5a1 1 0 0 0 1-1v-3l-2.82-2.418a1 1 0 0 0-1.334.028\"/><path d=\"M4.5 5.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/></g></svg>"
  },
  {
    "name": "Number",
    "filename": "number.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 2.5h-10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1\"/><path d=\"M8.501 6.409a1.18 1.18 0 0 1 1.221-.907c.399.027.788.212.972.556a1 1 0 0 1 .11.462c.002.561-.411.959-1.078 1.656-.286.299-.71.749-1.226 1.323h2.453M4.5 6.5l1-1v4h-1 2\"/></g></svg>"
  },
  {
    "name": "Nps",
    "filename": "nps.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke-opacity=\".25\" d=\"M10.5 8.5c0 .546-.146 1.059-.401 1.5M7.5 5.5A3 3 0 0 0 4.901 10\"/><path d=\"M12.374 12a6 6 0 1 0-9.748 0M7.5 8.5l3-3M5.5 12.5h4\"/></g></svg>"
  },
  {
    "name": "MultipleAxes",
    "filename": "multiple-axes.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.5 13.5h-9a1 1 0 0 1-1-1v-10m-2 0v11m11-6v4m-2-3v3m-2-2v2m-2 0v-1M12.5 2.5l-6 6m6-6v3m0-3h-3\"/></g></svg>"
  },
  {
    "name": "MultiLine",
    "filename": "multi-line.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business",
      "line"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 12.5h2m0 0h10m-10 0v-11m0 11v2M5.5 8.5l2-2 3 3 3-3m0 0h-2m2 0v2M6.5 10.5l1-1m2-4 4-4m0 0h-2m2 0v2\"/></g></svg>"
  },
  {
    "name": "MixedLineAndBar",
    "filename": "mixed-line-and-bar.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business",
      "bar",
      "line"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 12.5h2m0 0h10m-10 0v-11m0 11v2m7-5v.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V8.5M6.5 3V2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1m0 5v2a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V8M5.5 6.5l2-2 3 3 3-3\"/></g></svg>"
  },
  {
    "name": "Line",
    "filename": "line.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business",
      "line"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 12.5h2m0 0h10m-10 0v-11m0 11v2M12.5 3.5l-7 7m7-7v3m0-3h-3\"/></g></svg>"
  },
  {
    "name": "Journey",
    "filename": "journey.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.5 3.5v-1a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h12m0 0-2-2m2 2-2 2m1 2v1a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-3M7.5 9.5v2m3-2v2m-6-2v2\"/></g></svg>"
  },
  {
    "name": "Filter",
    "filename": "filter.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business",
      "filter"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 2.5h12m-8 2h4M2.5 4.5l4 4v3l2 1v-4l4-4\"/></g></svg>"
  },
  {
    "name": "FilterBlock",
    "filename": "filter-block.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business",
      "filter"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path stroke-linejoin=\"round\" d=\"M1.5 2.5h12m-8 2h4M2.5 4.5l4 4v3m6-7-2 2\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M13.5 8.5h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Z\"/></g></svg>"
  },
  {
    "name": "Doughnut",
    "filename": "doughnut.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M9.5 5V2.6a5.01 5.01 0 0 1 3.9 3.9H11C11 6 10 5 9.5 5\"/><path d=\"M2.5 8.5a5 5 0 0 0 10 0h-3a2 2 0 1 1-2-2v-3a5 5 0 0 0-5 5\"/></g></svg>"
  },
  {
    "name": "DoubleLine",
    "filename": "double-line.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business",
      "line"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 12.5h2m0 0h10m-10 0v-11m0 11v2M5.5 8.5l2-2 3 3 3-3M6.5 10.5l1-1M10 6l3.5-3.5\"/></g></svg>"
  },
  {
    "name": "Divider",
    "filename": "divider.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business",
      "divider"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 3.5h2m3 0h2m3 0h2M1.5 11.5h2m3 0h2m3 0h2M1.5 7.5h12\"/></g></svg>"
  },
  {
    "name": "Column",
    "filename": "column.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business",
      "bar",
      "column"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 3.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5M8.5 9V8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5M1.5 12.5h2m0 0h10m-10 0v-11m0 11v2\"/></g></svg>"
  },
  {
    "name": "ColumnStacked",
    "filename": "column-stacked.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business",
      "bar",
      "column",
      "stacked"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 12V9.5h2V12a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5M8.5 6.5h-2V12a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5zM10.5 10.5V12a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.5z\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M2.5 8v1.5h2V8a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5M6.5 3v3.5h2V3a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5M10.5 5v5.5h2V5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5\"/></g></svg>"
  },
  {
    "name": "ColumnNormal",
    "filename": "column-normal.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business",
      "bar",
      "column"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 12V8a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5M8 2.5H7a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5M12 12.5h-1a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5\"/></g></svg>"
  },
  {
    "name": "ColumnGroup",
    "filename": "column-group.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business",
      "bar",
      "column"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 12V8a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5M12 12.5h-1a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5\"/><path fill=\"currentColor\" d=\"M8 2.5H7a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5\"/></g></svg>"
  },
  {
    "name": "ChartEdit",
    "filename": "chart-edit.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business",
      "pen",
      "pencil",
      "draw",
      "create"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m7.5 14.5 1-3 3.646-3.646a.5.5 0 0 1 .708 0l1.292 1.292a.5.5 0 0 1 0 .708L10.5 13.5zM1.5 12.5h2m0 0h2m-2 0v-11m0 11v2m2-4V4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4.5m4-3V5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2.5\"/></g></svg>"
  },
  {
    "name": "ChartDelete",
    "filename": "chart-delete.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business",
      "bar",
      "clear",
      "remove",
      "delete"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13 11.5h-3M14.5 11.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M1.5 12.5h2m0 0h3m-3 0v-11m0 11v2m2-4V4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.5m2-1V6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v.5\"/></g></svg>"
  },
  {
    "name": "Blueprint",
    "filename": "blueprint.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path d=\"M13.5 7.5v5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-5m0-4v-1a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v1M2.5 5.5h11M4.5 9.5h1m2 0h1m2 0h1M4.5 7.5h1m2 0h1m2 0h1M4.5 11.5h1m2 0h1m2 0h1M4.5 3.5h7\"/></g></svg>"
  },
  {
    "name": "BlueprintTimeline",
    "filename": "blueprint-timeline.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business",
      "timeline",
      "line"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" d=\"M1.5 7.5h4m8 0h-4m4-2v4m-12-4v4\"/></svg>"
  },
  {
    "name": "BlueprintNode",
    "filename": "blueprint-node.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path stroke-linejoin=\"round\" d=\"M2.5 6.5v-3a1 1 0 0 1 1-1h3m-4 6v3a1 1 0 0 0 1 1h3m2 0h3a1 1 0 0 0 1-1v-3m0-2v-3a1 1 0 0 0-1-1h-3\"/><path d=\"M6.5 2.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM1.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM6.5 12.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM11.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z\"/></g></svg>"
  },
  {
    "name": "BlueprintDivider",
    "filename": "blueprint-divider.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business",
      "divider",
      "line"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" d=\"M1.5 7.5h12\"/></svg>"
  },
  {
    "name": "BlockDelete",
    "filename": "block-delete.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business",
      "clear",
      "remove",
      "delete"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path stroke-linejoin=\"round\" d=\"M14.5 10.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0M12.5 10.5h-4\"/><path d=\"M12.5 1.5h-10a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1ZM4.5 7.5h-2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h2\"/></g></svg>"
  },
  {
    "name": "BlockAdd",
    "filename": "block-add.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business",
      "plus",
      "create",
      "add"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path fill=\"currentColor\" fill-opacity=\".25\" stroke-linejoin=\"round\" d=\"M14.5 10.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0\"/><path stroke-linejoin=\"round\" d=\"M12.5 10.5h-4m2-2v4\"/><path d=\"M12.5 1.5h-10a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1ZM4.5 7.5h-2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h2\"/></g></svg>"
  },
  {
    "name": "Biaxial",
    "filename": "biaxial.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business",
      "bar"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 12.5h2m0 0h10m-10 0v-11m0 11v2m4-4H8a.5.5 0 0 0 .5-.5v-.5m-2-4V3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v.5m2.5 7h1a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5M13.5 1.5l-8 8\"/></g></svg>"
  },
  {
    "name": "Bar",
    "filename": "bar.svg",
    "category": "charts",
    "tags": [
      "chart",
      "data",
      "statistics",
      "report",
      "analysis",
      "visualization",
      "performance",
      "graph",
      "business",
      "bar"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M1.5 12.5h2m0 0h10m-10 0v-11m0 11v2m6.5-4h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5M7.5 10V4a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5\"/></svg>"
  },
  {
    "name": "ViewSettings",
    "filename": "view-settings.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "view",
      "control",
      "preferences",
      "system"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 10.5v-1m2-8h-1a1 1 0 0 0-1 1v1m8-2h1a1 1 0 0 1 1 1v1m-4-2h-2m-4 6v-2M9 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3\"/><path d=\"M13 9a4 4 0 0 0-.142-1l1.28-1.1-.75-1.3-1.579.556a4 4 0 0 0-1.748-1L9.75 3.5h-1.5l-.311 1.66a4 4 0 0 0-1.748 1L4.612 5.6l-.75 1.3L5.142 8c-.09.326-.138.662-.142 1 .004.338.052.674.142 1l-1.28 1.1.75 1.3 1.579-.555c.488.477 1.09.822 1.748 1L8.25 14.5h1.5l.311-1.66a4 4 0 0 0 1.748-1l1.579.555.75-1.3L12.858 10c.09-.326.138-.662.142-1\"/></g></svg>"
  },
  {
    "name": "ViewKanban",
    "filename": "view-kanban.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "view",
      "column"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5.5 3.5V13a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V3.5m-8 0V7a.5.5 0 0 0 .5.5h1.5m10-4V10a.5.5 0 0 1-.5.5h-1.5M1.5 1.5h12\"/></g></svg>"
  },
  {
    "name": "ViewGrid",
    "filename": "view-grid.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "view",
      "grid"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 1.5h-10a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1M1.5 9.5h6m0 0v-4m0 4v4m0-4h6m-12-4h12\"/></g></svg>"
  },
  {
    "name": "ViewGallery",
    "filename": "view-gallery.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "view",
      "gallery",
      "grid"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5.5 1.5h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1M12.5 1.5h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1M5.5 8.5h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1M12.5 8.5h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1\"/></g></svg>"
  },
  {
    "name": "ViewForm",
    "filename": "view-form.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "view",
      "form"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 1.5h-10a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1\"/><path d=\"M3.5 3.5h4m-3.5 8h7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5m0-4h7a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5\"/></g></svg>"
  },
  {
    "name": "ViewDuplicate",
    "filename": "view-duplicate.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "view",
      "duplicate",
      "copy",
      "clone",
      "paste"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 6.5v-1a1 1 0 0 1 1-1h1m0 10h-1a1 1 0 0 1-1-1v-1m8 2h1a1 1 0 0 0 1-1v-1m-4 2h-2m-4-6v2M6.5 1.5h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1\"/></g></svg>"
  },
  {
    "name": "ViewCalendar",
    "filename": "view-calendar.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "view",
      "date",
      "calendar",
      "time"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 2.5h-2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-4 0h2M1.5 5.5h12M4.5 1.5v2m6-2v2M3.5 7.5h.005m1.995 0h.005m1.995 0h.005M3.5 9.5h.005m1.995 0h.005m1.995 0h.005m1.995-2h.005m-.005 2h.005m1.995-2h.005m-.005 2h.005m-8.005 2h.005m1.995 0h.005m1.995 0h.005m1.995 0h.005m1.995 0h.005\"/></g></svg>"
  },
  {
    "name": "ViewAdd",
    "filename": "view-add.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "view",
      "plus",
      "create",
      "add"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 10.5v1a1 1 0 0 0 1 1h1m0-10h-1a1 1 0 0 0-1 1v1m8-2h1a1 1 0 0 1 1 1v1m-4-2h-2m-4 6v-2M11.5 10.5h-4m2-2v4\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M13.5 10.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0\"/></g></svg>"
  },
  {
    "name": "ToolbarSort",
    "filename": "toolbar-sort.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "toolbar",
      "arrow",
      "up",
      "down",
      "order",
      "filter",
      "sort"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 3.5v9m0 0L2 10m2.5 2.5L7 10m3.5 1.5v-9m0 0L13 5m-2.5-2.5L8 5\"/></svg>"
  },
  {
    "name": "ToolbarSettings",
    "filename": "toolbar-settings.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "toolbar",
      "control",
      "preferences",
      "system"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path d=\"M14.5 2.5h-12a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3M3.5 5.5h2\"/><path stroke-linejoin=\"round\" d=\"m5.25 12.25 2.74-2.74c.305-.305.377-.772.28-1.191C8.103 7.603 8.049 6.45 9 5.5 10.5 4 12.5 5 12.5 5l-1.293 1.293a1 1 0 0 0 0 1.414l.086.086a1 1 0 0 0 1.414 0L14 6.5s1 2-.5 3.5c-.951.951-2.103.897-2.819.73-.42-.098-.886-.025-1.19.28L6.75 13.75a1.06 1.06 0 0 1-1.5-1.5\"/></g></svg>"
  },
  {
    "name": "ToolbarRowHeightTall",
    "filename": "toolbar-row-height-tall.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "toolbar",
      "row",
      "view"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.5 2.5v11m0-11-2 2m2-2 2 2m-2 9 2-2m-2 2-2-2\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M12.5 2.5h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 12.5h6m-1-3h-4a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1\"/></svg>"
  },
  {
    "name": "ToolbarRowHeightShort",
    "filename": "toolbar-row-height-short.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "toolbar",
      "row",
      "view"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 2.5v11m0-11-2 2m2-2 2 2m-2 9 2-2m-2 2-2-2M7.5 3.5h6m-6 3h6m-6 3h6m-6 3h6\"/></g></svg>"
  },
  {
    "name": "ToolbarRowHeightMedium",
    "filename": "toolbar-row-height-medium.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "toolbar",
      "row",
      "view"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.5 2.5v11m0-11-2 2m2-2 2 2m-2 9 2-2m-2 2-2-2\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M12.5 2.5h-4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 9.5h6m-6 3h6m-1-6h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1\"/></svg>"
  },
  {
    "name": "ToolbarRowHeightExtratall",
    "filename": "toolbar-row-height-extratall.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "toolbar",
      "row",
      "view"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 2.5v11m0-11-2 2m2-2 2 2m-2 9 2-2m-2 2-2-2\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M12.5 2.5h-4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1\"/></g></svg>"
  },
  {
    "name": "ToolbarGroup",
    "filename": "toolbar-group.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "toolbar",
      "group"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 1.5h-10a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1\"/><path d=\"m3.5 4.5 1 1 2-2m2 1h3M13.5 13.5v-3a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v3\"/><path d=\"m3.5 12.5 1 1 2-2m2 1h3\"/></g></svg>"
  },
  {
    "name": "ToolbarFilter",
    "filename": "toolbar-filter.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "toolbar",
      "filter"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 2.5h12m-8 2h4M2.5 4.5l4 4v3l2 1v-4l4-4\"/></g></svg>"
  },
  {
    "name": "RightSidebar",
    "filename": "right-sidebar.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "sidebar"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 2.5h-10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1M8.5 2.5v10m2-7h1m-1 2h1m-1 2h1\"/></g></svg>"
  },
  {
    "name": "RecordSettings",
    "filename": "record-settings.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "record",
      "control",
      "preferences",
      "system"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M4.5 2.5v-1m0 5v1m2-3h1m-5 0h-1m4.414-1.414.707-.707M3.086 5.914l-.707.707m3.535-.707.707.707M3.086 3.086l-.707-.707\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M14.5 13.5v-2a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.5 3.5h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4m-7 4v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1\"/></svg>"
  },
  {
    "name": "RecordInsertTop",
    "filename": "record-insert-top.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "record",
      "plus",
      "create",
      "add",
      "arrow",
      "right"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m4.5 1.5 2 2m0 0-2 2m2-2h-3a2 2 0 0 0-2 2v2\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M12.5 10.5h-10a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1\"/><path d=\"M13.5 3.5h-4m2 2v-4\"/></g></svg>"
  },
  {
    "name": "RecordInsertBelow",
    "filename": "record-insert-below.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "record",
      "plus",
      "create",
      "add",
      "arrow",
      "right"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m4.5 14.5 2-2m0 0-2-2m2 2h-3a2 2 0 0 1-2-2v-2\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M12.5 5.5h-10a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1\"/><path d=\"M13.5 12.5h-4m2 2v-4\"/></g></svg>"
  },
  {
    "name": "RecordHide",
    "filename": "record-hide.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "record",
      "watch",
      "view",
      "eye",
      "visibility",
      "disabled",
      "hidden",
      "hide",
      "look"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.5 12.5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m-8-3h8a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v1M7.207 11.207a1 1 0 0 1-1.414-1.414M6 7.52q.243-.02.5-.02c3.5 0 5 3 5 3s-.375.75-1.187 1.5\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M1.5 10.5s1.5 3 5 3c.963 0 1.774-.227 2.444-.556L4.056 8.056C2.288 8.923 1.5 10.5 1.5 10.5\"/><path d=\"m1.5 5.5 9 9\"/></g></svg>"
  },
  {
    "name": "RecordFreeze",
    "filename": "record-freeze.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "record",
      "lock",
      "security",
      "safe",
      "privacy"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M1.5 5.5v-4h12v4z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6.5 8.5h-4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2m-3-11v4h12v-4zM13.5 10.5h-5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M9.5 10V9a1.5 1.5 0 0 1 3 0v1\"/></svg>"
  },
  {
    "name": "RecordEdit",
    "filename": "record-edit.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "record",
      "pen",
      "pencil",
      "draw",
      "create"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M1.5 4.5v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 8.5h-5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3m8-10v2a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1M7.5 14.5l1-3 3.646-3.646a.5.5 0 0 1 .708 0l1.292 1.292a.5.5 0 0 1 0 .708L10.5 13.5z\"/></svg>"
  },
  {
    "name": "RecordDuplicate",
    "filename": "record-duplicate.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "record",
      "duplicate",
      "copy",
      "clone",
      "paste"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M5.5 7.5v-3a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.5 7.5h-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-1m4-6v3a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1\"/></svg>"
  },
  {
    "name": "RecordDelete",
    "filename": "record-delete.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "record",
      "clear",
      "remove",
      "delete"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 12.5h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2m-9-4v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4M9.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0M7.5 10.5h-4\"/></g></svg>"
  },
  {
    "name": "RecordCopyUrl",
    "filename": "record-copy-url.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "record",
      "url",
      "duplicate",
      "copy",
      "clone",
      "paste"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 10.5v2a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2\"/><path d=\"m10 3 .086-.086a2 2 0 0 1 2.828 0l.172.172a2 2 0 0 1 0 2.828l-1.879 1.879a1 1 0 0 1-1.414 0L9 7m0 3-.086.086a2 2 0 0 1-2.828 0l-.172-.172a2 2 0 0 1 0-2.828l1.879-1.879a1 1 0 0 1 1.414 0L10 6\"/></g></svg>"
  },
  {
    "name": "RecordColor",
    "filename": "record-color.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "record",
      "color",
      "bucket",
      "design",
      "fill",
      "paint"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M13.5 12.5a1 1 0 0 1-2 0c0-.8 1-2 1-2s1 1.2 1 2M6.5 6.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m3.5 2.5 3 3m7 7a1 1 0 0 1-2 0c0-.8 1-2 1-2s1 1.2 1 2m-6-11L2.207 6.793a1 1 0 0 0 0 1.414l4.086 4.086a1 1 0 0 0 1.414 0L13 7zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2\"/></svg>"
  },
  {
    "name": "RecordAdd",
    "filename": "record-add.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "record",
      "plus",
      "create",
      "add"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 12.5h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2m-9-4v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4M7.5 10.5h-4m2 2v-4\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M9.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0\"/></g></svg>"
  },
  {
    "name": "OptionsSortDescending",
    "filename": "options-sort-descending.svg",
    "category": "datasheets",
    "tags": [
      "order",
      "alpha",
      "sort",
      "alphabetical",
      "desc"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m3.5 5.5 2-2m0 0 2 2m-2-2v8m4-8H12l-2.5 3H12m-2.5 5V9.75a1.25 1.25 0 0 1 2.5 0v1.75m0-.5H9.5\"/></svg>"
  },
  {
    "name": "OptionsSortAscending",
    "filename": "options-sort-ascending.svg",
    "category": "datasheets",
    "tags": [
      "order",
      "alpha",
      "sort",
      "alphabetical",
      "asc"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m3.5 9.5 2 2m0 0 2-2m-2 2v-8m6.5 2H9.5m0 1V4.75a1.25 1.25 0 0 1 2.5 0V6.5m-2.5 2H12l-2.5 3H12\"/></svg>"
  },
  {
    "name": "LinkedDisassociate",
    "filename": "linked-disassociate.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "clear",
      "remove",
      "delete",
      "arrow",
      "right",
      "linked"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 6.5h7m0 0-2-2m2 2-2 2M2.5 1.5h11m-11 10h4m5-5h2M10 10l3 3m0-3-3 3\"/></g></svg>"
  },
  {
    "name": "LinkedAdd",
    "filename": "linked-add.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "plus",
      "create",
      "add",
      "arrow",
      "right",
      "linked"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 6.5h7m0 0-2-2m2 2-2 2M13.5 11.5h-4m2 2v-4M2.5 1.5h11m-11 10h4m5-5h2\"/></g></svg>"
  },
  {
    "name": "History",
    "filename": "history.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "back",
      "loop",
      "process",
      "arrow",
      "clock",
      "time",
      "refresh"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path d=\"M3.964 4.964A5 5 0 1 1 2.5 8.5\"/><path stroke-linejoin=\"round\" d=\"M6.5 5.5h-3v-3M10.5 8.5h-3v2\"/></g></svg>"
  },
  {
    "name": "FieldSortedDesc",
    "filename": "field-sorted-desc.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "field",
      "arrow",
      "down",
      "order",
      "filter",
      "sort",
      "desc"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 2.5h10m-10 4h7m-7 4h5M11.5 6.5v6m0 0-2-2m2 2 2-2\"/></g></svg>"
  },
  {
    "name": "FieldSortedAsc",
    "filename": "field-sorted-asc.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "field",
      "arrow",
      "up",
      "order",
      "filter",
      "sort",
      "asc"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 12.5h10m-10-4h7m-7-4h5M11.5 8.5v-6m0 0-2 2m2-2 2 2\"/></g></svg>"
  },
  {
    "name": "FieldSettings",
    "filename": "field-settings.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "field",
      "control",
      "preferences",
      "system"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M5.5 13.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5.5 9.5v-1m0 5v1m2-3h1m-5 0h-1m4.414-1.414.707-.707m-3.535 3.535-.707.707m3.535-.707.707.707m-3.535-3.535-.707-.707\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M10.5 2.5v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.5 6.5v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4m7 6v-10a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1\"/></svg>"
  },
  {
    "name": "FieldRule",
    "filename": "field-rule.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "field",
      "rule",
      "user",
      "account",
      "profile",
      "avatar",
      "person",
      "human",
      "member"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M5.5 12.5v-10a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8.5 4.5v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2m-11-2v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1M9.5 8a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0M14.5 14.5v-1a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v1\"/></svg>"
  },
  {
    "name": "FieldPrimary",
    "filename": "field-primary.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "field",
      "flag",
      "map",
      "tag"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"m4.5 2.5 8 4-8 4z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.5 1.5v12m10-7-8-4v8z\"/></svg>"
  },
  {
    "name": "FieldInsertRight",
    "filename": "field-insert-right.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "field",
      "plus",
      "create",
      "add",
      "arrow",
      "up"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m13.5 10.5-2-2m0 0-2 2m2-2v3a2 2 0 0 1-2 2h-2\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M5.5 12.5v-10a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1\"/><path d=\"M13.5 3.5h-4m2 2v-4\"/></g></svg>"
  },
  {
    "name": "FieldInsertLeft",
    "filename": "field-insert-left.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "field",
      "plus",
      "create",
      "add",
      "arrow",
      "up"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m1.5 10.5 2-2m0 0 2 2m-2-2v3a2 2 0 0 0 2 2h2\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M9.5 12.5v-10a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1\"/><path d=\"M1.5 3.5h4m-2 2v-4\"/></g></svg>"
  },
  {
    "name": "FieldHide",
    "filename": "field-hide.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "field",
      "watch",
      "view",
      "eye",
      "visibility",
      "disabled",
      "hidden",
      "hide",
      "look"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 4.5v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3m5 8h1a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4M6 7.52q.243-.02.5-.02c3.5 0 5 3 5 3s-.375.75-1.187 1.5M1.5 5.5l9 9\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M1.5 10.5s1.5 3 5 3c.963 0 1.774-.227 2.444-.556L4.056 8.056C2.288 8.923 1.5 10.5 1.5 10.5\"/><path d=\"M7.207 11.207a1 1 0 0 1-1.414-1.414\"/></g></svg>"
  },
  {
    "name": "FieldFreeze",
    "filename": "field-freeze.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "field",
      "lock",
      "security",
      "safe",
      "privacy"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13.5 10.5h-5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M9.5 10V9a1.5 1.5 0 0 1 3 0v1\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M5.5 13.5v-12h-4v12z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8.5 5.5v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3m-7-4v12h-4v-12z\"/></svg>"
  },
  {
    "name": "FieldEdit",
    "filename": "field-edit.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "field",
      "pen",
      "pencil",
      "draw",
      "create"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M5.5 12.5v-10a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8.5 8.5v-6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3m-11-3v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1M7.5 14.5l1-3 3.646-3.646a.5.5 0 0 1 .708 0l1.292 1.292a.5.5 0 0 1 0 .708L10.5 13.5z\"/></svg>"
  },
  {
    "name": "FieldDynamic",
    "filename": "field-dynamic.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "field",
      "dynamic"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7.5 3.5v-1a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1m7 1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2M7.759 8.026v3.126c0 .964 1.524 1.179 2.322-.125.677-1.104.51-2.787-.334-3.895-1.243-1.63-4.118-2.24-6.206-.892C1.62 7.478.939 9.984 1.999 12.01c1.05 2.004 3.512 2.976 5.741 2.25m.011-4.322c0 1.037-.818 1.879-1.827 1.879s-1.827-.842-1.827-1.88.818-1.879 1.827-1.879c1.01 0 1.827.842 1.827 1.88\"/></g></svg>"
  },
  {
    "name": "FieldDuplicate",
    "filename": "field-duplicate.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "field",
      "duplicate",
      "copy",
      "clone",
      "paste"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M8.5 10.5h3a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8.5 12.5v1a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h1m6-4h-3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1\"/></svg>"
  },
  {
    "name": "FieldDelete",
    "filename": "field-delete.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "field",
      "clear",
      "remove",
      "delete"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7.5 10.5h-4M9.5 10.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0M3.5 4.5v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2m4 9h2a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4\"/></g></svg>"
  },
  {
    "name": "FieldAdd",
    "filename": "field-add.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "field",
      "plus",
      "create",
      "add"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7.5 10.5h-4m2-2v4\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M9.5 10.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0\"/><path d=\"M3.5 4.5v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2m4 9h2a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4\"/></g></svg>"
  },
  {
    "name": "Extensions",
    "filename": "extensions.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "plug",
      "energy",
      "power"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M14 8 8 2a.707.707 0 0 0-1 1l.5.5-1.586 1.586a2 2 0 0 0 0 2.828l2.172 2.172a2 2 0 0 0 2.828 0L12.5 8.5l.5.5a.707.707 0 1 0 1-1\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m8.5 5.5 2 2M7 3a.707.707 0 0 1 1-1l6 6a.707.707 0 0 1-1 1l-.5-.5-1.586 1.586a2 2 0 0 1-2.828 0L5.914 7.914a2 2 0 0 1 0-2.828L7.5 3.5zM7 9l-3 3m5.5-8.5 2-2m3 3-2 2\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.5 2.5h-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1\"/></svg>"
  },
  {
    "name": "DynamicValue",
    "filename": "dynamic-value.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "typography",
      "dynamic"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path d=\"M1.5 2.5h12m-12 3h12m-12 3h6m-6 3h6\"/><path stroke-linejoin=\"round\" d=\"M10.5 13.5 12 12m0 0-2.5-1.5L11 9m1 3 1.5-1.5L11 9m1.5-1.5L11 9\"/></g></svg>"
  },
  {
    "name": "DynamicLinked",
    "filename": "dynamic-linked.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "arrow",
      "right",
      "linked",
      "dynamic"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.5 13.5 12 12m0 0-2.5-1.5L11 9m1 3 1.5-1.5L11 9m1.5-1.5L11 9M1.5 6.5h7m0 0-2-2m2 2-2 2M2.5 1.5h11m-11 10h4\"/></g></svg>"
  },
  {
    "name": "DynamicDate",
    "filename": "dynamic-date.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "date",
      "calendar",
      "dynamic",
      "time"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 2.5h-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5m2-9h1a1 1 0 0 1 1 1v2m-6-3h2M1.5 5.5h10M3.5 1.5v2m6-2v2M3.5 7.5h.005m1.995 0h.005m1.995 0h.005M3.5 9.5h.005m1.995 0h.005m1.995 0h.005m1.995-2h.005M10.5 13.5 12 12m0 0-2.5-1.5L11 9m1 3 1.5-1.5L11 9m1.5-1.5L11 9\"/></g></svg>"
  },
  {
    "name": "ApiDocument",
    "filename": "api-document.svg",
    "category": "datasheets",
    "tags": [
      "data",
      "datasheet",
      "table",
      "document",
      "api",
      "book"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 12V3.5a2 2 0 0 1 2-2h7a1 1 0 0 1 1 1v8m-7-3 .5-1m0 0 1.5-3 1.5 3m-3 0h3m.5 1-.5-1\"/><path d=\"M12 13.5H4a1.5 1.5 0 0 1 0-3h8.5V13a.5.5 0 0 1-.5.5\"/></g></svg>"
  },
  {
    "name": "ZoomOut",
    "filename": "zoom-out.svg",
    "category": "common",
    "tags": [
      "common",
      "magnifier",
      "glass",
      "view",
      "lookup"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" d=\"m10.5 10.5 3 3m-9-7h4m3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z\"/></svg>"
  },
  {
    "name": "ZoomOutSmall",
    "filename": "zoom-out-small.svg",
    "category": "common",
    "tags": [
      "common",
      "magnifier",
      "glass",
      "view",
      "lookup"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m12.5 12.5-2.175-2.175M6 7.5h3m-1.5 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8\"/></svg>"
  },
  {
    "name": "ZoomIn",
    "filename": "zoom-in.svg",
    "category": "common",
    "tags": [
      "common",
      "magnifier",
      "glass",
      "view",
      "lookup"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" d=\"M4.5 6.5h2m0 0h2m-2 0v-2m0 2v2m4 2 3 3m-2-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z\"/></svg>"
  },
  {
    "name": "ZoomInSmall",
    "filename": "zoom-in-small.svg",
    "category": "common",
    "tags": [
      "common",
      "magnifier",
      "glass",
      "view",
      "lookup"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m12.5 12.5-2.175-2.175M7.5 6v3M6 7.5h3m-1.5 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8\"/></svg>"
  },
  {
    "name": "UnlockSolid",
    "filename": "unlock-solid.svg",
    "category": "common",
    "tags": [
      "interface",
      "solid",
      "lock",
      "locked",
      "secure",
      "password",
      "key",
      "safety",
      "privacy"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path fill=\"currentColor\" d=\"M9.5 8.5h-6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1\"/><path d=\"M8.5 6.5V5a2.5 2.5 0 0 1 5 0v.5\"/></g></svg>"
  },
  {
    "name": "UnlockSmall",
    "filename": "unlock-small.svg",
    "category": "common",
    "tags": [
      "common",
      "lock",
      "locked",
      "secure",
      "password",
      "key",
      "safety",
      "privacy"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9.5 7.5h-6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1M8.5 7V5a2.5 2.5 0 0 1 5 0\"/></g></svg>"
  },
  {
    "name": "Trash",
    "filename": "trash.svg",
    "category": "common",
    "tags": [
      "common",
      "remove",
      "delete",
      "close",
      "garbage",
      "bin"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M1.5 3.5h2m0 0v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-9m-8 0h2m8 0h-2m0 0h-2m-4 0v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1m-4 0h4\"/></svg>"
  },
  {
    "name": "TrashSmall",
    "filename": "trash-small.svg",
    "category": "common",
    "tags": [
      "common",
      "remove",
      "delete",
      "close",
      "garbage",
      "bin"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.5 4.5h9m-1 0v7c0 .5-.5 1-1 1h-5c-.5 0-1-.5-1-1v-7m1.5 0v-1c0-.5.5-1 1-1h2c.5 0 1 .5 1 1v1\"/></svg>"
  },
  {
    "name": "ThumbUp",
    "filename": "thumb-up.svg",
    "category": "common",
    "tags": [
      "common",
      "bookmark",
      "favorite",
      "like",
      "review",
      "rating"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 13.5h-2v-5h2M4.5 8.5l2-6H7A1.5 1.5 0 0 1 8.5 4v2.5h3.27a1.5 1.5 0 0 1 1.485 1.712l-.571 4A1.5 1.5 0 0 1 11.2 13.5H4.5z\"/></g></svg>"
  },
  {
    "name": "ThumbDown",
    "filename": "thumb-down.svg",
    "category": "common",
    "tags": [
      "common",
      "bookmark",
      "favorite",
      "like",
      "review",
      "rating"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 2.5h-2v5h2M4.5 7.5l2 6H7A1.5 1.5 0 0 0 8.5 12V9.5h3.27a1.5 1.5 0 0 0 1.485-1.712l-.571-4A1.5 1.5 0 0 0 11.2 2.5H4.5z\"/></g></svg>"
  },
  {
    "name": "ThemeSystem",
    "filename": "theme-system.svg",
    "category": "common",
    "tags": [
      "common",
      "theme",
      "system",
      "display",
      "computer",
      "desktop",
      "pc",
      "workstation"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 12.5v-3m0 0h-4a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1zm-3 3h6\"/></svg>"
  },
  {
    "name": "ThemeSunBright",
    "filename": "theme-sun-bright.svg",
    "category": "common",
    "tags": [
      "common",
      "theme",
      "weather",
      "sun"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 7.5a3 3 0 1 0 6 0 3 3 0 0 0-6 0M7.5 1.5v1m0 10v1m5-6h1m-11 0h-1M11.743 3.257l-.707.707m-7.072 7.072-.707.707m7.779-.707.707.707M3.964 3.964l-.707-.707\"/></g></svg>"
  },
  {
    "name": "ThemeMoonDark",
    "filename": "theme-moon-dark.svg",
    "category": "common",
    "tags": [
      "common",
      "theme",
      "weather",
      "moon"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 9a4.5 4.5 0 0 0 8.247 2.493C6.5 11.493 3.5 7.5 6.253 4.507 3.711 4.367 1.5 6.449 1.5 9M7.5 2.5h2m-1-1v2M11.5 4.5v4m-2-2h4\"/></g></svg>"
  },
  {
    "name": "TagRemove",
    "filename": "tag-remove.svg",
    "category": "common",
    "tags": [
      "common",
      "tag",
      "label",
      "badge",
      "ticket",
      "remove",
      "minus",
      "delete",
      "close"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.5 12.5h4M11.892 4.5A3.54 3.54 0 0 1 11 8l-3 3a3.54 3.54 0 0 1-3.5.892m5-9.784A3.54 3.54 0 0 0 6 3L3 6a3.54 3.54 0 0 0-.892 3.5M12.5 1.5l-4 4m-3 3-4 4\"/></g></svg>"
  },
  {
    "name": "TagAdd",
    "filename": "tag-add.svg",
    "category": "common",
    "tags": [
      "common",
      "tag",
      "label",
      "badge",
      "ticket",
      "add",
      "plus",
      "create",
      "new"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 10.5v4M10.5 12.5h4M11.892 4.5A3.54 3.54 0 0 1 11 8l-3 3a3.54 3.54 0 0 1-3.5.892m5-9.784A3.54 3.54 0 0 0 6 3L3 6a3.54 3.54 0 0 0-.892 3.5M12.5 1.5l-4 4m-3 3-4 4\"/></g></svg>"
  },
  {
    "name": "SystemPreferences",
    "filename": "system-preferences.svg",
    "category": "common",
    "tags": [
      "common",
      "system",
      "settings",
      "control",
      "preferences",
      "tools"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 13.5v-2M4.5 5.5v-3M4.5 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M11.5 2.5v2M11.5 10.5v3M11.5 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4\"/></g></svg>"
  },
  {
    "name": "SystemConfiguration",
    "filename": "system-configuration.svg",
    "category": "common",
    "tags": [
      "common",
      "system",
      "settings",
      "control",
      "preferences",
      "tools"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9.5 7.5v4M9.5 3.5v2M11.5 5.5h-4M5.5 7.5v-4M5.5 11.5v-2M7.5 9.5h-4M1.5 12.5v-10a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1\"/></g></svg>"
  },
  {
    "name": "Support",
    "filename": "support.svg",
    "category": "common",
    "tags": [
      "common",
      "help",
      "lifesaver",
      "preserver"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M5.379 9.621a3 3 0 0 0 4.242 0l2.122 2.122a6 6 0 0 1-8.486 0zM5.379 5.379a3 3 0 0 1 4.242 0l2.122-2.122a6 6 0 0 0-8.486 0z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M5.379 9.621a3 3 0 0 0 4.242 0l2.122 2.122a6 6 0 0 1-8.486 0zM5.379 5.379a3 3 0 0 1 4.242 0l2.122-2.122a6 6 0 0 0-8.486 0z\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M5.379 5.379a3 3 0 0 0 0 4.242l-2.122 2.122a6 6 0 0 1 0-8.486zM9.621 9.621a3 3 0 0 0 0-4.242l2.122-2.122a6 6 0 0 1 0 8.486z\"/></svg>"
  },
  {
    "name": "SupportSmall",
    "filename": "support-small.svg",
    "category": "common",
    "tags": [
      "common",
      "help",
      "lifesaver",
      "preserver"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m9.767 6.233 2.122-2.122M9.767 9.767l2.122 2.122M6.233 9.767l-2.122 2.122M6.233 6.233 4.111 4.111M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11\"/><path d=\"M8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5\"/></g></svg>"
  },
  {
    "name": "Star",
    "filename": "star.svg",
    "category": "common",
    "tags": [
      "common",
      "bookmark",
      "favorite",
      "like",
      "review",
      "rating"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m8 2.769 1.7 3.444 3.8.552-2.75 2.68.649 3.786L8 11.444l-3.399 1.787.649-3.786-2.75-2.68 3.8-.552z\"/></svg>"
  },
  {
    "name": "StarSolid",
    "filename": "star-solid.svg",
    "category": "common",
    "tags": [
      "common",
      "bookmark",
      "favorite",
      "like",
      "review",
      "rating",
      "solid"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"m13.572 6.27-3.54-.514-1.584-3.208a.52.52 0 0 0-.9 0l-1.58 3.208-3.54.514a.5.5 0 0 0-.277.853l2.562 2.5-.606 3.526a.5.5 0 0 0 .726.527L8 12.008l3.167 1.665a.5.5 0 0 0 .726-.527l-.606-3.526 2.562-2.5a.5.5 0 0 0-.277-.853z\"/></svg>"
  },
  {
    "name": "SquareRemoveSquarevg",
    "filename": "square-remove.squarevg.svg",
    "category": "common",
    "tags": [
      "common",
      "square",
      "remove",
      "delete",
      "close"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 2.5H4A1.5 1.5 0 0 0 2.5 4v8A1.5 1.5 0 0 0 4 13.5h8a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 12 2.5M10.121 5.879l-4.242 4.242M5.879 5.879l4.242 4.242\"/></g></svg>"
  },
  {
    "name": "SquareDeleteSquarevg",
    "filename": "square-delete.squarevg.svg",
    "category": "common",
    "tags": [
      "common",
      "square",
      "remove",
      "minus",
      "delete",
      "close"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 2.5H4A1.5 1.5 0 0 0 2.5 4v8A1.5 1.5 0 0 0 4 13.5h8a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 12 2.5M5 8h6\"/></g></svg>"
  },
  {
    "name": "SquareAddSquarevg",
    "filename": "square-add.squarevg.svg",
    "category": "common",
    "tags": [
      "common",
      "square",
      "add",
      "plus",
      "create",
      "new"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 5v6M5 8h6M12 2.5H4A1.5 1.5 0 0 0 2.5 4v8A1.5 1.5 0 0 0 4 13.5h8a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 12 2.5\"/></g></svg>"
  },
  {
    "name": "SocialSharing",
    "filename": "social-sharing.svg",
    "category": "common",
    "tags": [
      "common",
      "network",
      "share",
      "connections",
      "arrow"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 10.5V12a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 12V5A1.5 1.5 0 0 1 4 3.5h1.5\"/><path d=\"M9.5 9.5v-2c-1.832 0-3.858.152-5 2 0-3.77 2.688-5 5-5v-2l4 3.5z\"/></g></svg>"
  },
  {
    "name": "Sharing",
    "filename": "sharing.svg",
    "category": "common",
    "tags": [
      "common",
      "network",
      "share",
      "connections",
      "arrow"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.5 3.5H12A1.5 1.5 0 0 1 13.5 5v7a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12v-1.5\"/><path d=\"m2.5 6 4-3.5v2c2.312 0 5 1.23 5 5-1.142-1.848-3.168-2-5-2v2z\"/></g></svg>"
  },
  {
    "name": "Share",
    "filename": "share.svg",
    "category": "common",
    "tags": [
      "common",
      "network",
      "share",
      "connections",
      "arrow"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m10.5 2.5 3 3-3 3\"/><path d=\"M13.5 5.5h-5a2 2 0 0 0-2 2v2\"/><path d=\"M12.5 10.5V12a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 12V5A1.5 1.5 0 0 1 4 3.5h1.5\"/></g></svg>"
  },
  {
    "name": "SetupPreferences",
    "filename": "setup-preferences.svg",
    "category": "common",
    "tags": [
      "common",
      "system",
      "settings",
      "control",
      "preferences",
      "tools"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.5 4.5h4M1.5 4.5h2M5.5 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5.5 10.5h-4M14.5 10.5h-2M10.5 8.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4\"/></g></svg>"
  },
  {
    "name": "Settings",
    "filename": "settings.svg",
    "category": "common",
    "tags": [
      "common",
      "system",
      "settings",
      "gear",
      "cog",
      "tools",
      "control",
      "preferences"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3\"/><path d=\"M14.5 8.867V7.133l-1.887-.314a4.7 4.7 0 0 0-.52-1.246l1.112-1.56-1.218-1.222-1.56 1.111a4.7 4.7 0 0 0-1.246-.515L8.867 1.5H7.133L6.82 3.387a4.7 4.7 0 0 0-1.246.515l-1.56-1.11-1.222 1.221 1.111 1.56c-.23.389-.404.808-.515 1.246L1.5 7.133v1.734l1.887.314c.111.438.285.857.515 1.246l-1.11 1.56 1.221 1.222 1.56-1.111c.389.231.808.407 1.246.52l.314 1.882h1.734l.314-1.887a4.7 4.7 0 0 0 1.246-.52l1.56 1.112 1.222-1.218-1.111-1.56c.231-.388.407-.808.52-1.246z\"/></g></svg>"
  },
  {
    "name": "Send",
    "filename": "send.svg",
    "category": "common",
    "tags": [
      "email",
      "send",
      "message",
      "letter",
      "common"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 9.045V12.5l1.859-2.272M4.5 9.045l9-7.545m-9 7.545 1.859 1.183m0 0L11.5 13.5l2-12m0 0L1.5 7 3 8\"/></svg>"
  },
  {
    "name": "SendMessageSmall",
    "filename": "send-message-small.svg",
    "category": "common",
    "tags": [
      "email",
      "send",
      "message",
      "letter",
      "common"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m7.5 8.5-5-2 11-4-4 11zm0 0 2-2\"/></svg>"
  },
  {
    "name": "Search",
    "filename": "search.svg",
    "category": "common",
    "tags": [
      "common",
      "magnifier",
      "glass",
      "view",
      "lookup"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" d=\"m10.5 10.5 3 3m-2-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z\"/></svg>"
  },
  {
    "name": "SearchSmall",
    "filename": "search-small.svg",
    "category": "common",
    "tags": [
      "common",
      "magnifier",
      "glass",
      "view",
      "lookup"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m12.5 12.5-2.15-2.15M7.5 11.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8\"/></svg>"
  },
  {
    "name": "Remove",
    "filename": "remove.svg",
    "category": "common",
    "tags": [
      "common",
      "clear",
      "delete",
      "remove",
      "close",
      "exit",
      "cancel",
      "discard"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13 3 3 13M3 3l10 10\"/></svg>"
  },
  {
    "name": "RemoveSmall",
    "filename": "remove-small.svg",
    "category": "common",
    "tags": [
      "common",
      "clear",
      "delete",
      "remove",
      "close",
      "exit",
      "cancel",
      "discard"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m3.5 3.5 9 9m0-9-9 9\"/></svg>"
  },
  {
    "name": "RadioBtn",
    "filename": "radio-btn.svg",
    "category": "common",
    "tags": [
      "common",
      "circle"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11\"/></svg>"
  },
  {
    "name": "RadioBtnChecked",
    "filename": "radio-btn-checked.svg",
    "category": "common",
    "tags": [
      "common",
      "circle",
      "complete",
      "done",
      "check"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11\"/><path fill=\"currentColor\" d=\"M8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5\"/><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5\"/></svg>"
  },
  {
    "name": "QrCode",
    "filename": "qr-code.svg",
    "category": "common",
    "tags": [
      "common"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 1.5H2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-.5-.5M13 1.5h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-.5-.5M5 9.5H2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5M7.5 3.5v2a2 2 0 0 1-2 2h-1m-3 0h1M13.5 9.5H10a.5.5 0 0 0-.5.5v3.5M13.5 7.5v.005M7.5 9.5v.005M7.5 1.5v.005M3.5 3.5v.005M3.5 11.5v.005M11.5 3.5v.005M7.5 11.5v2m4-6h-2M13.5 12v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5\"/></g></svg>"
  },
  {
    "name": "Preferences",
    "filename": "preferences.svg",
    "category": "common",
    "tags": [
      "common",
      "system",
      "settings",
      "control",
      "preferences",
      "tools"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5.5 8V3M2.5 5.5h3M7.5 5.5h6M10.5 13V8M13.5 10.5h-3M8.5 10.5h-6\"/></g></svg>"
  },
  {
    "name": "Options",
    "filename": "options.svg",
    "category": "common",
    "tags": [
      "common",
      "system",
      "settings",
      "control",
      "preferences",
      "tools"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 10.5H3M5.5 13.5v-3M5.5 8.5v-6M13 5.5H8M10.5 2.5v3M10.5 7.5v6\"/></g></svg>"
  },
  {
    "name": "NetworkConnection",
    "filename": "network-connection.svg",
    "category": "common",
    "tags": [
      "common",
      "network",
      "share",
      "connections"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9.713 5.394 6.288 7.106M9.713 10.606 6.288 8.894M11.5 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M11.5 13.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M4.5 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4\"/></g></svg>"
  },
  {
    "name": "Menu",
    "filename": "menu.svg",
    "category": "common",
    "tags": [
      "common",
      "bars",
      "navigation",
      "hamburger",
      "options"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.5 2.5h11m-11 10h11m-11-5h11\"/></svg>"
  },
  {
    "name": "MailSmall",
    "filename": "mail-small.svg",
    "category": "common",
    "tags": [
      "email",
      "send",
      "message",
      "letter",
      "common"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3.5H4A1.5 1.5 0 0 0 2.5 5v6A1.5 1.5 0 0 0 4 12.5h8a1.5 1.5 0 0 0 1.5-1.5V5A1.5 1.5 0 0 0 12 3.5\"/><path d=\"m4.5 5.5 3.5 3 3.5-3\"/></g></svg>"
  },
  {
    "name": "LogLists",
    "filename": "log-lists.svg",
    "category": "common",
    "tags": [
      "common",
      "system",
      "settings",
      "control",
      "preferences",
      "tools",
      "list"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path d=\"M12.5 2.5h-10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Z\"/><path d=\"M3.5 5.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z\"/><path stroke-linecap=\"round\" d=\"M7.5 5.5h4\"/><path d=\"M3.5 9.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z\"/><path stroke-linecap=\"round\" d=\"M7.5 9.5h4\"/></g></svg>"
  },
  {
    "name": "Lock",
    "filename": "lock.svg",
    "category": "common",
    "tags": [
      "common",
      "lock",
      "locked",
      "secure",
      "password",
      "key",
      "safety",
      "privacy"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13 15.5H3A1.5 1.5 0 0 1 1.5 14V9A1.5 1.5 0 0 1 3 7.5h10A1.5 1.5 0 0 1 14.5 9v5a1.5 1.5 0 0 1-1.5 1.5M4.5 5.5V4a3.5 3.5 0 1 1 7 0v1.5\"/><path d=\"M8 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3\"/></g></svg>"
  },
  {
    "name": "LockSolid",
    "filename": "lock-solid.svg",
    "category": "common",
    "tags": [
      "interface",
      "solid",
      "lock",
      "locked",
      "secure",
      "password",
      "key",
      "safety",
      "privacy"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path fill=\"currentColor\" d=\"M11.5 8.5h-7a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1\"/><path d=\"M5.5 6.5V5a2.5 2.5 0 0 1 5 0v1.5\"/></g></svg>"
  },
  {
    "name": "LockSmall",
    "filename": "lock-small.svg",
    "category": "common",
    "tags": [
      "common",
      "lock",
      "locked",
      "secure",
      "password",
      "key",
      "safety",
      "privacy"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 7.5h-7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1M5.5 7V5a2.5 2.5 0 0 1 5 0v2\"/></g></svg>"
  },
  {
    "name": "LoaderCircle",
    "filename": "loader-circle.svg",
    "category": "common",
    "tags": [
      "common",
      "loading",
      "progress",
      "spinner",
      "wait"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke-opacity=\".25\" d=\"M2.5 8a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0\"/><path d=\"M13.5 8A5.5 5.5 0 0 0 8 2.5\"/></g></svg>"
  },
  {
    "name": "Launch",
    "filename": "launch.svg",
    "category": "common",
    "tags": [
      "common",
      "network",
      "share",
      "connections",
      "arrow"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 10.5V12a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 12V6A1.5 1.5 0 0 1 4 4.5h1.5M8.5 2.5h5v5M13.5 2.5l-6 6\"/></g></svg>"
  },
  {
    "name": "LaunchApp",
    "filename": "launch-app.svg",
    "category": "common",
    "tags": [
      "common",
      "network",
      "share",
      "connections",
      "arrow"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.5 10.5V12a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 12V4A1.5 1.5 0 0 1 4 2.5h1.5M8.5 2.5h5v5M13.5 2.5l-6 6\"/></g></svg>"
  },
  {
    "name": "Indeterminate",
    "filename": "indeterminate.svg",
    "category": "common",
    "tags": [
      "common",
      "indeterminate"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8\"/></svg>"
  },
  {
    "name": "GripVerticalSmall",
    "filename": "grip-vertical-small.svg",
    "category": "common",
    "tags": [
      "common",
      "dots",
      "menu",
      "circle",
      "more",
      "vertical"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M6 4.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M6 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M10 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M10 4.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M10 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"/></g></svg>"
  },
  {
    "name": "GripHorizontalSmall",
    "filename": "grip-horizontal-small.svg",
    "category": "common",
    "tags": [
      "common",
      "dots",
      "menu",
      "circle",
      "more",
      "horizontal"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 6.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M12 6.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M4 6.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M12 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M4 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"/></g></svg>"
  },
  {
    "name": "GridInterface",
    "filename": "grid-interface.svg",
    "category": "common",
    "tags": [
      "common"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6.5 2.5h-4v4h4zM13.5 2.5h-4v4h4zM6.5 9.5h-4v4h4zM13.5 9.5h-4v4h4z\"/></g></svg>"
  },
  {
    "name": "GalleryView",
    "filename": "gallery-view.svg",
    "category": "common",
    "tags": [
      "common"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 2.5v11M2.5 8h11M12 2.5H4A1.5 1.5 0 0 0 2.5 4v8A1.5 1.5 0 0 0 4 13.5h8a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 12 2.5\"/></g></svg>"
  },
  {
    "name": "Favorite",
    "filename": "favorite.svg",
    "category": "common",
    "tags": [
      "common",
      "bookmark",
      "favorite",
      "like",
      "review",
      "rating"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.64 4.4a2.836 2.836 0 0 0-4.148 0A3 3 0 0 0 8 5.116a3 3 0 0 0-.493-.716 2.84 2.84 0 0 0-4.148 0 3.185 3.185 0 0 0 0 4.351L8 13.5l4.64-4.748a3.18 3.18 0 0 0 0-4.352\"/></svg>"
  },
  {
    "name": "FavoriteSolid",
    "filename": "favorite-solid.svg",
    "category": "common",
    "tags": [
      "common",
      "bookmark",
      "favorite",
      "like",
      "review",
      "rating",
      "solid"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M12.988 4.055a3.34 3.34 0 0 0-5.001.149 3.336 3.336 0 0 0-5.006-.141A3.7 3.7 0 0 0 2.989 9.1l4.641 4.75a.5.5 0 0 0 .715 0l4.644-4.75a3.614 3.614 0 0 0-.001-5.045\"/></svg>"
  },
  {
    "name": "Email",
    "filename": "email.svg",
    "category": "common",
    "tags": [
      "forms",
      "question",
      "type",
      "form",
      "email",
      "send",
      "message",
      "letter",
      "common"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path d=\"M12.5 2.5h-10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m1.5 5.5 5.553 2.776a1 1 0 0 0 .894 0L13.5 5.5\"/></g></svg>"
  },
  {
    "name": "EllipsisVerticalSmall",
    "filename": "ellipsis-vertical-small.svg",
    "category": "common",
    "tags": [
      "common",
      "dots",
      "menu",
      "circle",
      "more",
      "ellipsis",
      "vertical"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8 4.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"/></g></svg>"
  },
  {
    "name": "EllipsisSmall",
    "filename": "ellipsis-small.svg",
    "category": "common",
    "tags": [
      "common",
      "dots",
      "menu",
      "circle",
      "more",
      "ellipsis",
      "horizontal"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M12 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M4 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1\"/></g></svg>"
  },
  {
    "name": "Dot",
    "filename": "dot.svg",
    "category": "common",
    "tags": [
      "common",
      "radio"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6\"/></svg>"
  },
  {
    "name": "Delete",
    "filename": "delete.svg",
    "category": "common",
    "tags": [
      "common",
      "minus",
      "clear",
      "remove",
      "close",
      "cancel",
      "deletion",
      "less"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" d=\"M2.5 8h11\"/></svg>"
  },
  {
    "name": "DeleteSmall",
    "filename": "delete-small.svg",
    "category": "common",
    "tags": [
      "common",
      "minus",
      "clear",
      "remove",
      "close",
      "cancel",
      "deletion",
      "less"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3 8h10\"/></svg>"
  },
  {
    "name": "CogwheelSolidSmall",
    "filename": "cogwheel-solid-small.svg",
    "category": "common",
    "tags": [
      "common",
      "system",
      "settings",
      "control",
      "preferences",
      "tools",
      "cog",
      "solid"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"m13.555 7-1.486-.165a4.2 4.2 0 0 0-.37-.893l.934-1.168a.5.5 0 0 0-.037-.666l-.707-.708a.5.5 0 0 0-.666-.037l-1.168.937a4.2 4.2 0 0 0-.893-.37L9 2.445A.5.5 0 0 0 8.5 2h-1a.5.5 0 0 0-.5.445l-.162 1.486q-.467.134-.893.37l-1.168-.934a.5.5 0 0 0-.666.037l-.711.707a.5.5 0 0 0-.037.666L4.3 5.945a4.2 4.2 0 0 0-.37.893L2.445 7A.5.5 0 0 0 2 7.5v1a.5.5 0 0 0 .445.5l1.486.165q.134.467.37.893l-.934 1.165a.5.5 0 0 0 .037.666l.707.707a.5.5 0 0 0 .666.037l1.168-.933q.425.236.893.37L7 13.555a.5.5 0 0 0 .5.445h1a.5.5 0 0 0 .5-.445l.165-1.486q.467-.134.893-.37l1.168.934a.5.5 0 0 0 .666-.037l.707-.707a.5.5 0 0 0 .037-.666l-.936-1.168a4.2 4.2 0 0 0 .37-.893L13.555 9A.5.5 0 0 0 14 8.5v-1a.5.5 0 0 0-.445-.5M8 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4\"/></svg>"
  },
  {
    "name": "CogwheelSmall",
    "filename": "cogwheel-small.svg",
    "category": "common",
    "tags": [
      "common",
      "system",
      "settings",
      "control",
      "preferences",
      "tools",
      "cog"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.5 8.9V7.1l-1.668-.185a4 4 0 0 0-.355-.857l1.049-1.311-1.273-1.273-1.311 1.049a4 4 0 0 0-.857-.355L8.9 2.5H7.1l-.185 1.668a4 4 0 0 0-.857.355L4.747 3.474 3.474 4.747l1.049 1.311c-.151.27-.27.559-.355.857L2.5 7.1v1.8l1.668.185q.128.449.355.857l-1.049 1.311 1.273 1.272 1.311-1.048c.27.151.559.27.857.355L7.1 13.5h1.8l.185-1.668q.449-.128.857-.355l1.311 1.048 1.273-1.272-1.049-1.311c.151-.27.27-.559.355-.857z\"/><path d=\"M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3\"/></g></svg>"
  },
  {
    "name": "Clock",
    "filename": "clock.svg",
    "category": "common",
    "tags": [
      "common",
      "clock",
      "day",
      "time",
      "watch"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 4.5V8h3.5\"/><path d=\"M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11\"/></g></svg>"
  },
  {
    "name": "CircleRemove",
    "filename": "circle-remove.svg",
    "category": "common",
    "tags": [
      "common",
      "circle",
      "remove",
      "delete",
      "close"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M6 6l4 4M10 6l-4 4\"/></g></svg>"
  },
  {
    "name": "CircleCirclehecirclek",
    "filename": "circle-circlehecirclek.svg",
    "category": "common",
    "tags": [
      "common",
      "circle",
      "complete",
      "done",
      "checkbox",
      "check"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m5 8.5 2 2 4-5\"/><path d=\"M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11\"/></g></svg>"
  },
  {
    "name": "CircleAdd",
    "filename": "circle-add.svg",
    "category": "common",
    "tags": [
      "common",
      "circle",
      "add",
      "plus",
      "create",
      "new"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M8 5v6M5 8h6\"/></g></svg>"
  },
  {
    "name": "CheckboxBtn",
    "filename": "checkbox-btn.svg",
    "category": "common",
    "tags": [
      "common",
      "square"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 2.5H4A1.5 1.5 0 0 0 2.5 4v8A1.5 1.5 0 0 0 4 13.5h8a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 12 2.5\"/></svg>"
  },
  {
    "name": "CheckboxBtnChecked",
    "filename": "checkbox-btn-checked.svg",
    "category": "common",
    "tags": [
      "common",
      "square",
      "checkbox",
      "check",
      "done",
      "complete"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 2.5H4A1.5 1.5 0 0 0 2.5 4v8A1.5 1.5 0 0 0 4 13.5h8a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 12 2.5\"/><path d=\"m4.5 8.5 2 2 5-5\"/></g></svg>"
  },
  {
    "name": "Check",
    "filename": "check.svg",
    "category": "common",
    "tags": [
      "common",
      "success",
      "select",
      "done",
      "checked",
      "tick",
      "completed",
      "choice"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m4.5 7.5 3 3 4-6\"/></svg>"
  },
  {
    "name": "Ban",
    "filename": "ban.svg",
    "category": "common",
    "tags": [
      "common",
      "circle",
      "cancel",
      "ban",
      "error",
      "slash",
      "wrong",
      "failure",
      "null"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m4.111 11.889 7.778-7.778M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11\"/></g></svg>"
  },
  {
    "name": "AttachSmall",
    "filename": "attach-small.svg",
    "category": "common",
    "tags": [
      "attach",
      "file",
      "attachment",
      "inbox",
      "email",
      "common"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8.654 5.982 6.36 8.277a1.335 1.335 0 1 0 1.889 1.889l3.1-3.1A2.673 2.673 0 0 0 7.57 3.287L4.2 6.657a4.009 4.009 0 0 0 5.669 5.669l3.1-3.1\"/></svg>"
  },
  {
    "name": "AtSign",
    "filename": "at-sign.svg",
    "category": "common",
    "tags": [
      "mention",
      "email",
      "send",
      "sign",
      "at",
      "common"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" clip-path=\"url(#a)\"><path d=\"M8 10.667a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334\"/><path d=\"M10.667 5.333v3.334a2 2 0 1 0 4 0V8A6.667 6.667 0 1 0 12 13.333\"/></g><defs><clipPath id=\"a\"><path fill=\"#fff\" d=\"M0 0h16v16H0z\"/></clipPath></defs></svg>"
  },
  {
    "name": "AtSignSmall",
    "filename": "at-sign-small.svg",
    "category": "common",
    "tags": [
      "mention",
      "email",
      "send",
      "sign",
      "at",
      "common"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.067 5.587v3.821c0 1.179 1.791 1.441 2.729-.153.795-1.349.6-3.406-.393-4.76-1.461-1.993-4.839-2.738-7.293-1.091-2.255 1.514-3.058 4.577-1.812 7.053 1.233 2.45 4.127 3.637 6.747 2.751\"/><path d=\"M7.911 10.221c1.186 0 2.147-1.028 2.147-2.297s-.961-2.297-2.147-2.297-2.147 1.028-2.147 2.297.961 2.297 2.147 2.297\"/></g></svg>"
  },
  {
    "name": "Ai",
    "filename": "ai.svg",
    "category": "common",
    "tags": [
      "common",
      "sparks",
      "ai",
      "effect",
      "brightness",
      "interlligence"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 9.5a5 5 0 0 0 5-5 5 5 0 0 0 5 5 5 5 0 0 0-5 5 5 5 0 0 0-5-5\"/><path fill=\"currentColor\" d=\"M10.5 3.5a2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0-2 2 2 2 0 0 0-2-2\"/></g></svg>"
  },
  {
    "name": "Add",
    "filename": "add.svg",
    "category": "common",
    "tags": [
      "common",
      "plus",
      "create",
      "add"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8 2.5v11M2.5 8h11\"/></svg>"
  },
  {
    "name": "AddSmall",
    "filename": "add-small.svg",
    "category": "common",
    "tags": [
      "common",
      "plus",
      "create",
      "add"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8 3v10M3 8h10\"/></svg>"
  },
  {
    "name": "DistributeVertical",
    "filename": "distribute-vertical.svg",
    "category": "alignment",
    "tags": [
      "alignment",
      "align",
      "distribute",
      "vertical",
      "layout"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.5 3.5h-10m10 8h-10m8-3v-2h-6v2z\"/></svg>"
  },
  {
    "name": "DistributeVerticalSolid",
    "filename": "distribute-vertical-solid.svg",
    "category": "alignment",
    "tags": [
      "alignment",
      "align",
      "distribute",
      "vertical",
      "solid",
      "layout"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 3.5h-10m10 8h-10\"/><path fill=\"currentColor\" d=\"M10.5 6.5v2h-6v-2z\"/></g></svg>"
  },
  {
    "name": "DistributeHorizontal",
    "filename": "distribute-horizontal.svg",
    "category": "alignment",
    "tags": [
      "alignment",
      "align",
      "distribute",
      "horizontal",
      "layout"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.5 2.5v10m8-10v10m-3-8h-2v6h2z\"/></svg>"
  },
  {
    "name": "DistributeHorizontalSolid",
    "filename": "distribute-horizontal-solid.svg",
    "category": "alignment",
    "tags": [
      "alignment",
      "align",
      "distribute",
      "horizontal",
      "solid",
      "layout"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 2.5v10m8-10v10\"/><path fill=\"currentColor\" d=\"M6.5 4.5h2v6h-2z\"/></g></svg>"
  },
  {
    "name": "AlignTop",
    "filename": "align-top.svg",
    "category": "alignment",
    "tags": [
      "alignment",
      "align",
      "top",
      "layout"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.5 2.5h-10m8 10v-8h-2v8zm-4-3v-5h-2v5z\"/></svg>"
  },
  {
    "name": "AlignTopSolid",
    "filename": "align-top-solid.svg",
    "category": "alignment",
    "tags": [
      "alignment",
      "align",
      "top",
      "solid",
      "layout"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 2.5h-10\"/><path fill=\"currentColor\" d=\"M10.5 4.5v8h-2v-8zM6.5 4.5v5h-2v-5z\"/></g></svg>"
  },
  {
    "name": "AlignRight",
    "filename": "align-right.svg",
    "category": "alignment",
    "tags": [
      "alignment",
      "align",
      "right",
      "layout"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.5 2.5v10m-2-8h-8v2h8zm0 4h-5v2h5z\"/></svg>"
  },
  {
    "name": "AlignRightSolid",
    "filename": "align-right-solid.svg",
    "category": "alignment",
    "tags": [
      "alignment",
      "align",
      "right",
      "solid",
      "layout"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 12.5v-10\"/><path fill=\"currentColor\" d=\"M10.5 6.5h-8v-2h8zM10.5 10.5h-5v-2h5z\"/></g></svg>"
  },
  {
    "name": "AlignLeft",
    "filename": "align-left.svg",
    "category": "alignment",
    "tags": [
      "alignment",
      "align",
      "left",
      "layout"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.5 2.5v10m10-8h-8v2h8zm-3 4h-5v2h5z\"/></svg>"
  },
  {
    "name": "AlignLeftSolid",
    "filename": "align-left-solid.svg",
    "category": "alignment",
    "tags": [
      "alignment",
      "align",
      "left",
      "solid",
      "layout"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 2.5v10\"/><path fill=\"currentColor\" d=\"M4.5 4.5h8v2h-8zM4.5 8.5h5v2h-5z\"/></g></svg>"
  },
  {
    "name": "AlignCenterVertical",
    "filename": "align-center-vertical.svg",
    "category": "alignment",
    "tags": [
      "alignment",
      "align",
      "center",
      "vertical",
      "layout"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.5 7.5h2m2 0v4h-2v-8h2zm0 0h2m0 0v-2h2v2m-2 0v2h2v-2m0 0h2\"/></svg>"
  },
  {
    "name": "AlignCenterVerticalSolid",
    "filename": "align-center-vertical-solid.svg",
    "category": "alignment",
    "tags": [
      "alignment",
      "align",
      "center",
      "vertical",
      "solid",
      "layout"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 7.5h2m2 0h2m2 0h2\"/><path fill=\"currentColor\" d=\"M4.5 11.5v-8h2v8zM10.5 9.5h-2v-4h2z\"/></g></svg>"
  },
  {
    "name": "AlignCenterHorizontal",
    "filename": "align-center-horizontal.svg",
    "category": "alignment",
    "tags": [
      "alignment",
      "align",
      "center",
      "horizontal",
      "layout"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 2.5v2m0 2h-4v-2h8v2zm0 0v2m0 0h2v2h-2m0-2h-2v2h2m0 0v2\"/></svg>"
  },
  {
    "name": "AlignCenterHorizontalSolid",
    "filename": "align-center-horizontal-solid.svg",
    "category": "alignment",
    "tags": [
      "alignment",
      "align",
      "center",
      "horizontal",
      "solid",
      "layout"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7.5 2.5v2m0 2v2m0 2v2\"/><path fill=\"currentColor\" d=\"M3.5 4.5h8v2h-8zM5.5 10.5v-2h4v2z\"/></g></svg>"
  },
  {
    "name": "AlignBottom",
    "filename": "align-bottom.svg",
    "category": "alignment",
    "tags": [
      "alignment",
      "align",
      "bottom",
      "layout"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.5 12.5h10m-8-10v8h2v-8zm4 3v5h2v-5z\"/></svg>"
  },
  {
    "name": "AlignBottomSolid",
    "filename": "align-bottom-solid.svg",
    "category": "alignment",
    "tags": [
      "alignment",
      "align",
      "bottom",
      "solid",
      "layout"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 12.5h10\"/><path fill=\"currentColor\" d=\"M4.5 10.5v-8h2v8zM8.5 10.5v-5h2v5z\"/></g></svg>"
  },
  {
    "name": "Upload",
    "filename": "upload.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "top",
      "up",
      "upload",
      "push",
      "data",
      "file"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5.5 7.5H4A1.5 1.5 0 0 0 2.5 9v3A1.5 1.5 0 0 0 4 13.5h8a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 12 7.5h-1.5M5 5.5l3-3 3 3M8 10.5v-8\"/></g></svg>"
  },
  {
    "name": "UploadData",
    "filename": "upload-data.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "top",
      "up",
      "upload",
      "push",
      "file"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 7.5 8 3.5l-3.5 4h2v4h3v-4zM13.5 10.5V12a1.5 1.5 0 0 1-1.5 1.5h-1.5M2.5 10.5V12A1.5 1.5 0 0 0 4 13.5h1.5M13.5 5.5V4A1.5 1.5 0 0 0 12 2.5h-1.5M2.5 5.5V4A1.5 1.5 0 0 1 4 2.5h1.5\"/></g></svg>"
  },
  {
    "name": "UpArrowSmall",
    "filename": "up-arrow-small.svg",
    "category": "arrows",
    "tags": [],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m2.5 10.5 5.5-6 5.5 6\"/></svg>"
  },
  {
    "name": "Undo",
    "filename": "undo.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "left",
      "back",
      "backward"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 5.5v3h3\"/><path d=\"M12.5 10.5A4.5 4.5 0 0 0 8 6a4.5 4.5 0 0 0-3 1.15L3.5 8.5\"/></g></svg>"
  },
  {
    "name": "TriangleUp",
    "filename": "triangle-up.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "up"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.5 11.5h11L8 3.5z\"/></svg>"
  },
  {
    "name": "TriangleRight",
    "filename": "triangle-right.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "right"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 2.5v11l8-5.5z\"/></svg>"
  },
  {
    "name": "TriangleLeft",
    "filename": "triangle-left.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "left"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11.5 2.5v11L3.5 8z\"/></svg>"
  },
  {
    "name": "TriangleDown",
    "filename": "triangle-down.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "down"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.5 4.5h11l-5.5 8z\"/></svg>"
  },
  {
    "name": "TransactionSmall",
    "filename": "transaction-small.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "horizontal",
      "flip",
      "directions",
      "swap"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m10.5 13.5 3-3-3-3M13.5 10.5h-6M5.5 2.5l-3 3 3 3M2.5 5.5h6\"/></g></svg>"
  },
  {
    "name": "TrafficSmall",
    "filename": "traffic-small.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "swap",
      "vertical",
      "flip"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m3 6 2.5-2.5L8 6M5.5 3.5v9M13 10l-2.5 2.5L8 10M10.5 12.5v-9\"/></g></svg>"
  },
  {
    "name": "SystemUpdate",
    "filename": "system-update.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "data",
      "file",
      "import",
      "download"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.5 2.5H12A1.5 1.5 0 0 1 13.5 4v8a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 12V4A1.5 1.5 0 0 1 4 2.5h1.5\"/><path d=\"m11 7.5-3 3-3-3M8 2.5v8\"/></g></svg>"
  },
  {
    "name": "SwapVerticalSmall",
    "filename": "swap-vertical-small.svg",
    "category": "arrows",
    "tags": [
      "flip",
      "arrow",
      "swap",
      "vertical"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m3 5 2.5-2.5L8 5M5.5 2.5v11M13 11l-2.5 2.5L8 11M10.5 2.5v11\"/></g></svg>"
  },
  {
    "name": "SwapHorizontalSmall",
    "filename": "swap-horizontal-small.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "horizontal",
      "flip",
      "directions",
      "swap"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m11 8 2.5 2.5L11 13M2.5 10.5h11M5 8 2.5 5.5 5 3M2.5 5.5h11\"/></g></svg>"
  },
  {
    "name": "SlideRight",
    "filename": "slide-right.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "right",
      "forward",
      "more"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 8h11M10.5 11l3-3-3-3M2.5 3.5h5M2.5 12.5h5\"/></g></svg>"
  },
  {
    "name": "SlideLeft",
    "filename": "slide-left.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "left",
      "back",
      "backward"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 8h11M5.5 5l-3 3 3 3M13.5 3.5h-5M13.5 12.5h-5\"/></g></svg>"
  },
  {
    "name": "RightArrowSmall",
    "filename": "right-arrow-small.svg",
    "category": "arrows",
    "tags": [],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m5.5 2.5 6 5.5-6 5.5\"/></svg>"
  },
  {
    "name": "RespondArrow",
    "filename": "respond-arrow.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "right",
      "forward",
      "more"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m13.5 8-5-4.5v3c-2.773 0-6 1.233-6 6a6.62 6.62 0 0 1 6-3v3z\"/></svg>"
  },
  {
    "name": "ResizeYSmall",
    "filename": "resize-y-small.svg",
    "category": "arrows",
    "tags": [
      "resize",
      "vertical",
      "arrow"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m10 6.5-2-2-2 2M10 9.5l-2 2-2-2M13.5 2.5h-11M13.5 13.5h-11\"/></g></svg>"
  },
  {
    "name": "ResizeXSmall",
    "filename": "resize-x-small.svg",
    "category": "arrows",
    "tags": [
      "resize",
      "horizontal",
      "arrow"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m9.5 10 2-2-2-2M6.5 10l-2-2 2-2M13.5 13.5v-11M2.5 13.5v-11\"/></g></svg>"
  },
  {
    "name": "ReplyArrow",
    "filename": "reply-arrow.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "left",
      "back",
      "backward"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m2.5 8 5-4.5v3c2.773 0 6 1.233 6 6a6.62 6.62 0 0 0-6-3v3z\"/></svg>"
  },
  {
    "name": "Reload",
    "filename": "reload.svg",
    "category": "arrows",
    "tags": [
      "loading",
      "loop",
      "process",
      "arrow",
      "refresh"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.591 7a5.5 5.5 0 0 1 10.694-.527\"/><path d=\"M13.5 2.5v4l-3.969-.493M13.409 9a5.5 5.5 0 0 1-10.694.527\"/><path d=\"M2.5 13.5v-4l3.969.493\"/></g></svg>"
  },
  {
    "name": "Refresh",
    "filename": "refresh.svg",
    "category": "arrows",
    "tags": [
      "loading",
      "loop",
      "process",
      "arrow",
      "refresh"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.606 11.008a5.5 5.5 0 1 1 .679-4.535\"/><path d=\"M13.5 2.5v4l-3.969-.493\"/></g></svg>"
  },
  {
    "name": "Redo",
    "filename": "redo.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "right",
      "redo",
      "forward",
      "more"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 5.5v3h-3\"/><path d=\"M3.5 10.5A4.5 4.5 0 0 1 8 6a4.5 4.5 0 0 1 3 1.15l1.5 1.35\"/></g></svg>"
  },
  {
    "name": "Logout",
    "filename": "logout.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "right",
      "forward",
      "more"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m10.5 5 3 3-3 3M13.5 8h-8M7.5 13.5H4A1.5 1.5 0 0 1 2.5 12V4A1.5 1.5 0 0 1 4 2.5h3.5\"/></g></svg>"
  },
  {
    "name": "LogOutSmall",
    "filename": "log-out-small.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "right",
      "forward",
      "more"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m10.5 4.5 3 3m0 0-3 3m3-3h-8M5.5 2.5h-1a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1\"/></g></svg>"
  },
  {
    "name": "LogIn",
    "filename": "log-in.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "right",
      "forward",
      "more"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 8h-9M8.5 11l3-3-3-3\"/><path d=\"M5.5 4.5V4A1.5 1.5 0 0 1 7 2.5h5A1.5 1.5 0 0 1 13.5 4v8a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 12v-.5\"/></g></svg>"
  },
  {
    "name": "LeftArrowSmall",
    "filename": "left-arrow-small.svg",
    "category": "arrows",
    "tags": [],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.5 13.5 4.5 8l6-5.5\"/></svg>"
  },
  {
    "name": "Input",
    "filename": "input.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "data",
      "file"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.5 8h-8M7.5 11l3-3-3-3\"/><path d=\"M2.5 5.5V4A1.5 1.5 0 0 1 4 2.5h8A1.5 1.5 0 0 1 13.5 4v8a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 12v-1.5\"/></g></svg>"
  },
  {
    "name": "Forward",
    "filename": "forward.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "top",
      "up",
      "upload",
      "push"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m5 5.5 3-3 3 3M8 2.5v8M2.5 12.5h11M2.5 9.5h3M10.5 9.5h3\"/></g></svg>"
  },
  {
    "name": "FormatRight",
    "filename": "format-right.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "right",
      "forward",
      "more"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m10.5 5 3 3-3 3M13.5 8h-7M2.5 3.5h6M2.5 12.5h6M2.5 9.5h2M2.5 6.5h2\"/></g></svg>"
  },
  {
    "name": "FormatLeft",
    "filename": "format-left.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "left",
      "back",
      "backward"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m5.5 11-3-3 3-3M9.5 8h-7M13.5 3.5h-6M13.5 12.5h-6M13.5 9.5h-2M13.5 6.5h-2\"/></g></svg>"
  },
  {
    "name": "FilesUpload",
    "filename": "files-upload.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "data",
      "file"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 2.5H4A1.5 1.5 0 0 0 2.5 4v8A1.5 1.5 0 0 0 4 13.5h8a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 12 2.5h-.5M2.5 10.5h11\"/><path d=\"M5.5 5 8 2.5 10.5 5M8 8.5v-6\"/></g></svg>"
  },
  {
    "name": "FilesDownload",
    "filename": "files-download.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "data",
      "file",
      "import",
      "download"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.5 2.5H4A1.5 1.5 0 0 0 2.5 4v8A1.5 1.5 0 0 0 4 13.5h8a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 12 2.5h-.5M2.5 10.5h11\"/><path d=\"M10.5 6 8 8.5 5.5 6M8 2.5v6\"/></g></svg>"
  },
  {
    "name": "Enlarge",
    "filename": "enlarge.svg",
    "category": "arrows",
    "tags": [
      "arrow"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m11.5 10.5-3.5 3-3.5-3M4.5 5.5l3.5-3 3.5 3\"/></g></svg>"
  },
  {
    "name": "EnlargeH",
    "filename": "enlarge-h.svg",
    "category": "arrows",
    "tags": [
      "arrow"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5.5 11.5 2.5 8l3-3.5M10.5 4.5l3 3.5-3 3.5\"/></g></svg>"
  },
  {
    "name": "Download",
    "filename": "download.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "data",
      "file",
      "import",
      "download"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5.5 5.5H4A1.5 1.5 0 0 0 2.5 7v4A1.5 1.5 0 0 0 4 12.5h8a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 12 5.5h-1.5\"/><path d=\"m11 7.5-3 3-3-3M8 2.5v8\"/></g></svg>"
  },
  {
    "name": "DownloadData",
    "filename": "download-data.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "import",
      "download",
      "file"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9.5 8.5v-4h-3v4h-2l3.5 4 3.5-4zM10.5 2.5H12A1.5 1.5 0 0 1 13.5 4v1.5M5.5 2.5H4A1.5 1.5 0 0 0 2.5 4v1.5M10.5 13.5H12a1.5 1.5 0 0 0 1.5-1.5v-1.5M5.5 13.5H4A1.5 1.5 0 0 1 2.5 12v-1.5\"/></g></svg>"
  },
  {
    "name": "DownArrowSmall",
    "filename": "down-arrow-small.svg",
    "category": "arrows",
    "tags": [],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m2.5 5.5 5.5 6 5.5-6\"/></svg>"
  },
  {
    "name": "DoubleArrowRight",
    "filename": "double-arrow-right.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "right",
      "forward",
      "more"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m3.5 2.5 6 5.5-6 5.5\"/><path d=\"m7.5 2.5 6 5.5-6 5.5\"/></g></svg>"
  },
  {
    "name": "DoubleArrowLeft",
    "filename": "double-arrow-left.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "left",
      "back",
      "backward"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.5 2.5 6.5 8l6 5.5\"/><path d=\"M8.5 2.5 2.5 8l6 5.5\"/></g></svg>"
  },
  {
    "name": "DataUpload",
    "filename": "data-upload.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "top",
      "up",
      "upload",
      "push",
      "data",
      "file"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9.5 6.5v4h-3v-4h-2l3.5-4 3.5 4z\"/><path d=\"M13.5 9.5V12a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 12V9.5\"/></g></svg>"
  },
  {
    "name": "DataDownload",
    "filename": "data-download.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "file",
      "data",
      "import",
      "download"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9.5 6.5v-4h-3v4h-2l3.5 4 3.5-4z\"/><path d=\"M13.5 9.5V12a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 12V9.5\"/></g></svg>"
  },
  {
    "name": "Cycle",
    "filename": "cycle.svg",
    "category": "arrows",
    "tags": [
      "loading",
      "loop",
      "process",
      "arrow",
      "refresh"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m5.5 2.5 2 2H6a3.5 3.5 0 1 0 0 7h.5M10.5 13.5l-2-2H10a3.5 3.5 0 1 0 0-7h-.5\"/></g></svg>"
  },
  {
    "name": "CurvedArrowRight",
    "filename": "curved-arrow-right.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "left",
      "forward",
      "refresh"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m10 6 3.5 3.5L10 13\"/><path d=\"M13.5 9.5H6a3.5 3.5 0 1 1 0-7h3.5\"/></g></svg>"
  },
  {
    "name": "CurvedArrowLeft",
    "filename": "curved-arrow-left.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "right",
      "back",
      "refresh"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 9.5H10a3.5 3.5 0 1 0 0-7H6.5\"/><path d=\"M6 6 2.5 9.5 6 13\"/></g></svg>"
  },
  {
    "name": "ConversionSmall",
    "filename": "conversion-small.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "horizontal",
      "flip",
      "directions",
      "swap",
      "conversion"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.5 9.5h-11l4 4M2.5 6.5h11l-4-4\"/></g></svg>"
  },
  {
    "name": "ChevronUp",
    "filename": "chevron-up.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "up"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m4 10.5 4-4 4 4\"/></svg>"
  },
  {
    "name": "ChevronUpSmall",
    "filename": "chevron-up-small.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "up"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m10 8.5-2-2-2 2\"/></svg>"
  },
  {
    "name": "ChevronRight",
    "filename": "chevron-right.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "right"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m6.5 12 4-4-4-4\"/></svg>"
  },
  {
    "name": "ChevronRightSmall",
    "filename": "chevron-right-small.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "right"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m7.5 10 2-2-2-2\"/></svg>"
  },
  {
    "name": "ChevronLeft",
    "filename": "chevron-left.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "left"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m10.5 12-4-4 4-4\"/></svg>"
  },
  {
    "name": "ChevronLeftSmall",
    "filename": "chevron-left-small.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "left"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m9.5 10-2-2 2-2\"/></svg>"
  },
  {
    "name": "ChevronDown",
    "filename": "chevron-down.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "down"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m4 6.5 4 4 4-4\"/></svg>"
  },
  {
    "name": "ChevronDownSmall",
    "filename": "chevron-down-small.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "down"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m10 6.5-2 2-2-2\"/></svg>"
  },
  {
    "name": "Backward",
    "filename": "backward.svg",
    "category": "arrows",
    "tags": [
      "arrow"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m5 10.5 3 3 3-3M8 13.5v-8M2.5 3.5h11M2.5 6.5h3M10.5 6.5h3\"/></g></svg>"
  },
  {
    "name": "ArrowsMaximize",
    "filename": "arrows-maximize.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "fullscreen",
      "expand"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" d=\"M13.5 1.5 9 6m4.5-4.5H9m4.5 0V6m-12 7.5L6 9m-4.5 4.5H6m-4.5 0V9\"/></svg>"
  },
  {
    "name": "ArrowUp",
    "filename": "arrow-up.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "up"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 2.5v11M4 6.5l4-4 4 4\"/></g></svg>"
  },
  {
    "name": "ArrowRight",
    "filename": "arrow-right.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "right"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.5 8h-11M9.5 4l4 4-4 4\"/></g></svg>"
  },
  {
    "name": "ArrowMinimize",
    "filename": "arrow-minimize.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "exit",
      "close",
      "shrink"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\"><path d=\"M9.5 6.5 14 2M9.5 6.5H14m-4.5 0V2M6.5 9.5 2 14m4.5-4.5H2m4.5 0V14\"/></g></svg>"
  },
  {
    "name": "ArrowLeft",
    "filename": "arrow-left.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "left"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 8h11M6.5 12l-4-4 4-4\"/></g></svg>"
  },
  {
    "name": "ArrowDown",
    "filename": "arrow-down.svg",
    "category": "arrows",
    "tags": [
      "arrow",
      "down"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 13.5v-11M12 9.5l-4 4-4-4\"/></g></svg>"
  },
  {
    "name": "XCircle",
    "filename": "x-circle.svg",
    "category": "alert",
    "tags": [
      "alert",
      "remove",
      "delete",
      "close",
      "circle"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path d=\"M1.5 7.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m9.5 5.5-4 4m0-4 4 4\"/></g></svg>"
  },
  {
    "name": "XCircle1",
    "filename": "x-circle-1.svg",
    "category": "alert",
    "tags": [
      "alert",
      "remove",
      "delete",
      "close",
      "square"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path d=\"M11.5 1.5h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m9.5 5.5-4 4m0-4 4 4\"/></g></svg>"
  },
  {
    "name": "WarningTriangle",
    "filename": "warning-triangle.svg",
    "category": "alert",
    "tags": [
      "alert",
      "warning",
      "triangle",
      "info"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\"><path d=\"M7.5 5.5v4\"/><path stroke-linejoin=\"round\" d=\"M7.5 11.5h.005\"/><path d=\"m1.862 12.776 5.19-10.382a.5.5 0 0 1 .895 0l5.191 10.382a.5.5 0 0 1-.447.724H2.309a.5.5 0 0 1-.447-.724Z\"/></g></svg>"
  },
  {
    "name": "WarningTriangleSmall",
    "filename": "warning-triangle-small.svg",
    "category": "alert",
    "tags": [
      "alert",
      "warning",
      "triangle",
      "info"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7.5 7v1.5M7.5 10.5h.005M2.5 12.5l5-9 5 9z\"/></g></svg>"
  },
  {
    "name": "WarningSquare",
    "filename": "warning-square.svg",
    "category": "alert",
    "tags": [
      "alert",
      "info",
      "square"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path d=\"M11.5 1.5h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Z\"/><path stroke-linecap=\"round\" d=\"M7.5 4.5v4\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 10.5h.005\"/></g></svg>"
  },
  {
    "name": "WarningRhomboidSmall",
    "filename": "warning-rhomboid-small.svg",
    "category": "alert",
    "tags": [
      "alert",
      "warning",
      "info"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m2.5 7.5 5-5 5 5-5 5zM7.5 5.5v2M7.5 9.5h.005\"/></g></svg>"
  },
  {
    "name": "WarningHexagonSmall",
    "filename": "warning-hexagon-small.svg",
    "category": "alert",
    "tags": [
      "alert",
      "warning",
      "info"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8 5.5v3M8 10.5h.005\"/><path d=\"m13 8-2.5 4.5h-5L3 8l2.5-4.5h5z\"/></g></svg>"
  },
  {
    "name": "WarningCircle",
    "filename": "warning-circle.svg",
    "category": "alert",
    "tags": [
      "alert",
      "info",
      "circle"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path d=\"M1.5 7.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z\"/><path stroke-linecap=\"round\" d=\"M7.5 4.5v4\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 10.5h.005\"/></g></svg>"
  },
  {
    "name": "TriangleWarningLarge",
    "filename": "triangle-warning-large.svg",
    "category": "alert",
    "tags": [
      "solid",
      "alert",
      "warning"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g fill=\"currentColor\"><path d=\"M8 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2m1-3.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z\"/><path d=\"M14.037 16H1.955a1.93 1.93 0 0 1-1.649-.932 2.04 2.04 0 0 1-.086-1.999L6.228 1.088A1.94 1.94 0 0 1 7.959 0h.005c.731 0 1.395.413 1.732 1.08l6.073 11.982a2.04 2.04 0 0 1-.082 2.003 1.93 1.93 0 0 1-1.65.935M7.965 2.087l-5.958 11.88L13.972 14z\"/></g></svg>"
  },
  {
    "name": "TriangleWarningLargeSolid",
    "filename": "triangle-warning-large-solid.svg",
    "category": "alert",
    "tags": [
      "solid",
      "alert",
      "warning"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M15.8 12.526 9.483.88A1.67 1.67 0 0 0 8.8.2a1.693 1.693 0 0 0-2.284.68L.2 12.526A1.678 1.678 0 0 0 1.686 15h12.628a1.7 1.7 0 0 0 1.308-.615 1.67 1.67 0 0 0 .178-1.859M8 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2m1-3.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z\"/></svg>"
  },
  {
    "name": "SquareWarningLarge",
    "filename": "square-warning-large.svg",
    "category": "alert",
    "tags": [
      "solid",
      "alert",
      "warning",
      "square"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g fill=\"currentColor\"><path d=\"M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m0 14H2V2h12z\"/><path d=\"M8.5 4h-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"/></g></svg>"
  },
  {
    "name": "SquareWarningLargeSolid",
    "filename": "square-warning-large-solid.svg",
    "category": "alert",
    "tags": [
      "solid",
      "alert",
      "warning",
      "square"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M8 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2m1-3.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z\"/></svg>"
  },
  {
    "name": "SquareQuestionLarge",
    "filename": "square-question-large.svg",
    "category": "alert",
    "tags": [
      "solid",
      "alert",
      "question",
      "square"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g fill=\"currentColor\"><path d=\"M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m0 14H2V2h12z\"/><path d=\"M8 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6.687 5.446c.357-.34.821-.546 1.313-.583 1 0 1 .518 1 .712 0 .366-.159.532-.65.954A3.12 3.12 0 0 0 7 9a1 1 0 0 0 2 0c0-.365.158-.532.649-.952A3.12 3.12 0 0 0 11 5.575c0-1.621-1.2-2.711-3.047-2.711a4.15 4.15 0 0 0-2.64 1.129 1 1 0 1 0 1.374 1.453\"/></g></svg>"
  },
  {
    "name": "SquareQuestionLargeSolid",
    "filename": "square-question-large-solid.svg",
    "category": "alert",
    "tags": [
      "solid",
      "alert",
      "question",
      "square"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M8 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2m1.647-4.952c-.491.42-.649.587-.649.952a1 1 0 1 1-2 0c0-1.315.811-2.011 1.348-2.471.491-.422.65-.588.65-.954 0-.194 0-.712-.998-.712-.456.025-.94.232-1.311.583a1 1 0 1 1-1.374-1.453 4.15 4.15 0 0 1 2.632-1.129h.003c1.844 0 3.047 1.09 3.047 2.711 0 1.316-.812 2.012-1.349 2.473z\"/></svg>"
  },
  {
    "name": "SquareInfoLarge",
    "filename": "square-info-large.svg",
    "category": "alert",
    "tags": [
      "solid",
      "alert",
      "info",
      "square"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g fill=\"currentColor\"><path d=\"M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m0 14H2V2h12z\"/><path d=\"M8.5 7h-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5M8 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"/></g></svg>"
  },
  {
    "name": "SquareInfoLargeSolid",
    "filename": "square-info-large-solid.svg",
    "category": "alert",
    "tags": [
      "solid",
      "alert",
      "info",
      "square"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M9 11.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2\"/></svg>"
  },
  {
    "name": "QuestionSquare",
    "filename": "question-square.svg",
    "category": "alert",
    "tags": [
      "alert",
      "question",
      "square"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path d=\"M11.5 1.5h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Z\"/><path stroke-linecap=\"round\" d=\"M5.5 6.5c0-1 .5-2 2-2s2.5 1 2 2-2 1-2 2.5\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 10.5h.005\"/></g></svg>"
  },
  {
    "name": "QuestionCircle",
    "filename": "question-circle.svg",
    "category": "alert",
    "tags": [
      "alert",
      "question",
      "circle"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path d=\"M1.5 7.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z\"/><path stroke-linecap=\"round\" d=\"M5.5 6.5c0-1 .5-2 2-2s2.5 1 2 2-2 1-2 2.5\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 10.5h.005\"/></g></svg>"
  },
  {
    "name": "Notifications",
    "filename": "notifications.svg",
    "category": "alert",
    "tags": [
      "alert",
      "alarm",
      "notification",
      "bell"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 7.5c0 2.035-.92 2.69-1.513 2.9-.26.093-.487.324-.487.6a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5c0-.276-.227-.507-.488-.6-.591-.21-1.512-.865-1.512-2.9 0-3.04-2.822-4.5-3.725-4.89a.76.76 0 0 0-.557-.022C6.306 2.904 3.5 4.15 3.5 7.5M7.5 2.5v-1\"/><path fill=\"currentColor\" fill-opacity=\".25\" d=\"M9.5 11.5a2 2 0 1 1-4 0z\"/></g></svg>"
  },
  {
    "name": "Megaphone",
    "filename": "megaphone.svg",
    "category": "alert",
    "tags": [
      "alert",
      "alarm",
      "notification",
      "bell"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m8.151 10.401.717 1.425a1.151 1.151 0 0 1-2.047 1.048L4.576 8.5\"/><path d=\"M12.5 10.5s-2.952-2-4.976-2H4.5a2 2 0 1 1 0-4h3.024c1.976 0 4.976-2 4.976-2z\"/></g></svg>"
  },
  {
    "name": "InfoSquare",
    "filename": "info-square.svg",
    "category": "alert",
    "tags": [
      "alert",
      "info",
      "square"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path d=\"M11.5 1.5h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Z\"/><path stroke-linecap=\"round\" d=\"M7.5 6.5v4\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 4.5h.005\"/></g></svg>"
  },
  {
    "name": "InfoCircle",
    "filename": "info-circle.svg",
    "category": "alert",
    "tags": [
      "alert",
      "info",
      "circle"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path d=\"M1.5 7.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z\"/><path stroke-linecap=\"round\" d=\"M7.5 6.5v4\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M7.5 4.5h.005\"/></g></svg>"
  },
  {
    "name": "Comment",
    "filename": "comment.svg",
    "category": "alert",
    "tags": [
      "alert",
      "alarm",
      "answer",
      "reply",
      "message",
      "chat"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13.5 7.267C13.5 4.634 11.037 2.5 8 2.5S2.5 4.634 2.5 7.267s2.463 4.766 5.5 4.766a6.4 6.4 0 0 0 1.123-.1L12 13.5v-3a4.46 4.46 0 0 0 1.5-3.233\"/></svg>"
  },
  {
    "name": "CircleWarningLarge",
    "filename": "circle-warning-large.svg",
    "category": "alert",
    "tags": [
      "solid",
      "alert",
      "warning",
      "circle"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g fill=\"currentColor\"><path d=\"M8 0a8 8 0 1 0 8 8 8.024 8.024 0 0 0-8-8m0 14a6 6 0 1 1 6-6 6.02 6.02 0 0 1-6 6\"/><path d=\"M8.5 4h-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"/></g></svg>"
  },
  {
    "name": "CircleWarningLargeSolid",
    "filename": "circle-warning-large-solid.svg",
    "category": "alert",
    "tags": [
      "solid",
      "alert",
      "warning",
      "circle"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8m0 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2m1-3.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z\"/></svg>"
  },
  {
    "name": "CircleRemoveLarge",
    "filename": "circle-remove-large.svg",
    "category": "alert",
    "tags": [
      "solid",
      "alert",
      "remove",
      "delete",
      "close",
      "circle"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g fill=\"currentColor\"><path d=\"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8m0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6\"/><path d=\"m9.414 8 1.768-1.768a.5.5 0 0 0 0-.707l-.707-.707a.5.5 0 0 0-.707 0L8 6.586 6.232 4.818a.5.5 0 0 0-.707 0l-.707.707a.5.5 0 0 0 0 .707L6.586 8 4.818 9.768a.5.5 0 0 0 0 .707l.707.707a.5.5 0 0 0 .707 0L8 9.414l1.768 1.768a.5.5 0 0 0 .707 0l.707-.707a.5.5 0 0 0 0-.707z\"/></g></svg>"
  },
  {
    "name": "CircleRemoveLargeSolid",
    "filename": "circle-remove-large-solid.svg",
    "category": "alert",
    "tags": [
      "solid",
      "alert",
      "remove",
      "delete",
      "close",
      "circle"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8m3.182 9.768a.5.5 0 0 1 0 .707l-.707.707a.5.5 0 0 1-.707 0L8 9.414l-1.768 1.768a.5.5 0 0 1-.707 0l-.707-.707a.5.5 0 0 1 0-.707L6.586 8 4.818 6.232a.5.5 0 0 1 0-.707l.707-.707a.5.5 0 0 1 .707 0L8 6.586l1.768-1.768a.5.5 0 0 1 .707 0l.707.707a.5.5 0 0 1 0 .707L9.414 8z\"/></svg>"
  },
  {
    "name": "CircleQuestionLarge",
    "filename": "circle-question-large.svg",
    "category": "alert",
    "tags": [
      "solid",
      "alert",
      "question",
      "circle"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g fill=\"currentColor\"><path d=\"M8 0a8 8 0 1 0 8 8 8.024 8.024 0 0 0-8-8m0 14a6 6 0 1 1 6-6 6.02 6.02 0 0 1-6 6\"/><path d=\"M8 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M8 10a1 1 0 0 1-1-1 3.06 3.06 0 0 1 1.322-2.427c.5-.425.622-.57.622-.906 0-.183 0-.667-.944-.667a2.05 2.05 0 0 0-1.258.561 1 1 0 1 1-1.373-1.456A4.08 4.08 0 0 1 7.948 3a2.68 2.68 0 0 1 2.993 2.666 3.05 3.05 0 0 1-1.318 2.426C9.126 8.519 9 8.663 9 9a1 1 0 0 1-1 1\"/></g></svg>"
  },
  {
    "name": "CircleQuestionLargeSolid",
    "filename": "circle-question-large-solid.svg",
    "category": "alert",
    "tags": [
      "solid",
      "alert",
      "question",
      "circle"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8m0 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2m1.623-4.908C9.126 8.519 9 8.663 9 9a1 1 0 1 1-2 0c0-1.294.795-1.976 1.322-2.427.497-.425.623-.57.623-.906 0-.183 0-.667-.944-.667a2.05 2.05 0 0 0-1.258.561A1 1 0 1 1 5.37 4.106a4.08 4.08 0 0 1 2.579-1.104h.003c1.812 0 2.993 1.071 2.993 2.666 0 1.293-.795 1.975-1.321 2.425z\"/></svg>"
  },
  {
    "name": "CircleInfoLarge",
    "filename": "circle-info-large.svg",
    "category": "alert",
    "tags": [
      "solid",
      "alert",
      "info",
      "circle"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g fill=\"currentColor\"><path d=\"M8 0a8 8 0 1 0 8 8 8.024 8.024 0 0 0-8-8m0 14a6 6 0 1 1 6-6 6.02 6.02 0 0 1-6 6\"/><path d=\"M8.5 7h-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5M8 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"/></g></svg>"
  },
  {
    "name": "CircleInfoLargeSolid",
    "filename": "circle-info-large-solid.svg",
    "category": "alert",
    "tags": [
      "solid",
      "alert",
      "info",
      "circle"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8m1 11.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2\"/></svg>"
  },
  {
    "name": "CircleCheckLarge",
    "filename": "circle-check-large.svg",
    "category": "alert",
    "tags": [
      "solid",
      "alert",
      "check",
      "circle"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g fill=\"currentColor\"><path d=\"M8 0C3.589 0 0 3.589 0 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8m0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6\"/><path d=\"M7 11a1 1 0 0 1-.707-.293l-2-2a.999.999 0 1 1 1.414-1.414L7 8.586l3.293-3.293a.999.999 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 7 11\"/></g></svg>"
  },
  {
    "name": "CircleCheckLargeSolid",
    "filename": "circle-check-large-solid.svg",
    "category": "alert",
    "tags": [
      "solid",
      "alert",
      "check",
      "circle"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8m3.707 6.707-4 4a.997.997 0 0 1-1.414 0l-2-2a.999.999 0 1 1 1.414-1.414L7 8.586l3.293-3.293a.999.999 0 1 1 1.414 1.414\"/></svg>"
  },
  {
    "name": "CheckSquare",
    "filename": "check-square.svg",
    "category": "alert",
    "tags": [
      "alert",
      "check",
      "square"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path d=\"M11.5 1.5h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m4.5 7.5 2 2 4-4\"/></g></svg>"
  },
  {
    "name": "CheckCircle",
    "filename": "check-circle.svg",
    "category": "alert",
    "tags": [
      "alert",
      "check",
      "circle"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\"><path d=\"M1.5 7.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z\"/><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m4.5 7.5 2 2 4-4\"/></g></svg>"
  },
  {
    "name": "Chat",
    "filename": "chat.svg",
    "category": "alert",
    "tags": [
      "alert",
      "alarm",
      "answer",
      "reply",
      "message",
      "chat"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.5 4v5A1.5 1.5 0 0 0 4 10.5h2l2 3 2-3h2A1.5 1.5 0 0 0 13.5 9V4A1.5 1.5 0 0 0 12 2.5H4A1.5 1.5 0 0 0 2.5 4\"/></svg>"
  },
  {
    "name": "ChatLarge",
    "filename": "chat-large.svg",
    "category": "alert",
    "tags": [
      "solid",
      "alert",
      "chat",
      "message",
      "reply",
      "answer"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M14 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2.6l2.7 2.7c.2.2.4.3.7.3s.5-.1.7-.3l2.7-2.7H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m0 11h-3c-.3 0-.5.1-.7.3L8 13.6l-2.3-2.3c-.2-.2-.4-.3-.7-.3H2V2h12z\"/></svg>"
  },
  {
    "name": "ChatLargeSolid",
    "filename": "chat-large-solid.svg",
    "category": "alert",
    "tags": [
      "solid",
      "alert",
      "answer"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M14 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.266l2.35 2.82a.5.5 0 0 0 .768 0l2.35-2.82H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2\"/></svg>"
  },
  {
    "name": "AlarmSmall",
    "filename": "alarm-small.svg",
    "category": "alert",
    "tags": [
      "alert",
      "alarm",
      "notification",
      "bell"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6.592 12.5a1.491 1.491 0 0 0 2.816 0M2.5 10.5h11M13.5 10.5a2.15 2.15 0 0 1-2-2V6a3.5 3.5 0 1 0-7 0v2.5a2.15 2.15 0 0 1-2 2\"/></g></svg>"
  },
  {
    "name": "AlarmSmallSolid",
    "filename": "alarm-small-solid.svg",
    "category": "alert",
    "tags": [
      "alert",
      "alarm",
      "notification",
      "bell",
      "solid"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g fill=\"currentColor\"><path d=\"M13.5 10A1.65 1.65 0 0 1 12 8.5V6a4 4 0 1 0-8 0v2.5A1.65 1.65 0 0 1 2.5 10a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1M8 14a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2\"/></g></svg>"
  }
];
