import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * EmptyWorkflowNode icon
 */
const EmptyWorkflowNode: Icon = {
  name: 'empty-workflow-node',
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
      d: "M12.5 10.5v2a1 1 0 0 1-1 1h-5M3.5 11.5v-7M9.5 2.5h2a1 1 0 0 1 1 1v3M11.5 8.5h2",
      "fill-opacity": ".25",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5.5h-7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M2.5 2.5h5M14.5 6.5h-4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path fill="currentColor" fill-opacity=".25" d="M5.5 11.5h-4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M12.5 10.5v2a1 1 0 0 1-1 1h-5M3.5 11.5v-7M9.5 2.5h2a1 1 0 0 1 1 1v3M11.5 8.5h2"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default EmptyWorkflowNode;
