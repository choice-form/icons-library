import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * SupportSmall icon
 */
const SupportSmall: Icon = {
  name: 'support-small',
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
      d: "M8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m9.767 6.233 2.122-2.122M9.767 9.767l2.122 2.122M6.233 9.767l-2.122 2.122M6.233 6.233 4.111 4.111M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"/><path d="M8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default SupportSmall;
