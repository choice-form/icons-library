import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * zoom-in-small icon
 */
const ZoomInSmall: Icon = {
  name: 'zoom-in-small',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.5 12.5-2.175-2.175M7.5 6v3M6 7.5h3m-1.5 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ZoomInSmall;
