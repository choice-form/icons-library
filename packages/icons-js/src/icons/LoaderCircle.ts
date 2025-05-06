import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * LoaderCircle icon
 */
const LoaderCircle: Icon = {
  name: 'loader-circle',
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
      "stroke-opacity": ".25",
      d: "M13.5 8A5.5 5.5 0 0 0 8 2.5",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path stroke-opacity=".25" d="M2.5 8a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0"/><path d="M13.5 8A5.5 5.5 0 0 0 8 2.5"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default LoaderCircle;
