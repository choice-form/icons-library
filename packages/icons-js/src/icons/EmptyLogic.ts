import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * EmptyLogic icon
 */
const EmptyLogic: Icon = {
  name: 'empty-logic',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "M4.5 12.5v-1a2 2 0 0 1 2-2h2a2 2 0 0 0 2-2v-1M4.5 6.5v2",
      "stroke-linejoin": "round",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round"><path d="M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5"/><path stroke-linejoin="round" d="M3.5 5.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M9.5 5.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3.5 13.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path stroke-linejoin="round" d="M4.5 12.5v-1a2 2 0 0 1 2-2h2a2 2 0 0 0 2-2v-1M4.5 6.5v2"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default EmptyLogic;
