import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * question-square icon
 */
const QuestionSquare: Icon = {
  name: 'question-square',
  toSvg(attrs = {}) {
    const defaultAttrs = {width: "16", height: "16", fill: "none", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg"};
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    return `<svg ${attributesString}><g stroke="currentColor"><path d="M11.5 1.5h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2Z"/><path stroke-linecap="round" d="M5.5 6.5c0-1 .5-2 2-2s2.5 1 2 2-2 1-2 2.5"/><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 10.5h.005"/></g></svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default QuestionSquare;
