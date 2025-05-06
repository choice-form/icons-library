import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ai icon
 */
const Ai: Icon = {
  name: 'ai',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 9.5a5 5 0 0 0 5-5 5 5 0 0 0 5 5 5 5 0 0 0-5 5 5 5 0 0 0-5-5"/><path fill="currentColor" d="M10.5 3.5a2 2 0 0 0 2-2 2 2 0 0 0 2 2 2 2 0 0 0-2 2 2 2 0 0 0-2-2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Ai;
