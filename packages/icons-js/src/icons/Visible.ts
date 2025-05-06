import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * visible icon
 */
const Visible: Icon = {
  name: 'visible',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 8.576C12.873 6.237 10.5 4.5 8 4.5S3.127 6.237 2.5 8.576"/><path fill="currentColor" d="M8 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Visible;
