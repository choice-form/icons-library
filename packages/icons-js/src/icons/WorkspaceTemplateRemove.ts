import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * WorkspaceTemplateRemove icon
 */
const WorkspaceTemplateRemove: Icon = {
  name: 'workspace-template-remove',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "M14.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0M9 9l3 3m0-3-3 3",
      "stroke-linejoin": "round",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor"><path stroke-linecap="round" d="M4.5 12.5h-2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v2"/><path fill="currentColor" stroke-linejoin="round" d="M6.5 3.5h-3v3h3z"/><path stroke-linecap="round" stroke-linejoin="round" d="M14.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0M9 9l3 3m0-3-3 3"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default WorkspaceTemplateRemove;
