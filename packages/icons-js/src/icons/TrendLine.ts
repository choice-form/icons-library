import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * TrendLine icon
 */
const TrendLine: Icon = {
  name: 'trend-line',
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
      d: "M1.5 12.5h2m0 0h10m-10 0v-11m0 11v2M12.5 2.5l-7 7m7-7v2m0-2h-2M9.5 8.5h4m0 0L12 7m1.5 1.5L12 10",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 12.5h2m0 0h10m-10 0v-11m0 11v2M12.5 2.5l-7 7m7-7v2m0-2h-2M9.5 8.5h4m0 0L12 7m1.5 1.5L12 10"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default TrendLine;
