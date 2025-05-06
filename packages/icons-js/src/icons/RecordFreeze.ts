import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * RecordFreeze icon
 */
const RecordFreeze: Icon = {
  name: 'record-freeze',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      "fill-opacity": ".25",
      d: "M6.5 8.5h-4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2m-3-11v4h12v-4zM13.5 10.5h-5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M9.5 10V9a1.5 1.5 0 0 1 3 0v1",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path fill="currentColor" fill-opacity=".25" d="M1.5 5.5v-4h12v4z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 8.5h-4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2m-3-11v4h12v-4zM13.5 10.5h-5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M9.5 10V9a1.5 1.5 0 0 1 3 0v1"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RecordFreeze;
