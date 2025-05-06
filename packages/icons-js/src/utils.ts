import { Icon, IconNode } from "./types";

/**
 * Convert SVG string to DOM node
 */
export function svgToNode(svgString: string): IconNode {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgString, "image/svg+xml");
  const svg = doc.documentElement;

  return domNodeToIconNode(svg);
}

/**
 * Convert DOM node to icon node representation
 */
function domNodeToIconNode(domNode: Element): IconNode {
  const tagName = domNode.tagName.toLowerCase();

  // Create attributes object
  const attrs: Record<string, string> = {};
  Array.from(domNode.attributes).forEach((attr) => {
    attrs[attr.name] = attr.value;
  });

  // Process children recursively
  const children: IconNode[] = [];
  Array.from(domNode.childNodes).forEach((child) => {
    if (child.nodeType === 1) {
      // ELEMENT_NODE
      children.push(domNodeToIconNode(child as Element));
    }
  });

  return {
    tag: tagName,
    attrs: Object.keys(attrs).length ? attrs : undefined,
    children: children.length ? children : undefined,
  };
}

/**
 * Create HTML string from icon node
 */
export function nodeToHtml(node: IconNode): string {
  // Start tag
  let html = `<${node.tag}`;

  // Add attributes
  if (node.attrs) {
    Object.entries(node.attrs).forEach(([name, value]) => {
      html += ` ${name}="${value}"`;
    });
  }

  if (!node.children) {
    // Self-closing tag
    html += " />";
  } else {
    // Close opening tag
    html += ">";

    // Add children
    node.children.forEach((child) => {
      html += nodeToHtml(child);
    });

    // Closing tag
    html += `</${node.tag}>`;
  }

  return html;
}

/**
 * Create DOM element from icon node
 */
export function createElement(
  icon: Icon,
  attrs?: Record<string, string>
): HTMLElement {
  const svgString = icon.toSvg(attrs);
  const div = document.createElement("div");
  div.innerHTML = svgString;
  return div.firstElementChild as HTMLElement;
}

/**
 * Helper function to merge attributes
 */
export function mergeAttributes(
  baseAttrs: Record<string, string | string[]>,
  attrs?: Record<string, string>
): Record<string, string> {
  const mergedAttrs: Record<string, string> = {};

  // Process base attributes (convert array values to space-separated strings)
  Object.entries(baseAttrs).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      mergedAttrs[key] = value.join(" ");
    } else {
      mergedAttrs[key] = value;
    }
  });

  // Merge with custom attributes
  if (attrs) {
    Object.entries(attrs).forEach(([key, value]) => {
      if (key.startsWith("aria-") || key.startsWith("data-")) {
        // Special attributes are directly assigned
        mergedAttrs[key] = value;
      } else if (key === "class" && mergedAttrs.class) {
        // Merge classes
        mergedAttrs.class = `${mergedAttrs.class} ${value}`;
      } else {
        // Override other attributes
        mergedAttrs[key] = value;
      }
    });
  }

  return mergedAttrs;
}
