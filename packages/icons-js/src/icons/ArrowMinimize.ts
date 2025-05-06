import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * arrow-minimize icon
 */
const ArrowMinimize: Icon = {
  name: 'arrow-minimize',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><path d="M9.5 6.5 14 2M9.5 6.5H14m-4.5 0V2M6.5 9.5 2 14m4.5-4.5H2m4.5 0V14"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ArrowMinimize;
