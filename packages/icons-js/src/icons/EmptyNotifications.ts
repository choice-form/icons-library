import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * empty-notifications icon
 */
const EmptyNotifications: Icon = {
  name: 'empty-notifications',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round"><path d="M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5"/><path stroke-linejoin="round" d="M.5 13.5h14s-2.5-1.5-3-4c-.413-2.063-1.506-3.445-3-3.865V5.5a1 1 0 0 0-2 0v.135c-1.494.42-2.587 1.802-3 3.865-.5 2.5-3 4-3 4"/><path fill="currentColor" fill-opacity=".25" stroke-linejoin="round" d="M9.5 13.5a2 2 0 1 1-4 0z"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default EmptyNotifications;
