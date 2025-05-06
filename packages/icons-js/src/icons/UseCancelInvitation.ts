import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * use-cancel-invitation icon
 */
const UseCancelInvitation: Icon = {
  name: 'use-cancel-invitation',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="M12.5 4.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0M14.5 13.5v-1a3 3 0 0 0-3-3M8.5 9.5l2 2m0 0-2 2m2-2h-4m-5 0h1"/><path d="m6.5 8.5-4 6"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default UseCancelInvitation;
