import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * apply-variable icon
 */
const ApplyVariable: Icon = {
  name: 'apply-variable',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round"><path d="M7.5 7.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM2.5 7.5h5"/><path stroke-linejoin="round" d="m4 10 4.5 2.5L13 10V5L8.5 2.5 4 5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ApplyVariable;
