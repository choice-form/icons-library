import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * folder-delete icon
 */
const FolderDelete: Icon = {
  name: 'folder-delete',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 12.5h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7.914a1 1 0 0 1-.707-.293L5.793 2.793a1 1 0 0 0-.707-.293H3.5a1 1 0 0 0-1 1v2"/><path d="M9.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0M4 9l3 3m0-3-3 3"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FolderDelete;
