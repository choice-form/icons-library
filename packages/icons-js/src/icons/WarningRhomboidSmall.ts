import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * warning-rhomboid-small icon
 */
const WarningRhomboidSmall: Icon = {
  name: 'warning-rhomboid-small',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m2.5 7.5 5-5 5 5-5 5zM7.5 5.5v2M7.5 9.5h.005"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default WarningRhomboidSmall;
