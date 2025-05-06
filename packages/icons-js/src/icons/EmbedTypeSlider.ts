import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * embed-type-slider icon
 */
const EmbedTypeSlider: Icon = {
  name: 'embed-type-slider',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 2.5h-12a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1"/><path fill="currentColor" fill-opacity=".25" d="M10.5 12.5v-10h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1z"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default EmbedTypeSlider;
