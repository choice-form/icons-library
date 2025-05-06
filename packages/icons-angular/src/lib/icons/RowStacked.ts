import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-row-stacked',
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12.5h2.5v-2H3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5M8.5 6.5v2H3a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5zM4.5 4.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h1.5z"/><path fill="currentColor" fill-opacity=".25" d="M7 12.5H5.5v-2H7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5M12 8.5H8.5v-2H12a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5M10 4.5H4.5v-2H10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5"/></g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RowStackedComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}