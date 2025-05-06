import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * DimensionalTransforms icon
 */
const DimensionalTransforms: Icon = {
  name: 'dimensional-transforms',
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
      d: "m3 5 1.5-1.5L6 5M11 10l1.5 1.5L11 13",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 3.5v8h8M4.5 11.5l3-3"/><path d="m3 5 1.5-1.5L6 5M11 10l1.5 1.5L11 13"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default DimensionalTransforms;
