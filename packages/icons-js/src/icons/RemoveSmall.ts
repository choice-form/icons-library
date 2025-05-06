import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * remove-small icon
 */
const RemoveSmall: Icon = {
  name: 'remove-small',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.5 3.5 9 9m0-9-9 9"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RemoveSmall;
