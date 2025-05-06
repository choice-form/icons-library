import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * UseInvitation icon
 */
const UseInvitation: Icon = {
  name: 'use-invitation',
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
      d: "M12.5 4.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0M14.5 13.5v-1a3 3 0 0 0-3-3h-2M5.5 9.5l2 2m0 0-2 2m2-2h-6",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 4.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0M14.5 13.5v-1a3 3 0 0 0-3-3h-2M5.5 9.5l2 2m0 0-2 2m2-2h-6"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default UseInvitation;
