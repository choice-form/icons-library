import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ellipsis-vertical-small icon
 */
const EllipsisVerticalSmall: Icon = {
  name: 'ellipsis-vertical-small',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8 4.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default EllipsisVerticalSmall;
