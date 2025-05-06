import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Mixed icon
 */
const Mixed: Icon = {
  name: 'mixed',
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
      d: "M9 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7",
      "stroke-opacity": ".5",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/><path stroke-opacity=".5" d="M9 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Mixed;
