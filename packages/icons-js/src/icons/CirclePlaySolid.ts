import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * circle-play-solid icon
 */
const CirclePlaySolid: Icon = {
  name: 'circle-play-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path fill="currentColor" fill-rule="evenodd" d="M0 8c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8m6.528-2.882a1 1 0 0 1 1.027.05l2.99 1.993a1 1 0 0 1 0 1.678l-2.99 1.993A1 1 0 0 1 6 10V6a1 1 0 0 1 .528-.882" clip-rule="evenodd"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default CirclePlaySolid;
