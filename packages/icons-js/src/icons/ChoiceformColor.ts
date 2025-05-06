import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * choiceform-color icon
 */
const ChoiceformColor: Icon = {
  name: 'choiceform-color',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path fill="url(#a)" d="M6.59 2.24 3.55 5.28a5.24 5.24 0 0 0 0 7.41l.435.436a2.62 2.62 0 0 1 0-3.705l2.027-2.027a1.97 1.97 0 0 0 .577-1.393z"/><path fill="#05F" d="M14 2.24 6.761 9.477a1.31 1.31 0 0 1-1.853 0l-.126-.126-.435.436a2.104 2.104 0 0 0 0 2.976l.365.364a2.105 2.105 0 0 0 2.975 0l5.734-5.734c.37-.37.577-.87.577-1.394z"/><defs><linearGradient id="a" x1="7.633" x2="2.751" y1="5.338" y2="10.219" gradientUnits="userSpaceOnUse"><stop stop-color="#05F"/><stop offset="1" stop-color="#A5D4FF"/></linearGradient></defs></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ChoiceformColor;
