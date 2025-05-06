import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * hyperlink-broken icon
 */
const HyperlinkBroken: Icon = {
  name: 'hyperlink-broken',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round"><path d="M7.5 4.5 8 4a2.121 2.121 0 1 1 3 3l-.5.5M7.5 10.5 7 11a2.121 2.121 0 0 1-3-3l.5-.5"/><path stroke-linejoin="round" d="M11 9.5h1.5m-3 1.5v1.5M5.5 4V2.5M4 5.5H2.5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default HyperlinkBroken;
