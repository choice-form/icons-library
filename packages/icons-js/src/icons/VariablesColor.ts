import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * VariablesColor icon
 */
const VariablesColor: Icon = {
  name: 'variables-color',
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
      d: "M8 3C5.25 3 3 5.25 3 8s2.25 5 5 5a.826.826 0 0 0 .824-.844.86.86 0 0 0-.219-.562.75.75 0 0 1-.219-.563.82.82 0 0 1 .835-.834h.998a2.79 2.79 0 0 0 2.777-2.777C12.982 5.006 10.73 3 8 3",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" d="M8.75 5.5a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5M10.75 7.5a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5M6.25 6a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5M5.25 8.5a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5"/><path d="M8 3C5.25 3 3 5.25 3 8s2.25 5 5 5a.826.826 0 0 0 .824-.844.86.86 0 0 0-.219-.562.75.75 0 0 1-.219-.563.82.82 0 0 1 .835-.834h.998a2.79 2.79 0 0 0 2.777-2.777C12.982 5.006 10.73 3 8 3"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default VariablesColor;
