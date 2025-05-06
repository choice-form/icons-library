import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * VariablesBoolean icon
 */
const VariablesBoolean: Icon = {
  name: 'variables-boolean',
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
      d: "M4.5 8a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4.5H6a3.5 3.5 0 1 0 0 7h3a3.5 3.5 0 1 0 0-7"/><path d="M4.5 8a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default VariablesBoolean;
