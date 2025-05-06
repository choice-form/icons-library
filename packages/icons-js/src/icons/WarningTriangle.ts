import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * WarningTriangle icon
 */
const WarningTriangle: Icon = {
  name: 'warning-triangle',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "m1.862 12.776 5.19-10.382a.5.5 0 0 1 .895 0l5.191 10.382a.5.5 0 0 1-.447.724H2.309a.5.5 0 0 1-.447-.724Z",
      "stroke-linejoin": "round",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round"><path d="M7.5 5.5v4"/><path stroke-linejoin="round" d="M7.5 11.5h.005"/><path d="m1.862 12.776 5.19-10.382a.5.5 0 0 1 .895 0l5.191 10.382a.5.5 0 0 1-.447.724H2.309a.5.5 0 0 1-.447-.724Z"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default WarningTriangle;
