import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * FieldTypeSystemDate icon
 */
const FieldTypeSystemDate: Icon = {
  name: 'field-type-system-date',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      stroke: "currentColor",
      d: "M4.5 3.5h-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5m2-9h1a1 1 0 0 1 1 1v1m-6-2h2M2.5 6.5h8M4.5 2.5v2m6-2v2M4.5 8.5h.005m-.005 2h.005M6.5 8.5h.005m-.005 2h.005M8.5 8.5h.005",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke-linecap="round" stroke-linejoin="round"><path stroke="#05F" d="M10.5 13.5 12 12m0 0-2.5-1.5L11 9m1 3 1.5-1.5L11 9m1.5-1.5L11 9"/><path stroke="currentColor" d="M4.5 3.5h-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5m2-9h1a1 1 0 0 1 1 1v1m-6-2h2M2.5 6.5h8M4.5 2.5v2m6-2v2M4.5 8.5h.005m-.005 2h.005M6.5 8.5h.005m-.005 2h.005M8.5 8.5h.005"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeSystemDate;
