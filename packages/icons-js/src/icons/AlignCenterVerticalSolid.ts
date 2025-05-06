import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * AlignCenterVerticalSolid icon
 */
const AlignCenterVerticalSolid: Icon = {
  name: 'align-center-vertical-solid',
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
      d: "M4.5 11.5v-8h2v8zM10.5 9.5h-2v-4h2z",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 7.5h2m2 0h2m2 0h2"/><path fill="currentColor" d="M4.5 11.5v-8h2v8zM10.5 9.5h-2v-4h2z"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default AlignCenterVerticalSolid;
