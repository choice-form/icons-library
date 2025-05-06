import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ToolbarCreateRegular icon
 */
const ToolbarCreateRegular: Icon = {
  name: 'toolbar-create-regular',
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
      d: "M1 15.5h14M9.793 1.207a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414l-7.597 7.597a1 1 0 0 1-.465.263L1 13l.933-3.731a1 1 0 0 1 .263-.465zM8.5 2.5l3 3",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1 15.5h14M9.793 1.207a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414l-7.597 7.597a1 1 0 0 1-.465.263L1 13l.933-3.731a1 1 0 0 1 .263-.465zM8.5 2.5l3 3"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ToolbarCreateRegular;
