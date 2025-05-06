import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * slide-right icon
 */
const SlideRight: Icon = {
  name: 'slide-right',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 8h11M10.5 11l3-3-3-3M2.5 3.5h5M2.5 12.5h5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default SlideRight;
