import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * image-duplicate icon
 */
const ImageDuplicate: Icon = {
  name: 'image-duplicate',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 4.5-4.5 3 3"/><path d="M12.5 1.5h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1"/><path d="M3.25 6.5H2.5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-.75M7.5 3.5h.005"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ImageDuplicate;
