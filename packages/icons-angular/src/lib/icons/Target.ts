import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-target',
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
      <path stroke="currentColor" d="M12.5 7.5a5 5 0 1 0-10 0 5 5 0 0 0 10 0Z"/><path stroke="currentColor" d="M10 7.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"/><path fill="currentColor" d="M8 7.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0"/>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TargetComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}