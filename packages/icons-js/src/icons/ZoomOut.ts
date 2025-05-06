import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * zoom-out icon
 */
const ZoomOut: Icon = {
  name: 'zoom-out',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" d="m10.5 10.5 3 3m-9-7h4m3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ZoomOut;
