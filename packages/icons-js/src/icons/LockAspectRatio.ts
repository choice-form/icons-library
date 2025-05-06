import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * LockAspectRatio icon
 */
const LockAspectRatio: Icon = {
  name: 'lock-aspect-ratio',
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
      d: "M5 8h6",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="M10 10.5h1a2.5 2.5 0 0 0 0-5h-1m-4 0H5a2.5 2.5 0 0 0 0 5h1"/><path d="M5 8h6"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default LockAspectRatio;
