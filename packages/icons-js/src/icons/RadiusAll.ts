import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * RadiusAll icon
 */
const RadiusAll: Icon = {
  name: 'radius-all',
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
      d: "M9.5 12.5h1a2 2 0 0 0 2-2v-1m-7 3h-1a2 2 0 0 1-2-2v-1m0-4v-1a2 2 0 0 1 2-2h1m4 0h1a2 2 0 0 1 2 2v1",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 12.5h1a2 2 0 0 0 2-2v-1m-7 3h-1a2 2 0 0 1-2-2v-1m0-4v-1a2 2 0 0 1 2-2h1m4 0h1a2 2 0 0 1 2 2v1"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RadiusAll;
