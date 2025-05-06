import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-toolbar-hand',
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 3.5V3a1.5 1.5 0 0 0-3 0v6.5l-2.321-.913A1.21 1.21 0 0 0 .82 10.505l2.619 2.9a6.14 6.14 0 0 0 4.618 2.1h1.307A6.136 6.136 0 0 0 15.5 9.364V3.5a1 1 0 0 0-2 0v1"/><path d="M10.5 3.5V3a1.5 1.5 0 1 1 3 0v3.5M7.5 6.5V2a1.5 1.5 0 0 1 3 0v4.5"/></g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarHandComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}