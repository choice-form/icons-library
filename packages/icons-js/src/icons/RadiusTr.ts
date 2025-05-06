import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * radius-tr icon
 */
const RadiusTr: Icon = {
  name: 'radius-tr',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" d="M12.5 11.5v-4a4 4 0 0 0-4-4h-4"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RadiusTr;
