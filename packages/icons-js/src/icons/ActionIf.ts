import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ActionIf icon
 */
const ActionIf: Icon = {
  name: 'action-if',
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
      d: "M9.5 7.5h2a1 1 0 0 1 1 1v4",
      "fill-opacity": ".25",
      "stroke-opacity": ".25",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 2.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path fill="currentColor" fill-opacity=".25" d="M2.5 13.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M11.5 13.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path d="M3.5 12.5v-4a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-3"/><path stroke-opacity=".25" d="M9.5 7.5h2a1 1 0 0 1 1 1v4"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ActionIf;
