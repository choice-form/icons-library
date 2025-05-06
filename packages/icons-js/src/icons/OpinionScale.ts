import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * OpinionScale icon
 */
const OpinionScale: Icon = {
  name: 'opinion-scale',
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
      d: "M1.5 13.5h12M12.5 3v8a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5M8.5 6v5a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5M2.5 8v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 13.5h12M12.5 3v8a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5M8.5 6v5a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5M2.5 8v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default OpinionScale;
