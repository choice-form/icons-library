import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * file-tree icon
 */
const FileTree: Icon = {
  name: 'file-tree',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 11.5h4m-4-4h4m-9-4h9m-12-1v5m0 0v3a1 1 0 0 0 1 1h2m-3-4h3M4.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M4.5 11.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FileTree;
