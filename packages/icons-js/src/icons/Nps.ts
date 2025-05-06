import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Nps icon
 */
const Nps: Icon = {
  name: 'nps',
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
      d: "M12.374 12a6 6 0 1 0-9.748 0M7.5 8.5l3-3M5.5 12.5h4",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path stroke-opacity=".25" d="M10.5 8.5c0 .546-.146 1.059-.401 1.5M7.5 5.5A3 3 0 0 0 4.901 10"/><path d="M12.374 12a6 6 0 1 0-9.748 0M7.5 8.5l3-3M5.5 12.5h4"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Nps;
