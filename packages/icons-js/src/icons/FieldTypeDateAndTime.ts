import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * FieldTypeDateAndTime icon
 */
const FieldTypeDateAndTime: Icon = {
  name: 'field-type-date-and-time',
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
      d: "M13.5 10.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0M4.5 8.5h.005m-.005 2h.005",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 3.5h-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2m5-9h1a1 1 0 0 1 1 1v1m-6-2h2M2.5 6.5h5M4.5 2.5v2m6-2v2M11.5 11.5l-1-1v-1"/><path d="M13.5 10.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0M4.5 8.5h.005m-.005 2h.005"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldTypeDateAndTime;
