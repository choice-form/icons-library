import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * LogLists icon
 */
const LogLists: Icon = {
  name: 'log-lists',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      d: "M7.5 9.5h4",
      "stroke-linecap": "round",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor"><path d="M12.5 2.5h-10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Z"/><path d="M3.5 5.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/><path stroke-linecap="round" d="M7.5 5.5h4"/><path d="M3.5 9.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/><path stroke-linecap="round" d="M7.5 9.5h4"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default LogLists;
