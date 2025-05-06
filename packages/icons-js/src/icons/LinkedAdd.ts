import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * LinkedAdd icon
 */
const LinkedAdd: Icon = {
  name: 'linked-add',
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
      d: "M1.5 6.5h7m0 0-2-2m2 2-2 2M13.5 11.5h-4m2 2v-4M2.5 1.5h11m-11 10h4m5-5h2",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 6.5h7m0 0-2-2m2 2-2 2M13.5 11.5h-4m2 2v-4M2.5 1.5h11m-11 10h4m5-5h2"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default LinkedAdd;
