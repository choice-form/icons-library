import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ToolbarSettings icon
 */
const ToolbarSettings: Icon = {
  name: 'toolbar-settings',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "m5.25 12.25 2.74-2.74c.305-.305.377-.772.28-1.191C8.103 7.603 8.049 6.45 9 5.5 10.5 4 12.5 5 12.5 5l-1.293 1.293a1 1 0 0 0 0 1.414l.086.086a1 1 0 0 0 1.414 0L14 6.5s1 2-.5 3.5c-.951.951-2.103.897-2.819.73-.42-.098-.886-.025-1.19.28L6.75 13.75a1.06 1.06 0 0 1-1.5-1.5",
      "stroke-linejoin": "round",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round"><path d="M14.5 2.5h-12a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3M3.5 5.5h2"/><path stroke-linejoin="round" d="m5.25 12.25 2.74-2.74c.305-.305.377-.772.28-1.191C8.103 7.603 8.049 6.45 9 5.5 10.5 4 12.5 5 12.5 5l-1.293 1.293a1 1 0 0 0 0 1.414l.086.086a1 1 0 0 0 1.414 0L14 6.5s1 2-.5 3.5c-.951.951-2.103.897-2.819.73-.42-.098-.886-.025-1.19.28L6.75 13.75a1.06 1.06 0 0 1-1.5-1.5"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ToolbarSettings;
