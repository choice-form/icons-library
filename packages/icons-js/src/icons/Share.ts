import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * share icon
 */
const Share: Icon = {
  name: 'share',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m10.5 2.5 3 3-3 3"/><path d="M13.5 5.5h-5a2 2 0 0 0-2 2v2"/><path d="M12.5 10.5V12a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 12V5A1.5 1.5 0 0 1 4 3.5h1.5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Share;
