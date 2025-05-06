import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * embed-type-popover icon
 */
const EmbedTypePopover: Icon = {
  name: 'embed-type-popover',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 2.5h-12a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1"/><path fill="currentColor" fill-opacity=".25" d="M10 4.5H8a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5"/><path d="M11.5 10a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default EmbedTypePopover;
