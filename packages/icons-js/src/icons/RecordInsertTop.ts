import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * RecordInsertTop icon
 */
const RecordInsertTop: Icon = {
  name: 'record-insert-top',
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
      d: "M13.5 3.5h-4m2 2v-4",
      "fill-opacity": ".25",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m4.5 1.5 2 2m0 0-2 2m2-2h-3a2 2 0 0 0-2 2v2"/><path fill="currentColor" fill-opacity=".25" d="M12.5 10.5h-10a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M13.5 3.5h-4m2 2v-4"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RecordInsertTop;
