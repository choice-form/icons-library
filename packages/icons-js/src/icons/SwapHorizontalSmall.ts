import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * SwapHorizontalSmall icon
 */
const SwapHorizontalSmall: Icon = {
  name: 'swap-horizontal-small',
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
      d: "m11 8 2.5 2.5L11 13M2.5 10.5h11M5 8 2.5 5.5 5 3M2.5 5.5h11",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m11 8 2.5 2.5L11 13M2.5 10.5h11M5 8 2.5 5.5 5 3M2.5 5.5h11"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default SwapHorizontalSmall;
