import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * theme-sun-bright icon
 */
const ThemeSunBright: Icon = {
  name: 'theme-sun-bright',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 7.5a3 3 0 1 0 6 0 3 3 0 0 0-6 0M7.5 1.5v1m0 10v1m5-6h1m-11 0h-1M11.743 3.257l-.707.707m-7.072 7.072-.707.707m7.779-.707.707.707M3.964 3.964l-.707-.707"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ThemeSunBright;
