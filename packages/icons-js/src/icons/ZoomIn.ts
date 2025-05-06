import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ZoomIn icon
 */
const ZoomIn: Icon = {
  name: 'zoom-in',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "M4.5 6.5h2m0 0h2m-2 0v-2m0 2v2m4 2 3 3m-2-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" d="M4.5 6.5h2m0 0h2m-2 0v-2m0 2v2m4 2 3 3m-2-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ZoomIn;
