import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * WorkflowFileImport icon
 */
const WorkflowFileImport: Icon = {
  name: 'workflow-file-import',
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
      d: "M11.5 3.5v-1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1M14.5 13.5v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1M8.5 7.5h3a1 1 0 0 1 1 1v2m-4-3v-3m0 3h-3a1 1 0 0 0-1 1v2M6.5 10.5l2 2m0 0-2 2m2-2h-7",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 3.5v-1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1M14.5 13.5v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1M8.5 7.5h3a1 1 0 0 1 1 1v2m-4-3v-3m0 3h-3a1 1 0 0 0-1 1v2M6.5 10.5l2 2m0 0-2 2m2-2h-7"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default WorkflowFileImport;
