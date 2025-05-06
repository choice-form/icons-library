import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ChartEdit icon
 */
const ChartEdit: Icon = {
  name: 'chart-edit',
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
      d: "m7.5 14.5 1-3 3.646-3.646a.5.5 0 0 1 .708 0l1.292 1.292a.5.5 0 0 1 0 .708L10.5 13.5zM1.5 12.5h2m0 0h2m-2 0v-11m0 11v2m2-4V4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4.5m4-3V5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2.5",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 14.5 1-3 3.646-3.646a.5.5 0 0 1 .708 0l1.292 1.292a.5.5 0 0 1 0 .708L10.5 13.5zM1.5 12.5h2m0 0h2m-2 0v-11m0 11v2m2-4V4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4.5m4-3V5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2.5"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ChartEdit;
