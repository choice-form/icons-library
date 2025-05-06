import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * workspace-template-add icon
 */
const WorkspaceTemplateAdd: Icon = {
  name: 'workspace-template-add',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor"><path stroke-linecap="round" d="M4.5 12.5h-2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v2"/><path fill="currentColor" stroke-linejoin="round" d="M6.5 3.5h-3v3h3z"/><path stroke-linecap="round" stroke-linejoin="round" d="M14.5 10.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0M12.5 10.5h-4m2 2v-4"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default WorkspaceTemplateAdd;
