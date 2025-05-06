import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * reload icon
 */
const Reload: Icon = {
  name: 'reload',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.591 7a5.5 5.5 0 0 1 10.694-.527"/><path d="M13.5 2.5v4l-3.969-.493M13.409 9a5.5 5.5 0 0 1-10.694.527"/><path d="M2.5 13.5v-4l3.969.493"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Reload;
