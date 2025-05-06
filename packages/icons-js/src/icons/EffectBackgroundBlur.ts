import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * EffectBackgroundBlur icon
 */
const EffectBackgroundBlur: Icon = {
  name: 'effect-background-blur',
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
      d: "M5.22 4.47a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5M5.22 6.573a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M5.22 8.427a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M5.22 10.03a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5M7.073 4.72a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M7.073 6.823a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7.073 8.677a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7.073 10.28a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8.927 4.72a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8.927 6.823a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M8.927 8.677a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M8.927 10.28a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M10.78 4.47a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5M10.78 6.573a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M10.78 8.427a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M10.78 10.03a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.6 2.5H4.4a.9.9 0 0 0-.9.9v7.2a.9.9 0 0 0 .9.9h7.2a.9.9 0 0 0 .9-.9V3.4a.9.9 0 0 0-.9-.9"/><path fill="currentColor" d="M5.22 4.47a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5M5.22 6.573a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M5.22 8.427a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M5.22 10.03a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5M7.073 4.72a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M7.073 6.823a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7.073 8.677a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7.073 10.28a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8.927 4.72a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M8.927 6.823a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M8.927 8.677a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M8.927 10.28a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M10.78 4.47a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5M10.78 6.573a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M10.78 8.427a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M10.78 10.03a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5"/>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default EffectBackgroundBlur;
