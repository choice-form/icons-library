import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ranking icon
 */
const Ranking: Icon = {
  name: 'ranking',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 3.5h6m-6 4h4m-4 4h2M3.5 1.5v12m0-12-2 2m2-2 2 2m-2 10 2-2m-2 2-2-2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Ranking;
