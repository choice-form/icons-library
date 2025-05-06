import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-trigger-connector-event',
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M7 6 5.5 7.5M10 9l-1.5 1.5M13 3a3.536 3.536 0 0 0-5 0l-.5.5 5 5L13 8a3.536 3.536 0 0 0 0-5m0 0 1.5-1.5M4 12a3.536 3.536 0 0 0 5 0l.5-.5-5-5L4 7a3.536 3.536 0 0 0 0 5m0 0-2.5 2.5"/></g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TriggerConnectorEventComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}