import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * FolderRemove icon
 */
const FolderRemove: Icon = {
  name: 'folder-remove',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 12.5h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7.914a1 1 0 0 1-.707-.293L5.793 2.793a1 1 0 0 0-.707-.293H3.5a1 1 0 0 0-1 1v2M7.5 10.5h-4"/><path d="M9.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FolderRemove;
