import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * EmptyFile icon
 */
const EmptyFile: Icon = {
  name: 'empty-file',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "m12.5 8.5-4-4v3a1 1 0 0 0 1 1z",
      "stroke-linejoin": "round",
      "fill-opacity": ".25",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round"><path d="M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5"/><path stroke-linejoin="round" d="M3.5 15.5h8a1 1 0 0 0 1-1v-6l-4-4h-5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1M4.5 8.5h2m-2 3h6m-6 2h6"/><path fill="currentColor" fill-opacity=".25" stroke-linejoin="round" d="m12.5 8.5-4-4v3a1 1 0 0 0 1 1z"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default EmptyFile;
