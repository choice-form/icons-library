import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * distribute-vertical-solid icon
 */
const DistributeVerticalSolid: Icon = {
  name: 'distribute-vertical-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 3.5h-10m10 8h-10"/><path fill="currentColor" d="M10.5 6.5v2h-6v-2z"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default DistributeVerticalSolid;
