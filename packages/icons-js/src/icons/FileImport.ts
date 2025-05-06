import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * file-import icon
 */
const FileImport: Icon = {
  name: 'file-import',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path fill="currentColor" fill-opacity=".25" d="m13.5 5.5-4-4v3a1 1 0 0 0 1 1z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 1.5h-4a1 1 0 0 0-1 1v6m5-7 4 4m-4-4v3a1 1 0 0 0 1 1h3m0 0v8a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-1M7.5 8.5l2 2m0 0-2 2m2-2h-8"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FileImport;
