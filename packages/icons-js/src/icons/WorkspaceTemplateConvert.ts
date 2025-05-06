import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * workspace-template-convert icon
 */
const WorkspaceTemplateConvert: Icon = {
  name: 'workspace-template-convert',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor"><path stroke-linecap="round" d="M5.5 12.5h-3a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v2"/><path fill="currentColor" stroke-linejoin="round" d="M6.5 3.5h-3v3h3z"/><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 12.5H12A2.5 2.5 0 0 0 13.5 8m-2-.5H10A2.5 2.5 0 0 0 8.5 12"/><path stroke-linecap="round" stroke-linejoin="round" d="m12.5 10.5-2 2 2 2M9.5 5.5l2 2-2 2"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default WorkspaceTemplateConvert;
