import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-chat-large',
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
      <path fill="currentColor" d="M14 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2.6l2.7 2.7c.2.2.4.3.7.3s.5-.1.7-.3l2.7-2.7H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m0 11h-3c-.3 0-.5.1-.7.3L8 13.6l-2.3-2.3c-.2-.2-.4-.3-.7-.3H2V2h12z"/>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatLargeComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}