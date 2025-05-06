import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-color-alpha',
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
      <path stroke="currentColor" d="M7.5 12.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/><path fill="currentColor" fill-opacity=".5" d="M3.964 11.036a5 5 0 1 0 7.072-7.072L7.5 7.5z"/>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorAlphaComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}