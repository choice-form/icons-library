import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Use icon
 */
const Use: Icon = {
  name: 'use',
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
      d: "M4.5 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0M2.5 13.5v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 4.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0M2.5 13.5v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Use;
