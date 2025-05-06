import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * file-sub icon
 */
const FileSub: Icon = {
  name: 'file-sub',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 2.5v5a1 1 0 0 0 1 1h4M12.5 8.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FileSub;
