import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * FieldAdd icon
 */
const FieldAdd: Icon = {
  name: 'field-add',
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
      d: "M3.5 4.5v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2m4 9h2a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4",
      "fill-opacity": ".25",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 10.5h-4m2-2v4"/><path fill="currentColor" fill-opacity=".25" d="M9.5 10.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0"/><path d="M3.5 4.5v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2m4 9h2a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldAdd;
