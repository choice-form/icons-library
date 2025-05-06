import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * SquareQuestionLarge icon
 */
const SquareQuestionLarge: Icon = {
  name: 'square-question-large',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      d: "M8 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6.687 5.446c.357-.34.821-.546 1.313-.583 1 0 1 .518 1 .712 0 .366-.159.532-.65.954A3.12 3.12 0 0 0 7 9a1 1 0 0 0 2 0c0-.365.158-.532.649-.952A3.12 3.12 0 0 0 11 5.575c0-1.621-1.2-2.711-3.047-2.711a4.15 4.15 0 0 0-2.64 1.129 1 1 0 1 0 1.374 1.453",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g fill="currentColor"><path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m0 14H2V2h12z"/><path d="M8 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6.687 5.446c.357-.34.821-.546 1.313-.583 1 0 1 .518 1 .712 0 .366-.159.532-.65.954A3.12 3.12 0 0 0 7 9a1 1 0 0 0 2 0c0-.365.158-.532.649-.952A3.12 3.12 0 0 0 11 5.575c0-1.621-1.2-2.711-3.047-2.711a4.15 4.15 0 0 0-2.64 1.129 1 1 0 1 0 1.374 1.453"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default SquareQuestionLarge;
