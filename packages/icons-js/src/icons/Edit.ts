import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * Edit icon
 */
const Edit: Icon = {
  name: 'edit',
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
      d: "m11.793 3.793-.586-.586a1 1 0 0 0-1.414 0L2.5 10.5l-1 3 3-1 7.293-7.293a1 1 0 0 0 0-1.414M8.5 4.5l2 2M6.5 13.5h7",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m11.793 3.793-.586-.586a1 1 0 0 0-1.414 0L2.5 10.5l-1 3 3-1 7.293-7.293a1 1 0 0 0 0-1.414M8.5 4.5l2 2M6.5 13.5h7"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default Edit;
