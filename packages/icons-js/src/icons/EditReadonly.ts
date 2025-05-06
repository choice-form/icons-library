import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * edit-readonly icon
 */
const EditReadonly: Icon = {
  name: 'edit-readonly',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m5.5 8.5-2 2-1 3 3-1 2-2m1-5 2.293-2.293a1 1 0 0 1 1.414 0l.586.586a1 1 0 0 1 0 1.414L10.5 7.5M9.5 4.5l2 2M2.5 2.5l11 11"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default EditReadonly;
