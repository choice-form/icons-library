import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * MinWidth icon
 */
const MinWidth: Icon = {
  name: 'min-width',
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
      d: "M2.5 7.5h3m0 0L4 6m1.5 1.5L4 9m8.5-1.5h-3m0 0L11 9M9.5 7.5 11 6M7.5 2.5v10",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 7.5h3m0 0L4 6m1.5 1.5L4 9m8.5-1.5h-3m0 0L11 9M9.5 7.5 11 6M7.5 2.5v10"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default MinWidth;
