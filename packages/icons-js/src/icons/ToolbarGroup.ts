import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ToolbarGroup icon
 */
const ToolbarGroup: Icon = {
  name: 'toolbar-group',
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
      d: "m3.5 12.5 1 1 2-2m2 1h3",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12.5 1.5h-10a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1"/><path d="m3.5 4.5 1 1 2-2m2 1h3M13.5 13.5v-3a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v3"/><path d="m3.5 12.5 1 1 2-2m2 1h3"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ToolbarGroup;
