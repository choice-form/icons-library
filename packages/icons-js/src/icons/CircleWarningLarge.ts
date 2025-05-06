import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * circle-warning-large icon
 */
const CircleWarningLarge: Icon = {
  name: 'circle-warning-large',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g fill="currentColor"><path d="M8 0a8 8 0 1 0 8 8 8.024 8.024 0 0 0-8-8m0 14a6 6 0 1 1 6-6 6.02 6.02 0 0 1-6 6"/><path d="M8.5 4h-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default CircleWarningLarge;
