import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * chat-large-solid icon
 */
const ChatLargeSolid: Icon = {
  name: 'chat-large-solid',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><path fill="currentColor" d="M14 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.266l2.35 2.82a.5.5 0 0 0 .768 0l2.35-2.82H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2"/></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ChatLargeSolid;
