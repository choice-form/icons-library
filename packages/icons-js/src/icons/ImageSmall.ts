import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * image-small icon
 */
const ImageSmall: Icon = {
  name: 'image-small',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" d="M2.5 4.5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2z"/><path fill="currentColor" d="M6 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/><path stroke="currentColor" stroke-linejoin="round" d="m3 12 6.5-6.5 3 2"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ImageSmall;
