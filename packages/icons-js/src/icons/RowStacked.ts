import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * row-stacked icon
 */
const RowStacked: Icon = {
  name: 'row-stacked',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12.5h2.5v-2H3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5M8.5 6.5v2H3a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5zM4.5 4.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h1.5z"/><path fill="currentColor" fill-opacity=".25" d="M7 12.5H5.5v-2H7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5M12 8.5H8.5v-2H12a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5M10 4.5H4.5v-2H10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RowStacked;
