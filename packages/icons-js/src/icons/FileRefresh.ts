import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * FileRefresh icon
 */
const FileRefresh: Icon = {
  name: 'file-refresh',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      "fill-opacity": ".25",
      d: "m7.422 9.095 1.932.517.517-1.931",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path fill="currentColor" fill-opacity=".25" d="m13.5 5.5-4-4v3a1 1 0 0 0 1 1z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 1.5h-4a1 1 0 0 0-1 1v2m5-3 4 4m-4-4v3a1 1 0 0 0 1 1h3m0 0v7a1 1 0 0 1-1 1h-2M9.364 9.465A4 4 0 1 0 9.208 12"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.422 9.095 1.932.517.517-1.931"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FileRefresh;
