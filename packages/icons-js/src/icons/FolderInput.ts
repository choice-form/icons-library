import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * folder-input icon
 */
const FolderInput: Icon = {
  name: 'folder-input',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 6.5v-3a1 1 0 0 1 1-1h1.586a1 1 0 0 1 .707.293l1.414 1.414a1 1 0 0 0 .707.293H13.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-1M7.5 6.5l2 2m0 0-2 2m2-2h-8"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FolderInput;
