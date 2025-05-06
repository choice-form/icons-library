import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * image-ai icon
 */
const ImageAi: Icon = {
  name: 'image-ai',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke-linecap="round" stroke-linejoin="round"><path stroke="currentColor" d="M4.5 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path stroke="currentColor" d="M12.5 8.5v4a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h4"/><path stroke="currentColor" d="m2 13 2.5-2.5L6 12l3.5-3.5"/><path fill="#AB0A83" stroke="#AB0A83" d="M10.5 3.5a2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0-2 2 2 2 0 0 0-2-2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ImageAi;
