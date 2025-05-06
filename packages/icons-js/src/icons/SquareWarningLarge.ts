import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * square-warning-large icon
 */
const SquareWarningLarge: Icon = {
  name: 'square-warning-large',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g fill="currentColor"><path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m0 14H2V2h12z"/><path d="M8.5 4h-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default SquareWarningLarge;
