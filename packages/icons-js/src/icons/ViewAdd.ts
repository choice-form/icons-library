import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ViewAdd icon
 */
const ViewAdd: Icon = {
  name: 'view-add',
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
      d: "M13.5 10.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0",
      "fill-opacity": ".25",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 10.5v1a1 1 0 0 0 1 1h1m0-10h-1a1 1 0 0 0-1 1v1m8-2h1a1 1 0 0 1 1 1v1m-4-2h-2m-4 6v-2M11.5 10.5h-4m2-2v4"/><path fill="currentColor" fill-opacity=".25" d="M13.5 10.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ViewAdd;
