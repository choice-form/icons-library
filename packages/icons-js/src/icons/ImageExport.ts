import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * image-export icon
 */
const ImageExport: Icon = {
  name: 'image-export',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m6.5 7.5 2 2m0 0-2 2m2-2h-7M5.5 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M14.5 10.5 11 7l-1 1"/><path d="M2.5 7.5v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ImageExport;
