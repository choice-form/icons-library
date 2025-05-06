import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * organization-join icon
 */
const OrganizationJoin: Icon = {
  name: 'organization-join',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 13.5h3a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3m-2 0h-2a1 1 0 0 0-1 1v1m3 6h-2a1 1 0 0 1-1-1v-1M9.5 5.5h.005m-.005-2h.005M11.5 5.5h.005m-.005 2h.005m-.005 2h.005m-.005 2h.005m-.005-8h.005M7.5 7.5l2 2m0 0-2 2m2-2h-8"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default OrganizationJoin;
