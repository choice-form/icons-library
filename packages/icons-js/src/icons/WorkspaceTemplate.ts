import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * workspace-template icon
 */
const WorkspaceTemplate: Icon = {
  name: 'workspace-template',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor"><path d="M12.5 1.5h-10a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1Z"/><path fill="currentColor" stroke-linejoin="round" d="M6.5 3.5h-3v3h3zM11.5 8.5h-3v3h3z"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default WorkspaceTemplate;
