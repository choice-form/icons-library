import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ApplyVariable icon
 */
const ApplyVariable: Icon = {
  name: 'apply-variable',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "m4 10 4.5 2.5L13 10V5L8.5 2.5 4 5",
      "stroke-linejoin": "round",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round"><path d="M7.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM2.5 7.5h5"/><path stroke-linejoin="round" d="m4 10 4.5 2.5L13 10V5L8.5 2.5 4 5"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ApplyVariable;
