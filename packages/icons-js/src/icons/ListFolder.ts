import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * list-folder icon
 */
const ListFolder: Icon = {
  name: 'list-folder',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6.728 3.184 7.5 5.5h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-.999V3.5a1 1 0 0 1 1-.999h2.28a1 1 0 0 1 .948.684M7.5 5.5h-5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ListFolder;
