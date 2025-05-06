import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * folder-open icon
 */
const FolderOpen: Icon = {
  name: 'folder-open',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.5 9.5.772-2.316a1 1 0 0 1 .949-.684H13.5m0 0a.72.72 0 0 1 .684.949l-1.456 4.367a1 1 0 0 1-.949.684H2.5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h1.586a1 1 0 0 1 .707.293l1.414 1.414a1 1 0 0 0 .707.293H12.5a1 1 0 0 1 1 1z"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FolderOpen;
