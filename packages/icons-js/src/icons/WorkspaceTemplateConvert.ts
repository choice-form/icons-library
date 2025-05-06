import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * WorkspaceTemplateConvert icon
 */
const WorkspaceTemplateConvert: Icon = {
  name: 'workspace-template-convert',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "m12.5 10.5-2 2 2 2M9.5 5.5l2 2-2 2",
      "stroke-linejoin": "round",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor"><path stroke-linecap="round" d="M5.5 12.5h-3a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v2"/><path fill="currentColor" stroke-linejoin="round" d="M6.5 3.5h-3v3h3z"/><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 12.5H12A2.5 2.5 0 0 0 13.5 8m-2-.5H10A2.5 2.5 0 0 0 8.5 12"/><path stroke-linecap="round" stroke-linejoin="round" d="m12.5 10.5-2 2 2 2M9.5 5.5l2 2-2 2"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default WorkspaceTemplateConvert;
