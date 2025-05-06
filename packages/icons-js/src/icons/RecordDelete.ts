import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * RecordDelete icon
 */
const RecordDelete: Icon = {
  name: 'record-delete',
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
      d: "M11.5 12.5h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2m-9-4v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4M9.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0M7.5 10.5h-4",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 12.5h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2m-9-4v-2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4M9.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0M7.5 10.5h-4"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default RecordDelete;
