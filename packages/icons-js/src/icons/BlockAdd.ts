import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * block-add icon
 */
const BlockAdd: Icon = {
  name: 'block-add',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round"><path fill="currentColor" fill-opacity=".25" stroke-linejoin="round" d="M14.5 10.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0"/><path stroke-linejoin="round" d="M12.5 10.5h-4m2-2v4"/><path d="M12.5 1.5h-10a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1ZM4.5 7.5h-2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default BlockAdd;
