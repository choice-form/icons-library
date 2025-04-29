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
    "name": "TriangleUp",
    "filename": "triangle-up.svg",
    "category": "common",
    "tags": [
      "common",
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
    "category": "common",
    "tags": [
      "common",
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
    "category": "common",
    "tags": [
      "common",
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
    "category": "common",
    "tags": [
      "common",
      "arrow",
      "down"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.5 4.5h11l-5.5 8z\"/></svg>"
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
    "name": "Reload",
    "filename": "reload.svg",
    "category": "common",
    "tags": [
      "common",
      "loading",
      "loop",
      "process",
      "arrow"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.591 7a5.5 5.5 0 0 1 10.694-.527\"/><path d=\"M13.5 2.5v4l-3.969-.493M13.409 9a5.5 5.5 0 0 1-10.694.527\"/><path d=\"M2.5 13.5v-4l3.969.493\"/></g></svg>"
  },
  {
    "name": "Refresh",
    "filename": "refresh.svg",
    "category": "common",
    "tags": [
      "common",
      "loading",
      "loop",
      "process",
      "arrow"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.606 11.008a5.5 5.5 0 1 1 .679-4.535\"/><path d=\"M13.5 2.5v4l-3.969-.493\"/></g></svg>"
  },
  {
    "name": "Mixed",
    "filename": "mixed.svg",
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
    "name": "Cycle",
    "filename": "cycle.svg",
    "category": "common",
    "tags": [
      "common",
      "loading",
      "loop",
      "process",
      "arrow"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m5.5 2.5 2 2H6a3.5 3.5 0 1 0 0 7h.5M10.5 13.5l-2-2H10a3.5 3.5 0 1 0 0-7h-.5\"/></g></svg>"
  },
  {
    "name": "CurvedArrowRight",
    "filename": "curved-arrow-right.svg",
    "category": "common",
    "tags": [
      "common",
      "arrow",
      "left",
      "forward"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m10 6 3.5 3.5L10 13\"/><path d=\"M13.5 9.5H6a3.5 3.5 0 1 1 0-7h3.5\"/></g></svg>"
  },
  {
    "name": "CurvedArrowLeft",
    "filename": "curved-arrow-left.svg",
    "category": "common",
    "tags": [
      "common",
      "arrow",
      "right",
      "back"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2.5 9.5H10a3.5 3.5 0 1 0 0-7H6.5\"/><path d=\"M6 6 2.5 9.5 6 13\"/></g></svg>"
  },
  {
    "name": "ChevronUp",
    "filename": "chevron-up.svg",
    "category": "common",
    "tags": [
      "common",
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
    "category": "common",
    "tags": [
      "common",
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
    "category": "common",
    "tags": [
      "common",
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
    "category": "common",
    "tags": [
      "common",
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
    "category": "common",
    "tags": [
      "common",
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
    "category": "common",
    "tags": [
      "common",
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
    "category": "common",
    "tags": [
      "common",
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
    "category": "common",
    "tags": [
      "common",
      "arrow",
      "down"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m10 6.5-2 2-2-2\"/></svg>"
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
    "name": "ArrowUp",
    "filename": "arrow-up.svg",
    "category": "common",
    "tags": [
      "common",
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
    "category": "common",
    "tags": [
      "common",
      "arrow",
      "right"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.5 8h-11M9.5 4l4 4-4 4\"/></g></svg>"
  },
  {
    "name": "ArrowLeft",
    "filename": "arrow-left.svg",
    "category": "common",
    "tags": [
      "common",
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
    "category": "common",
    "tags": [
      "common",
      "arrow",
      "down"
    ],
    "width": 16,
    "height": 16,
    "optimizedSvg": "<svg width=\"16\" height=\"16\" fill=\"none\" viewBox=\"0 0 16 16\"><g stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 13.5v-11M12 9.5l-4 4-4-4\"/></g></svg>"
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
  }
];
