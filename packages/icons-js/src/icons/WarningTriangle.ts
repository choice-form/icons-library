import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * warning-triangle icon
 */
const WarningTriangle: Icon = {
  name: 'warning-triangle',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round"><path d="M7.5 5.5v4"/><path stroke-linejoin="round" d="M7.5 11.5h.005"/><path d="m1.862 12.776 5.19-10.382a.5.5 0 0 1 .895 0l5.191 10.382a.5.5 0 0 1-.447.724H2.309a.5.5 0 0 1-.447-.724Z"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default WarningTriangle;
