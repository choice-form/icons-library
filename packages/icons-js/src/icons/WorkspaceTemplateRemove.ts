import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * workspace-template-remove icon
 */
const WorkspaceTemplateRemove: Icon = {
  name: 'workspace-template-remove',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor"><path stroke-linecap="round" d="M4.5 12.5h-2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v2"/><path fill="currentColor" stroke-linejoin="round" d="M6.5 3.5h-3v3h3z"/><path stroke-linecap="round" stroke-linejoin="round" d="M14.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0M9 9l3 3m0-3-3 3"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default WorkspaceTemplateRemove;
