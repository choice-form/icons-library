import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * FieldTypeArray icon
 */
const FieldTypeArray: Icon = {
  name: 'field-type-array',
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
      d: "M4.5 3.5h-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1m6-8h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1M4.5 7.5h.005M7.5 7.5h.005M10.5 7.5h.005",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 3.5h-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1m6-8h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1M4.5 7.5h.005M7.5 7.5h.005M10.5 7.5h.005"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeArray;
