import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * FileMove icon
 */
const FileMove: Icon = {
  name: 'file-move',
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
      d: "m11.5 3.5 2 2m0 0-2 2m2-2h-7a2 2 0 0 0-2 2M6.5 9.5h-3a1 1 0 0 0-1 1v4m4-5V12a.5.5 0 0 0 .5.5h2.5m-3-3 3 3m0 0v2M9.5 7.5v1a1 1 0 0 0 1 1h3m-4-8v2",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m11.5 3.5 2 2m0 0-2 2m2-2h-7a2 2 0 0 0-2 2M6.5 9.5h-3a1 1 0 0 0-1 1v4m4-5V12a.5.5 0 0 0 .5.5h2.5m-3-3 3 3m0 0v2M9.5 7.5v1a1 1 0 0 0 1 1h3m-4-8v2"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default FileMove;
