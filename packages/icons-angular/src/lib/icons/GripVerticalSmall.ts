import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-grip-vertical-small',
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M6 4.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M6 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M10 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M10 4.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M10 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/></g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GripVerticalSmallComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}