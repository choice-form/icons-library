import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Hidden icon
 */
const Hidden: Icon = {
  name: 'hidden',
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
      d: "M2.5 5.5c.627 2.34 3 4.077 5.5 4.077s4.873-1.738 5.5-4.077M8 10v1.5M11.5 8.5 13 10M4.5 8.5 3 10",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 5.5c.627 2.34 3 4.077 5.5 4.077s4.873-1.738 5.5-4.077M8 10v1.5M11.5 8.5 13 10M4.5 8.5 3 10"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Hidden;
