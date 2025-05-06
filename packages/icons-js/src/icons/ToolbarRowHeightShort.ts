import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ToolbarRowHeightShort icon
 */
const ToolbarRowHeightShort: Icon = {
  name: 'toolbar-row-height-short',
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
      d: "M3.5 2.5v11m0-11-2 2m2-2 2 2m-2 9 2-2m-2 2-2-2M7.5 3.5h6m-6 3h6m-6 3h6m-6 3h6",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 2.5v11m0-11-2 2m2-2 2 2m-2 9 2-2m-2 2-2-2M7.5 3.5h6m-6 3h6m-6 3h6m-6 3h6"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ToolbarRowHeightShort;
