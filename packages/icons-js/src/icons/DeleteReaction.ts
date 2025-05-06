import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * delete-reaction icon
 */
const DeleteReaction: Icon = {
  name: 'delete-reaction',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 13.5a6 6 0 1 1 6-6m-4 2.236a3 3 0 0 1-2 .764 3 3 0 0 1-2-.764M15 12.5h-5m2.5 2.5v-5m-7-3.5h.005m3.995 0h.005"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default DeleteReaction;
