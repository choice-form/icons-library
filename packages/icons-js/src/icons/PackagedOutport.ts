import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * packaged-outport icon
 */
const PackagedOutport: Icon = {
  name: 'packaged-outport',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 8.5V4.809a.5.5 0 0 0-.276-.447l-5.5-2.75a.5.5 0 0 0-.448 0l-5.5 2.75a.5.5 0 0 0-.276.447v6.382a.5.5 0 0 0 .276.447L6.5 14M3.5 5.5l4 2m0 0 4-2m-4 2v5"/><path d="M3.5 5.5v5l4 2M9.5 4.5l-2-1-2 1M12.5 10.5l2 2m0 0-2 2m2-2h-5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default PackagedOutport;
