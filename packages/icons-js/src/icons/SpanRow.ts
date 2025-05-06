import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * SpanRow icon
 */
const SpanRow: Icon = {
  name: 'span-row',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      d: "M3.5 4.5s-1 1-1 3 1 3 1 3",
      "stroke-linecap": "round",
      "stroke-opacity": ".5",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor"><path d="M12.5 7.5v-4a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1Z"/><path stroke-linecap="round" stroke-opacity=".5" d="M12.5 10.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1"/><path stroke-linecap="round" d="M3.5 4.5s-1 1-1 3 1 3 1 3"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default SpanRow;
