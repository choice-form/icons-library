import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * file-edit icon
 */
const FileEdit: Icon = {
  name: 'file-edit',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 1.5h-5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3"/><path fill="currentColor" fill-opacity=".25" d="m6.5 9.5 1-3 4.646-4.646a.5.5 0 0 1 .708 0l1.292 1.292a.5.5 0 0 1 0 .708L9.5 8.5z"/><path d="M9.5 10.5V12a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V9a.5.5 0 0 1 .5-.5h.5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FileEdit;
