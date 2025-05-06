import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-file-sub',
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 2.5v5a1 1 0 0 0 1 1h4M12.5 8.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/></g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileSubComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}