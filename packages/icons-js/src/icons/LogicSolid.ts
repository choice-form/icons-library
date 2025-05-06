import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * LogicSolid icon
 */
const LogicSolid: Icon = {
  name: 'logic-solid',
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
      d: "M3.5 11.5v-2a2 2 0 0 1 2-2h4a2 2 0 0 0 2-2v-2M3.5 3.5v3",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" d="M2.5 2.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M10.5 2.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M2.5 12.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path d="M3.5 11.5v-2a2 2 0 0 1 2-2h4a2 2 0 0 0 2-2v-2M3.5 3.5v3"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default LogicSolid;
