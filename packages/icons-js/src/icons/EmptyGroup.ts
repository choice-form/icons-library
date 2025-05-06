import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * EmptyGroup icon
 */
const EmptyGroup: Icon = {
  name: 'empty-group',
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
      d: "M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="M1.5 6.5v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2"/><path stroke-linejoin="round" d="m3.5 6.5 1 1 2-2m2 1h3M13.5 14.5v-2a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v2"/><path stroke-linejoin="round" d="m3.5 14.5 1 1 2-2m2 1h3"/><path d="M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default EmptyGroup;
