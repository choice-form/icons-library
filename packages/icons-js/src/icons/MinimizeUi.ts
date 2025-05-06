import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * minimize-ui icon
 */
const MinimizeUi: Icon = {
  name: 'minimize-ui',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="M12.6 2.5H3.4a.9.9 0 0 0-.9.9v8.2a.9.9 0 0 0 .9.9h9.2a.9.9 0 0 0 .9-.9V3.4a.9.9 0 0 0-.9-.9"/><path d="M6.5 4.5v6"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default MinimizeUi;
