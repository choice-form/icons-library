import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * UserRemoveSmall icon
 */
const UserRemoveSmall: Icon = {
  name: 'user-remove-small',
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
      d: "M10 12.5v-1a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1M6.5 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M13 7.5h-3",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10 12.5v-1a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1M6.5 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M13 7.5h-3"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default UserRemoveSmall;
