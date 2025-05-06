import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * EditReadonly icon
 */
const EditReadonly: Icon = {
  name: 'edit-readonly',
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
      d: "m5.5 8.5-2 2-1 3 3-1 2-2m1-5 2.293-2.293a1 1 0 0 1 1.414 0l.586.586a1 1 0 0 1 0 1.414L10.5 7.5M9.5 4.5l2 2M2.5 2.5l11 11",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m5.5 8.5-2 2-1 3 3-1 2-2m1-5 2.293-2.293a1 1 0 0 1 1.414 0l.586.586a1 1 0 0 1 0 1.414L10.5 7.5M9.5 4.5l2 2M2.5 2.5l11 11"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default EditReadonly;
