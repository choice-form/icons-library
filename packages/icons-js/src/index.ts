import { Icon, IconsOptions } from "./types";
import { createElement, mergeAttributes } from "./utils";

// Export utilities
export { createElement, mergeAttributes };

// Export all icons and metadata
export * from "./icons";
// 导入kebab-case映射作为默认导出
import iconMapByKebabName from "./icons";
export { default } from "./icons";
export { iconMetadata } from "./icons/metadata";

// 这些值会在构建时由生成脚本从根目录的 icon-config.json 文件中注入
// 仅设置类名，其他属性保留 SVG 原始值
const iconConfig = {
  iconClassName: "choiceform-icon"
};

// Default attributes for SVG elements
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  class: iconConfig.iconClassName,
  "aria-hidden": "true",
};

/**
 * Replace all elements that have data-icon attribute with SVG icons
 */
export function createIcons(options: IconsOptions = { icons: {} }): void {
  if (typeof document === "undefined") {
    throw new Error("`createIcons()` only works in a browser environment.");
  }

  const nameAttr = options.nameAttr || "data-icon";
  const attrs = { ...defaultAttributes, ...(options.attrs || {}) };

  // 如果没有提供图标，使用默认的kebab-case映射
  let icons = options.icons || {};

  // 如果传入的是空对象且存在默认导出，则使用默认导出
  if (!Object.keys(icons).length && iconMapByKebabName) {
    icons = iconMapByKebabName;
  }

  if (!Object.keys(icons).length) {
    console.warn("No icons provided to createIcons function");
    return;
  }

  const elements = document.querySelectorAll(`[${nameAttr}]`);

  Array.from(elements).forEach((element) => {
    const iconName = element.getAttribute(nameAttr);
    if (!iconName) return;

    const icon = icons[iconName];
    if (!icon) {
      console.warn(`Icon '${iconName}' not found in the provided icons`);
      return;
    }

    // Get custom attributes from the element
    const customAttrs: Record<string, string> = {};
    Array.from(element.attributes)
      .filter((attr) => attr.name !== nameAttr)
      .forEach((attr) => {
        customAttrs[attr.name] = attr.value;
      });

    // Create SVG element
    const svgElement = createElement(icon, { ...attrs, ...customAttrs });

    // Replace the placeholder element with the SVG
    if (svgElement && element.parentNode) {
      element.parentNode.replaceChild(svgElement, element);
    }
  });
}
