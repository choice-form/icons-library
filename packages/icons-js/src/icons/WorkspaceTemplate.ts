import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * WorkspaceTemplate icon
 */
const WorkspaceTemplate: Icon = {
  name: 'workspace-template',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      d: "M6.5 3.5h-3v3h3zM11.5 8.5h-3v3h3z",
      "stroke-linejoin": "round",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor"><path d="M12.5 1.5h-10a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1Z"/><path fill="currentColor" stroke-linejoin="round" d="M6.5 3.5h-3v3h3zM11.5 8.5h-3v3h3z"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default WorkspaceTemplate;
