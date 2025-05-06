import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * image-delete icon
 */
const ImageDelete: Icon = {
  name: 'image-delete',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="M4.5 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path stroke-linejoin="round" d="M12.5 5.5v-2a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3M2 11l2.5-2.5"/><path d="M14.5 9.5h-7m1 0v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4"/><path stroke-linejoin="round" d="M9.5 9.5v-2h3v2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ImageDelete;
