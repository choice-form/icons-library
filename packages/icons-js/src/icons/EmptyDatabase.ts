import { mergeAttributes } from '../utils';
import { Icon } from '../types';

/**
 * EmptyDatabase icon
 */
const EmptyDatabase: Icon = {
  name: 'empty-database',
  toSvg(attrs = {}) {
    const defaultAttrs = {
      xmlns: 'http://www.w3.org/2000/svg',
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      stroke: "currentColor",
      "stroke-linecap": "round",
      d: "M7.5 4.5c-3.031 0-4.34.861-4.796 1.279-.145.133-.204.326-.204.524v7.394c0 .198.059.391.204.524C3.161 14.64 4.47 15.5 7.5 15.5s4.34-.861 4.796-1.279c.145-.133.204-.326.204-.524V6.303c0-.198-.059-.391-.204-.524C11.839 5.36 10.53 4.5 7.5 4.5",
      "fill-opacity": ".25",
      "stroke-linejoin": "round",
      class: 'choiceform-icon'
    };
    
    const iconAttributes = mergeAttributes(defaultAttrs, attrs);
    const attributesString = Object.entries(iconAttributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
    
    const innerSvgContent = '<g stroke="currentColor" stroke-linecap="round"><path d="M7.5.5v2M13 3l1.5-1.5M2 3 .5 1.5"/><path fill="currentColor" fill-opacity=".25" stroke-linejoin="round" d="M7.5 4.5c-2.551 0-3.882.61-4.511 1.052-.33.232-.33.664 0 .896C3.619 6.89 4.949 7.5 7.5 7.5s3.882-.61 4.511-1.052c.33-.232.33-.664 0-.896C11.381 5.11 10.051 4.5 7.5 4.5"/><path stroke-linejoin="round" d="M2.5 10s1 1.5 5 1.5 5-1.5 5-1.5"/><path stroke-linejoin="round" d="M7.5 4.5c-3.031 0-4.34.861-4.796 1.279-.145.133-.204.326-.204.524v7.394c0 .198.059.391.204.524C3.161 14.64 4.47 15.5 7.5 15.5s4.34-.861 4.796-1.279c.145-.133.204-.326.204-.524V6.303c0-.198-.059-.391-.204-.524C11.839 5.36 10.53 4.5 7.5 4.5"/></g>';
    return `<svg ${attributesString}>${innerSvgContent}</svg>`;
  },
  toString() {
    return this.toSvg();
  }
};

export default EmptyDatabase;
