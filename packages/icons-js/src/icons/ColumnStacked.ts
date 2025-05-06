import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ColumnStacked icon
 */
const ColumnStacked: Icon = {
  name: 'column-stacked',
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
      d: "M2.5 8v1.5h2V8a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5M6.5 3v3.5h2V3a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5M10.5 5v5.5h2V5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5",
      "fill-opacity": ".25",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 12V9.5h2V12a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5M8.5 6.5h-2V12a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5zM10.5 10.5V12a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.5z"/><path fill="currentColor" fill-opacity=".25" d="M2.5 8v1.5h2V8a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5M6.5 3v3.5h2V3a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5M10.5 5v5.5h2V5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ColumnStacked;
