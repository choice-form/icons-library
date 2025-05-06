import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-support',
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
      <path fill="currentColor" fill-opacity=".25" d="M5.379 9.621a3 3 0 0 0 4.242 0l2.122 2.122a6 6 0 0 1-8.486 0zM5.379 5.379a3 3 0 0 1 4.242 0l2.122-2.122a6 6 0 0 0-8.486 0z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.379 9.621a3 3 0 0 0 4.242 0l2.122 2.122a6 6 0 0 1-8.486 0zM5.379 5.379a3 3 0 0 1 4.242 0l2.122-2.122a6 6 0 0 0-8.486 0z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.379 5.379a3 3 0 0 0 0 4.242l-2.122 2.122a6 6 0 0 1 0-8.486zM9.621 9.621a3 3 0 0 0 0-4.242l2.122-2.122a6 6 0 0 1 0 8.486z"/>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupportComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}