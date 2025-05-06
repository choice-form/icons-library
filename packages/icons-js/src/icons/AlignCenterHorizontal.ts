import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * AlignCenterHorizontal icon
 */
const AlignCenterHorizontal: Icon = {
  name: 'align-center-horizontal',
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
      d: "M7.5 2.5v2m0 2h-4v-2h8v2zm0 0v2m0 0h2v2h-2m0-2h-2v2h2m0 0v2",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 2.5v2m0 2h-4v-2h8v2zm0 0v2m0 0h2v2h-2m0-2h-2v2h2m0 0v2"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default AlignCenterHorizontal;
