import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * boolean-union icon
 */
const BooleanUnion: Icon = {
  name: 'boolean-union',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path fill="currentColor" fill-opacity=".25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 2.5h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3v-3a1 1 0 0 0-1-1"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default BooleanUnion;
