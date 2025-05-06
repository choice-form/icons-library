import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * FileSolid icon
 */
const FileSolid: Icon = {
  name: 'file-solid',
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
      d: "M8.5 5.5v-3l3 3z",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 2.5h2v4a1 1 0 0 0 1 1h4v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1"/><path d="M8.5 5.5v-3l3 3z"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FileSolid;
