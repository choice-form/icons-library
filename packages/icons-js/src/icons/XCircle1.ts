import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * x-circle1 icon
 */
const XCircle1: Icon = {
  name: 'x-circle1',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor"><path d="M11.5 1.5h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Z"/><path stroke-linecap="round" stroke-linejoin="round" d="m9.5 5.5-4 4m0-4 4 4"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default XCircle1;
