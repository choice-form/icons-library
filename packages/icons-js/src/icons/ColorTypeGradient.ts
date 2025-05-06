import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * color-type-gradient icon
 */
const ColorTypeGradient: Icon = {
  name: 'color-type-gradient',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor"><path d="M2.5 4.5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2z"/><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5h.005m-.005 2h.005m-.005 4h.005m-.005-2h.005"/><path stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".75" d="M6.5 4.5h.005m-.005 2h.005m-.005 4h.005m-.005-2h.005"/><path stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".5" d="M8.5 4.5h.005m-.005 2h.005m-.005 4h.005m-.005-2h.005"/><path stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".25" d="M10.5 4.5h.005m-.005 2h.005m-.005 4h.005m-.005-2h.005"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ColorTypeGradient;
