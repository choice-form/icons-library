import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * EmptyImage icon
 */
const EmptyImage: Icon = {
  name: 'empty-image',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "m3 15 6.5-6.5 3 2",
      "stroke-linejoin": "round",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" d="M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5"/><path stroke="currentColor" d="M2.5 7.5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2z"/><path fill="currentColor" d="M6 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/><path stroke="currentColor" stroke-linejoin="round" d="m3 15 6.5-6.5 3 2"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default EmptyImage;
