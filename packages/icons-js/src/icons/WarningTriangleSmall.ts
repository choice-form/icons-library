import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * warning-triangle-small icon
 */
const WarningTriangleSmall: Icon = {
  name: 'warning-triangle-small',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 7v1.5M7.5 10.5h.005M2.5 12.5l5-9 5 9z"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default WarningTriangleSmall;
