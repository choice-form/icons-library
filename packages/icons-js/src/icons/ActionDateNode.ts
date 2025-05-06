import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ActionDateNode icon
 */
const ActionDateNode: Icon = {
  name: 'action-date-node',
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
      d: "M4.5 2.5h-2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h7m1-11h2a1 1 0 0 1 1 1v3m-7-4h2M1.5 5.5h12M4.5 1.5v2m6-2v2M11.5 14.5 13 13m0 0-2.5-1.5L12 10m1 3 1.5-1.5L12 10m1.5-1.5L12 10M3.5 7.5h.005m1.995 0h.005m1.995 0h.005M3.5 9.5h.005m1.995 0h.005m1.995 0h.005m1.995-2h.005m-.005 2h.005m1.995-2h.005m-8.005 4h.005m1.995 0h.005m1.995 0h.005",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 2.5h-2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h7m1-11h2a1 1 0 0 1 1 1v3m-7-4h2M1.5 5.5h12M4.5 1.5v2m6-2v2M11.5 14.5 13 13m0 0-2.5-1.5L12 10m1 3 1.5-1.5L12 10m1.5-1.5L12 10M3.5 7.5h.005m1.995 0h.005m1.995 0h.005M3.5 9.5h.005m1.995 0h.005m1.995 0h.005m1.995-2h.005m-.005 2h.005m1.995-2h.005m-8.005 4h.005m1.995 0h.005m1.995 0h.005"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ActionDateNode;
