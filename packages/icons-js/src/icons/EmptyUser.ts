import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * EmptyUser icon
 */
const EmptyUser: Icon = {
  name: 'empty-user',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "M12.5 14.5v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1",
      "fill-opacity": ".25",
      "stroke-linejoin": "round",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round"><path d="M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5"/><path fill="currentColor" fill-opacity=".25" stroke-linejoin="round" d="M5.5 6.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/><path stroke-linejoin="round" d="M12.5 14.5v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default EmptyUser;
