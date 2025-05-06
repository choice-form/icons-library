import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * image-import icon
 */
const ImageImport: Icon = {
  name: 'image-import',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path d="M12.5 8.5v-5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2"/><path d="m2 11 2.5-2.5L6 10l3.5-3.5M12.5 10.5l2 2m0 0-2 2m2-2h-7"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ImageImport;
