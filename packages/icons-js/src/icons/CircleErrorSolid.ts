import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * circle-error-solid icon
 */
const CircleErrorSolid: Icon = {
  name: 'circle-error-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path fill="currentColor" fill-rule="evenodd" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8M6.207 4.793a1 1 0 0 0-1.414 1.414L6.586 8 4.793 9.793a1 1 0 0 0 1.414 1.414L8 9.414l1.793 1.793a1 1 0 0 0 1.414-1.414L9.414 8l1.793-1.793a1 1 0 0 0-1.414-1.414L8 6.586z" clip-rule="evenodd"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default CircleErrorSolid;
