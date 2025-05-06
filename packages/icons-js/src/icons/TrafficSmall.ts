import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * TrafficSmall icon
 */
const TrafficSmall: Icon = {
  name: 'traffic-small',
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
      d: "m3 6 2.5-2.5L8 6M5.5 3.5v9M13 10l-2.5 2.5L8 10M10.5 12.5v-9",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m3 6 2.5-2.5L8 6M5.5 3.5v9M13 10l-2.5 2.5L8 10M10.5 12.5v-9"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default TrafficSmall;
