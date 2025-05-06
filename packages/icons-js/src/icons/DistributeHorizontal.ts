import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * distribute-horizontal icon
 */
const DistributeHorizontal: Icon = {
  name: 'distribute-horizontal',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 2.5v10m8-10v10m-3-8h-2v6h2z"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default DistributeHorizontal;
