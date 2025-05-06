import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * toolbar-comment icon
 */
const ToolbarComment: Icon = {
  name: 'toolbar-comment',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 5.5h7M4.5 8.5h7M15.5 7C15.5 3.41 12.142.5 8 .5S.5 3.41.5 7s3.358 6.5 7.5 6.5q.788-.002 1.532-.137L13.5 15.5v-4.091c1.238-1.159 2-2.705 2-4.409"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ToolbarComment;
