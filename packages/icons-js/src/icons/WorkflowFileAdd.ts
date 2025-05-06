import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * workflow-file-add icon
 */
const WorkflowFileAdd: Icon = {
  name: 'workflow-file-add',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 3.5v-1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1M14.5 13.5v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1M12.5 10.5v-2a1 1 0 0 0-1-1h-3v-3M8.5 7.5h-1M6 11.5H3M4.5 13v-3M7.5 11.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default WorkflowFileAdd;
