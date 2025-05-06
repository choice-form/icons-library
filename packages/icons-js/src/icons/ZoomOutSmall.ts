import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ZoomOutSmall icon
 */
const ZoomOutSmall: Icon = {
  name: 'zoom-out-small',
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
      d: "m12.5 12.5-2.175-2.175M6 7.5h3m-1.5 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.5 12.5-2.175-2.175M6 7.5h3m-1.5 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ZoomOutSmall;
