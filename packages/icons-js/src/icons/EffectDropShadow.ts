import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * effect-drop-shadow icon
 */
const EffectDropShadow: Icon = {
  name: 'effect-drop-shadow',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path fill="currentColor" fill-opacity=".25" d="M13 12.636C13 13.39 12.39 14 11.636 14H4.364C3.61 14 3 13.39 3 12.636v-2.11l1.364.93h7.272l1.364-.93z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.6 2.5H4.4a.9.9 0 0 0-.9.9v7.2a.9.9 0 0 0 .9.9h7.2a.9.9 0 0 0 .9-.9V3.4a.9.9 0 0 0-.9-.9"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default EffectDropShadow;
