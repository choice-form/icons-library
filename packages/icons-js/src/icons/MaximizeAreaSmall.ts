import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * MaximizeAreaSmall icon
 */
const MaximizeAreaSmall: Icon = {
  name: 'maximize-area-small',
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
      d: "M10.5 2.5H12A1.5 1.5 0 0 1 13.5 4v1.5M5.5 2.5H4A1.5 1.5 0 0 0 2.5 4v1.5M10.5 13.5H12a1.5 1.5 0 0 0 1.5-1.5v-1.5M5.5 13.5H4A1.5 1.5 0 0 1 2.5 12v-1.5M8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 2.5H12A1.5 1.5 0 0 1 13.5 4v1.5M5.5 2.5H4A1.5 1.5 0 0 0 2.5 4v1.5M10.5 13.5H12a1.5 1.5 0 0 0 1.5-1.5v-1.5M5.5 13.5H4A1.5 1.5 0 0 1 2.5 12v-1.5M8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default MaximizeAreaSmall;
