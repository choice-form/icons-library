import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * EmptyFolder icon
 */
const EmptyFolder: Icon = {
  name: 'empty-folder',
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
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="m3.5 12.5.772-2.316a1 1 0 0 1 .949-.684H13.5m0 0a.72.72 0 0 1 .684.949l-1.456 4.367a1 1 0 0 1-.949.684H2.5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h1.586a1 1 0 0 1 .707.293l1.414 1.414a1 1 0 0 0 .707.293H12.5a1 1 0 0 1 1 1z"/><path d="M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default EmptyFolder;
