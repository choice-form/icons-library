import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * field-freeze icon
 */
const FieldFreeze: Icon = {
  name: 'field-freeze',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5h-5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M9.5 10V9a1.5 1.5 0 0 1 3 0v1"/><path fill="currentColor" fill-opacity=".25" d="M5.5 13.5v-12h-4v12z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 5.5v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3m-7-4v12h-4v-12z"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FieldFreeze;
