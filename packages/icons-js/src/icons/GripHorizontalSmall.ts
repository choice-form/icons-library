import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * grip-horizontal-small icon
 */
const GripHorizontalSmall: Icon = {
  name: 'grip-horizontal-small',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M12 6.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M4 6.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M12 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M4 10.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default GripHorizontalSmall;
