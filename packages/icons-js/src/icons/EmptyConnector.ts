import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * empty-connector icon
 */
const EmptyConnector: Icon = {
  name: 'empty-connector',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.892 5.5A3.54 3.54 0 0 1 12 9l-3 3a3.54 3.54 0 0 1-3.5.892m5-9.784A3.54 3.54 0 0 0 7 4L4 7a3.54 3.54 0 0 0-.892 3.5M14.5 1.5l-5 5m-3 3-5 5"/><path stroke-opacity=".25" d="M14.636 4.5A7.503 7.503 0 0 1 4.5 14.636M1.364 11.5a7.503 7.503 0 0 1 10.381-10"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default EmptyConnector;
