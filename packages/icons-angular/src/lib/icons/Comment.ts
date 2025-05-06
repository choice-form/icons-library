import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-comment',
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 7.267C13.5 4.634 11.037 2.5 8 2.5S2.5 4.634 2.5 7.267s2.463 4.766 5.5 4.766a6.4 6.4 0 0 0 1.123-.1L12 13.5v-3a4.46 4.46 0 0 0 1.5-3.233"/>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}