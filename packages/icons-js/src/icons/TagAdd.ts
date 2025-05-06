import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * tag-add icon
 */
const TagAdd: Icon = {
  name: 'tag-add',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 10.5v4M10.5 12.5h4M11.892 4.5A3.54 3.54 0 0 1 11 8l-3 3a3.54 3.54 0 0 1-3.5.892m5-9.784A3.54 3.54 0 0 0 6 3L3 6a3.54 3.54 0 0 0-.892 3.5M12.5 1.5l-4 4m-3 3-4 4"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default TagAdd;
