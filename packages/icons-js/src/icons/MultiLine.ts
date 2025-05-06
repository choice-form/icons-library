import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * MultiLine icon
 */
const MultiLine: Icon = {
  name: 'multi-line',
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
      d: "M1.5 12.5h2m0 0h10m-10 0v-11m0 11v2M5.5 8.5l2-2 3 3 3-3m0 0h-2m2 0v2M6.5 10.5l1-1m2-4 4-4m0 0h-2m2 0v2",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 12.5h2m0 0h10m-10 0v-11m0 11v2M5.5 8.5l2-2 3 3 3-3m0 0h-2m2 0v2M6.5 10.5l1-1m2-4 4-4m0 0h-2m2 0v2"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default MultiLine;
