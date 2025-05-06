import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * slide-left icon
 */
const SlideLeft: Icon = {
  name: 'slide-left',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 8h11M5.5 5l-3 3 3 3M13.5 3.5h-5M13.5 12.5h-5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default SlideLeft;
