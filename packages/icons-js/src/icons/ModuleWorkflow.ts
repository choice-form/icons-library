import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ModuleWorkflow icon
 */
const ModuleWorkflow: Icon = {
  name: 'module-workflow',
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
      d: "M3.5 10.5v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M7.5 4.5v3m0 3v4",
      "fill-opacity": ".25",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 3.5v-1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1"/><path fill="currentColor" fill-opacity=".25" d="M13.5 13.5v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1M5.5 13.5v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1"/><path d="M3.5 10.5v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M7.5 4.5v3m0 3v4"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ModuleWorkflow;
