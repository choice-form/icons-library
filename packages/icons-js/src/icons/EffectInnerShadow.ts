import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * effect-inner-shadow icon
 */
const EffectInnerShadow: Icon = {
  name: 'effect-inner-shadow',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.6 2.5H4.4a.9.9 0 0 0-.9.9v7.2a.9.9 0 0 0 .9.9h7.2a.9.9 0 0 0 .9-.9V3.4a.9.9 0 0 0-.9-.9"/><path fill="currentColor" fill-opacity=".25" d="M13 10.611c0 .753-.61 1.364-1.364 1.364H4.364C3.61 11.975 3 11.365 3 10.61V9h10z"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default EffectInnerShadow;
