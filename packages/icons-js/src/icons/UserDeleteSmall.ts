import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * user-delete-small icon
 */
const UserDeleteSmall: Icon = {
  name: 'user-delete-small',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10 12.5v-1a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1M6.5 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M10.5 6 13 8.5M13 6l-2.5 2.5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default UserDeleteSmall;
