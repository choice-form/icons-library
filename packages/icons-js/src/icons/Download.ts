import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * download icon
 */
const Download: Icon = {
  name: 'download',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 5.5H4A1.5 1.5 0 0 0 2.5 7v4A1.5 1.5 0 0 0 4 12.5h8a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 12 5.5h-1.5"/><path d="m11 7.5-3 3-3-3M8 2.5v8"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Download;
