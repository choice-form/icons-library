import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * row-normal icon
 */
const RowNormal: Icon = {
  name: 'row-normal',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12.5h4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5M12.5 7v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5M2.5 3v1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RowNormal;
