import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Mask icon
 */
const Mask: Icon = {
  name: 'mask',
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
      d: "M5.5 6a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6 5.5h2.5a1 1 0 0 1 1 1V9m-6-3.5a1 1 0 0 0-1 1m3 6h1m-4-4v1m1 3a1 1 0 0 1-1-1m7 0a1 1 0 0 1-1 1"/><path d="M5.5 6a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Mask;
