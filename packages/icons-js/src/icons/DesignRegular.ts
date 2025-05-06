import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * DesignRegular icon
 */
const DesignRegular: Icon = {
  name: 'design-regular',
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
      d: "M7.502 1.5c-3.3 0-6.002 2.7-6.002 6s2.701 6 6.002 6c.556 0 .99-.448.99-1.013 0-.539-.526-.81-.526-1.35-.02-1.192 1.41-1 2.2-1A3.346 3.346 0 0 0 13.5 6.803C13.484 3.907 10.78 1.5 7.502 1.5",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path fill="currentColor" d="M5 5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8 4.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M11 7.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M4 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/><path d="M7.502 1.5c-3.3 0-6.002 2.7-6.002 6s2.701 6 6.002 6c.556 0 .99-.448.99-1.013 0-.539-.526-.81-.526-1.35-.02-1.192 1.41-1 2.2-1A3.346 3.346 0 0 0 13.5 6.803C13.484 3.907 10.78 1.5 7.502 1.5"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default DesignRegular;
