import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * packaged icon
 */
const Packaged: Icon = {
  name: 'packaged',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m7.276 1.612-5.5 2.75a.5.5 0 0 0-.276.447v6.382a.5.5 0 0 0 .276.447l5.5 2.75a.5.5 0 0 0 .448 0l5.5-2.75a.5.5 0 0 0 .276-.447V4.809a.5.5 0 0 0-.276-.447l-5.5-2.75a.5.5 0 0 0-.448 0M11.5 5.5l-4 2m0 0-4-2m4 2v5"/><path d="M3.5 5.5v5l4 2M11.5 7.5v3l-2 1M5.5 4.5l2-1 2 1"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Packaged;
