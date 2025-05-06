import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * WarningFileBroken icon
 */
const WarningFileBroken: Icon = {
  name: 'warning-file-broken',
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
      d: "m5.5.5-1 2 2 2v5l2-5-1-2 1-2",
      "fill-opacity": ".25",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5.5h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9l-4-4h-1"/><path fill="currentColor" fill-opacity=".25" d="m13.5 4.5-4-4v3a1 1 0 0 0 1 1z"/><path d="m5.5.5-1 2 2 2v5l2-5-1-2 1-2"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default WarningFileBroken;
