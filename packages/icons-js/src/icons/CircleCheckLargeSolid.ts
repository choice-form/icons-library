import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * circle-check-large-solid icon
 */
const CircleCheckLargeSolid: Icon = {
  name: 'circle-check-large-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8m3.707 6.707-4 4a.997.997 0 0 1-1.414 0l-2-2a.999.999 0 1 1 1.414-1.414L7 8.586l3.293-3.293a.999.999 0 1 1 1.414 1.414"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default CircleCheckLargeSolid;
