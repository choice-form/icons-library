import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * bar icon
 */
const Bar: Icon = {
  name: 'bar',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 12.5h2m0 0h10m-10 0v-11m0 11v2m6.5-4h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5M7.5 10V4a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Bar;
