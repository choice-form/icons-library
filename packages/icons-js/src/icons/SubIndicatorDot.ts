import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * sub-indicator-dot icon
 */
const SubIndicatorDot: Icon = {
  name: 'sub-indicator-dot',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path fill="currentColor" d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default SubIndicatorDot;
