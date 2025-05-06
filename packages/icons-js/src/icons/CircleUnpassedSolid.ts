import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * circle-unpassed-solid icon
 */
const CircleUnpassedSolid: Icon = {
  name: 'circle-unpassed-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path fill="currentColor" fill-rule="evenodd" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8M6.707 5.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414-1.414z" clip-rule="evenodd"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default CircleUnpassedSolid;
