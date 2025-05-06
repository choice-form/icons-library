import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * file-delete icon
 */
const FileDelete: Icon = {
  name: 'file-delete',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round"><path d="M8.5 9.5h-7m1 0v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4"/><path stroke-linejoin="round" d="M3.5 9.5v-2h3v2"/><path fill="currentColor" fill-opacity=".25" stroke-linejoin="round" d="m13.5 5.5-4-4v3a1 1 0 0 0 1 1z"/><path stroke-linejoin="round" d="M9.5 1.5h-4a1 1 0 0 0-1 1v2m9 1v7a1 1 0 0 1-1 1h-2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FileDelete;
