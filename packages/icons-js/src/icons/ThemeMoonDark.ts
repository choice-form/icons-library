import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * theme-moon-dark icon
 */
const ThemeMoonDark: Icon = {
  name: 'theme-moon-dark',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 9a4.5 4.5 0 0 0 8.247 2.493C6.5 11.493 3.5 7.5 6.253 4.507 3.711 4.367 1.5 6.449 1.5 9M7.5 2.5h2m-1-1v2M11.5 4.5v4m-2-2h4"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ThemeMoonDark;
