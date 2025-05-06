import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * matrix icon
 */
const Matrix: Icon = {
  name: 'matrix',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.5 5.5h8m-8 4h8m-6-6v8m4-8v8"/><path d="M11.5 1.5h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Z"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Matrix;
