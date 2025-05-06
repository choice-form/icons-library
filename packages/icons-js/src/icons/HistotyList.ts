import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * histoty-list icon
 */
const HistotyList: Icon = {
  name: 'histoty-list',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 1.5h-11a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1M4.5 4.5h1m2 0h4m-7 3h1m2 0h4m-7 3h1m2 0h4"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default HistotyList;
