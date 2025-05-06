import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Backward icon
 */
const Backward: Icon = {
  name: 'backward',
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
      d: "m5 10.5 3 3 3-3M8 13.5v-8M2.5 3.5h11M2.5 6.5h3M10.5 6.5h3",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m5 10.5 3 3 3-3M8 13.5v-8M2.5 3.5h11M2.5 6.5h3M10.5 6.5h3"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Backward;
