import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * MultipleAxes icon
 */
const MultipleAxes: Icon = {
  name: 'multiple-axes',
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
      d: "M13.5 13.5h-9a1 1 0 0 1-1-1v-10m-2 0v11m11-6v4m-2-3v3m-2-2v2m-2 0v-1M12.5 2.5l-6 6m6-6v3m0-3h-3",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 13.5h-9a1 1 0 0 1-1-1v-10m-2 0v11m11-6v4m-2-3v3m-2-2v2m-2 0v-1M12.5 2.5l-6 6m6-6v3m0-3h-3"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default MultipleAxes;
