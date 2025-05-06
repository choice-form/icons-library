import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ViewKanban icon
 */
const ViewKanban: Icon = {
  name: 'view-kanban',
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
      d: "M5.5 3.5V13a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V3.5m-8 0V7a.5.5 0 0 0 .5.5h1.5m10-4V10a.5.5 0 0 1-.5.5h-1.5M1.5 1.5h12",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 3.5V13a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V3.5m-8 0V7a.5.5 0 0 0 .5.5h1.5m10-4V10a.5.5 0 0 1-.5.5h-1.5M1.5 1.5h12"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ViewKanban;
