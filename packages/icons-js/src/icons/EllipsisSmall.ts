import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ellipsis-small icon
 */
const EllipsisSmall: Icon = {
  name: 'ellipsis-small',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M12 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M4 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default EllipsisSmall;
