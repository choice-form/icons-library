import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * grid-interface icon
 */
const GridInterface: Icon = {
  name: 'grid-interface',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 2.5h-4v4h4zM13.5 2.5h-4v4h4zM6.5 9.5h-4v4h4zM13.5 9.5h-4v4h4z"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default GridInterface;
