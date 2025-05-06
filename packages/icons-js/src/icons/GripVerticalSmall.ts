import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * grip-vertical-small icon
 */
const GripVerticalSmall: Icon = {
  name: 'grip-vertical-small',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M6 4.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M6 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M10 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M10 4.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M10 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default GripVerticalSmall;
