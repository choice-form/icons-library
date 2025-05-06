import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-column-stacked',
  standalone: true,
  template: `
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      [attr.viewBox]="viewBox || '0 0 16 16'" 
      [attr.width]="width || '16'" 
      [attr.height]="height || '16'" 
      [attr.fill]="color" 
      [attr.aria-hidden]="title ? 'false' : 'true'"
      class="choiceform-icon"
    >
      <ng-container *ngIf="title">
        <title>{{title}}</title>
      </ng-container>
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 12V9.5h2V12a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5M8.5 6.5h-2V12a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5zM10.5 10.5V12a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.5z"/><path fill="currentColor" fill-opacity=".25" d="M2.5 8v1.5h2V8a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5M6.5 3v3.5h2V3a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5M10.5 5v5.5h2V5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5"/></g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColumnStackedComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}