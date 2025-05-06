import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-sorted-asc icon
 */
const FieldSortedAsc: Icon = {
  name: 'field-sorted-asc',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 12.5h10m-10-4h7m-7-4h5M11.5 8.5v-6m0 0-2 2m2-2 2 2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldSortedAsc;
