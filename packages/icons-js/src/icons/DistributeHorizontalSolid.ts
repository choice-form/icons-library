import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * distribute-horizontal-solid icon
 */
const DistributeHorizontalSolid: Icon = {
  name: 'distribute-horizontal-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 2.5v10m8-10v10"/><path fill="currentColor" d="M6.5 4.5h2v6h-2z"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default DistributeHorizontalSolid;
