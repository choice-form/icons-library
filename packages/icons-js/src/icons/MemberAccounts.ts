import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * member-accounts icon
 */
const MemberAccounts: Icon = {
  name: 'member-accounts',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 13V3.5a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3A1.5 1.5 0 0 0 1.5 13m0 0A1.5 1.5 0 0 0 3 14.5h9.5a1 1 0 0 0 1-1V13"/><path fill="currentColor" fill-opacity=".25" d="M6.5 5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0M4.5 10.5v1h7v-1a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default MemberAccounts;
