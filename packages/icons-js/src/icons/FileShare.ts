import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * FileShare icon
 */
const FileShare: Icon = {
  name: 'file-share',
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
      d: "M10.5 8.5v-2c-1.832 0-3.858.152-5 2 0-3.77 2.688-5 5-5v-2l4 3.5z",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 2.5h-3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3"/><path d="M10.5 8.5v-2c-1.832 0-3.858.152-5 2 0-3.77 2.688-5 5-5v-2l4 3.5z"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FileShare;
