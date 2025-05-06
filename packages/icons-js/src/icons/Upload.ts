import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * upload icon
 */
const Upload: Icon = {
  name: 'upload',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 7.5H4A1.5 1.5 0 0 0 2.5 9v3A1.5 1.5 0 0 0 4 13.5h8a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 12 7.5h-1.5M5 5.5l3-3 3 3M8 10.5v-8"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Upload;
