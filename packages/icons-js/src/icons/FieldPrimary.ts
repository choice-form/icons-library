import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * FieldPrimary icon
 */
const FieldPrimary: Icon = {
  name: 'field-primary',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      "fill-opacity": ".25",
      d: "M2.5 1.5v12m10-7-8-4v8z",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path fill="currentColor" fill-opacity=".25" d="m4.5 2.5 8 4-8 4z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 1.5v12m10-7-8-4v8z"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldPrimary;
