import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-extensions',
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
      <path fill="currentColor" fill-opacity=".25" d="M14 8 8 2a.707.707 0 0 0-1 1l.5.5-1.586 1.586a2 2 0 0 0 0 2.828l2.172 2.172a2 2 0 0 0 2.828 0L12.5 8.5l.5.5a.707.707 0 1 0 1-1"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.5 5.5 2 2M7 3a.707.707 0 0 1 1-1l6 6a.707.707 0 0 1-1 1l-.5-.5-1.586 1.586a2 2 0 0 1-2.828 0L5.914 7.914a2 2 0 0 1 0-2.828L7.5 3.5zM7 9l-3 3m5.5-8.5 2-2m3 3-2 2"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 2.5h-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1"/>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExtensionsComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}