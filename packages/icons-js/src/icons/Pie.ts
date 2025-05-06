import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Pie icon
 */
const Pie: Icon = {
  name: 'pie',
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
      d: "M9.5 6.5V2.6a5.01 5.01 0 0 1 3.9 3.9z",
      "fill-opacity": ".25",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 8.5a5 5 0 0 0 10 0h-5v-5a5 5 0 0 0-5 5"/><path fill="currentColor" fill-opacity=".25" d="M9.5 6.5V2.6a5.01 5.01 0 0 1 3.9 3.9z"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Pie;
