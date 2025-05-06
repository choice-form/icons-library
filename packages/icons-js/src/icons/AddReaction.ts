import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * AddReaction icon
 */
const AddReaction: Icon = {
  name: 'add-reaction',
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
      d: "M7.5 13.5a6 6 0 1 1 6-6m-4 2.236a3 3 0 0 1-2 .764 3 3 0 0 1-2-.764m0-3.236h.005m3.995 0h.005M14.268 14.268l-3.536-3.536m0 3.536 3.536-3.536",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 13.5a6 6 0 1 1 6-6m-4 2.236a3 3 0 0 1-2 .764 3 3 0 0 1-2-.764m0-3.236h.005m3.995 0h.005M14.268 14.268l-3.536-3.536m0 3.536 3.536-3.536"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default AddReaction;
