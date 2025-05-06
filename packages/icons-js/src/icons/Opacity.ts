import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * opacity icon
 */
const Opacity: Icon = {
  name: 'opacity',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 2.5h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1"/><path stroke-opacity=".25" d="M4.5 10.5h.005m1.995-2h.005m1.995-2h.005m1.995-2h.005m-.005 2h.005M8.5 8.5h.005m-2.005 2h.005m1.995 0h.005m1.995 0h.005m-.005-2h.005"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Opacity;
