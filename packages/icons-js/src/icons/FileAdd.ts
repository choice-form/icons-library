import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * file-add icon
 */
const FileAdd: Icon = {
  name: 'file-add',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path fill="currentColor" fill-opacity=".25" d="m14.5 5.5-4-4v3a1 1 0 0 0 1 1z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5h-4a1 1 0 0 0-1 1v2m5-3 4 4m-4-4v3a1 1 0 0 0 1 1h3m0 0v8a1 1 0 0 1-1 1h-3M7.5 10.5h-4m2 2v-4"/><path fill="currentColor" fill-opacity=".25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FileAdd;
