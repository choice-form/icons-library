import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ChartDelete icon
 */
const ChartDelete: Icon = {
  name: 'chart-delete',
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
      d: "M13 11.5h-3M14.5 11.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M1.5 12.5h2m0 0h3m-3 0v-11m0 11v2m2-4V4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.5m2-1V6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v.5",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13 11.5h-3M14.5 11.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M1.5 12.5h2m0 0h3m-3 0v-11m0 11v2m2-4V4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.5m2-1V6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v.5"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ChartDelete;
