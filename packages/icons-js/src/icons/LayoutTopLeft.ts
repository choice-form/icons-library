import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * layout-top-left icon
 */
const LayoutTopLeft: Icon = {
  name: 'layout-top-left',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 2.5h-10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1"/><path fill="currentColor" d="M6.5 7.5v-5h-4a1 1 0 0 0-1 1v4z"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default LayoutTopLeft;
