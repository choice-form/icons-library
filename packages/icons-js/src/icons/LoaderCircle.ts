import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * loader-circle icon
 */
const LoaderCircle: Icon = {
  name: 'loader-circle',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path stroke-opacity=".25" d="M2.5 8a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0"/><path d="M13.5 8A5.5 5.5 0 0 0 8 2.5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default LoaderCircle;
