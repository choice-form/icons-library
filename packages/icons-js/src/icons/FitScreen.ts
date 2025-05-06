import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * FitScreen icon
 */
const FitScreen: Icon = {
  name: 'fit-screen',
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
      d: "M12.5 4.5v-1a1 1 0 0 0-1-1h-1m2 8v1a1 1 0 0 1-1 1h-1m-8-2v1a1 1 0 0 0 1 1h1m-2-8v-1a1 1 0 0 1 1-1h1",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 4.5v-1a1 1 0 0 0-1-1h-1m2 8v1a1 1 0 0 1-1 1h-1m-8-2v1a1 1 0 0 0 1 1h1m-2-8v-1a1 1 0 0 1 1-1h1"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FitScreen;
