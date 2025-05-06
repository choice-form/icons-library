import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Megaphone icon
 */
const Megaphone: Icon = {
  name: 'megaphone',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12.5 10.5s-2.952-2-4.976-2H4.5a2 2 0 1 1 0-4h3.024c1.976 0 4.976-2 4.976-2z",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m8.151 10.401.717 1.425a1.151 1.151 0 0 1-2.047 1.048L4.576 8.5"/><path d="M12.5 10.5s-2.952-2-4.976-2H4.5a2 2 0 1 1 0-4h3.024c1.976 0 4.976-2 4.976-2z"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Megaphone;
