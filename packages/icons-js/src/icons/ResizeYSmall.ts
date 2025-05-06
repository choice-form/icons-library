import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ResizeYSmall icon
 */
const ResizeYSmall: Icon = {
  name: 'resize-y-small',
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
      d: "m10 6.5-2-2-2 2M10 9.5l-2 2-2-2M13.5 2.5h-11M13.5 13.5h-11",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m10 6.5-2-2-2 2M10 9.5l-2 2-2-2M13.5 2.5h-11M13.5 13.5h-11"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ResizeYSmall;
