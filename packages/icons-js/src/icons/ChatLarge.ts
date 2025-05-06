import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * ChatLarge icon
 */
const ChatLarge: Icon = {
  name: 'chat-large',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      d: "M14 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2.6l2.7 2.7c.2.2.4.3.7.3s.5-.1.7-.3l2.7-2.7H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m0 11h-3c-.3 0-.5.1-.7.3L8 13.6l-2.3-2.3c-.2-.2-.4-.3-.7-.3H2V2h12z",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path fill="currentColor" d="M14 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2.6l2.7 2.7c.2.2.4.3.7.3s.5-.1.7-.3l2.7-2.7H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m0 11h-3c-.3 0-.5.1-.7.3L8 13.6l-2.3-2.3c-.2-.2-.4-.3-.7-.3H2V2h12z"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default ChatLarge;
