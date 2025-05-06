import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * organization-switch icon
 */
const OrganizationSwitch: Icon = {
  name: 'organization-switch',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 12.5H6A2.5 2.5 0 0 0 7.5 8m-2-.5H4A2.5 2.5 0 0 0 2.5 12"/><path d="m6.5 10.5-2 2 2 2M3.5 5.5l2 2-2 2M7.5 5.5v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3M9.5 5.5h.005m-.005-2h.005M11.5 5.5h.005m-.005 2h.005m-.005 2h.005m-.005 2h.005m-.005-8h.005"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default OrganizationSwitch;
