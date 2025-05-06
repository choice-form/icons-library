import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * appearance icon
 */
const Appearance: Icon = {
  name: 'appearance',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 1.5h5a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-5"/><path fill="currentColor" fill-opacity=".25" d="M7.5 1.5h-4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4z"/><path d="M4.5 4.5h1m-1 3h1m-1 3h1"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Appearance;
