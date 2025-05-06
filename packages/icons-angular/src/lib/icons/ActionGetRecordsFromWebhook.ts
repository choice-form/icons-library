import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-action-get-records-from-webhook',
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
      <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 12.5a2 2 0 1 1-3-1.732"/><path fill="currentColor" fill-opacity=".25" d="M11.5 14.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/><path d="M3.5 12.5h.005M14.5 9.5a1 1 0 0 0-1-1h-2m0-3h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1m6 0a2 2 0 1 0-3.163 1.628L4.5 10.5M7.5 5.5l2 3.5M5.5 12.5h4"/></g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionGetRecordsFromWebhookComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}