import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * TransformsDepth icon
 */
const TransformsDepth: Icon = {
  name: 'transforms-depth',
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
      d: "M4.5 5.5v6h6M4.5 11.5l3-3",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M4.5 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path d="M4.5 5.5v6h6M4.5 11.5l3-3"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default TransformsDepth;
