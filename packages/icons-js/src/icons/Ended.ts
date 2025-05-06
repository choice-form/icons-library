import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ended icon
 */
const Ended: Icon = {
  name: 'ended',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 2.5h-11a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11m-8-8h-2v6h2m-2-3h2m2 3v-6l2 6v-6m2 0v6h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Ended;
