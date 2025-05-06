import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * UserSearchSmall icon
 */
const UserSearchSmall: Icon = {
  name: 'user-search-small',
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
      d: "M7 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7.15 9.5H5.5a2 2 0 0 0-2 2v1M10.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M12.5 12.5l-.95-.95",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7.15 9.5H5.5a2 2 0 0 0-2 2v1M10.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M12.5 12.5l-.95-.95"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default UserSearchSmall;
