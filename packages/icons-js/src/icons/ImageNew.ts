import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * image-new icon
 */
const ImageNew: Icon = {
  name: 'image-new',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M14.5 3.5h-4m2 2v-4M2 13l2.5-2.5L6 12l3.5-3.5"/><path d="M12.5 8.5v4a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h4"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ImageNew;
