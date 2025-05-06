import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * padding-per icon
 */
const PaddingPer: Icon = {
  name: 'padding-per',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 10.5v-6M12.5 10.5v-6M4.5 2.5h6M4.5 12.5h6"/><path stroke-opacity=".5" d="M9.5 4.5h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default PaddingPer;
