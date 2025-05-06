import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-block-delete',
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
      <g stroke="currentColor" stroke-linecap="round"><path stroke-linejoin="round" d="M14.5 10.5a4 4 0 1 0-8 0 4 4 0 0 0 8 0M12.5 10.5h-4"/><path d="M12.5 1.5h-10a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1ZM4.5 7.5h-2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h2"/></g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlockDeleteComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}