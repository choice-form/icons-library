import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * FieldSortedDesc icon
 */
const FieldSortedDesc: Icon = {
  name: 'field-sorted-desc',
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
      d: "M1.5 2.5h10m-10 4h7m-7 4h5M11.5 6.5v6m0 0-2-2m2 2 2-2",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 2.5h10m-10 4h7m-7 4h5M11.5 6.5v6m0 0-2-2m2 2 2-2"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldSortedDesc;
