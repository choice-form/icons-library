import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * AlignRightSolid icon
 */
const AlignRightSolid: Icon = {
  name: 'align-right-solid',
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
      d: "M10.5 6.5h-8v-2h8zM10.5 10.5h-5v-2h5z",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 12.5v-10"/><path fill="currentColor" d="M10.5 6.5h-8v-2h8zM10.5 10.5h-5v-2h5z"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default AlignRightSolid;
