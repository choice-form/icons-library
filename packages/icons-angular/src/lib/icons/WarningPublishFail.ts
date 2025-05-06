import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-warning-publish-fail',
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 13.5h-3m3 0c.49-.735.848-1.59 1-2.5 0 0 2.08.5 2.58 1.5s-1.5 3-1.5 3zm-3 0c-2-3-1.031-8 1.5-10.5M4.5 13.5l-1.92 2s-2-2-1.5-3S3.5 11 3.5 11M10.5 4v1.5M10.5 7.5h.005"/><path fill="currentColor" fill-opacity=".25" d="m5.913 8.757 4.15-7.47a.5.5 0 0 1 .874 0l4.15 7.47a.5.5 0 0 1-.437.743h-8.3a.5.5 0 0 1-.437-.743"/></g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WarningPublishFailComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}