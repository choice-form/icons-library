import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-circle-remove-large-solid',
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
      <path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8m3.182 9.768a.5.5 0 0 1 0 .707l-.707.707a.5.5 0 0 1-.707 0L8 9.414l-1.768 1.768a.5.5 0 0 1-.707 0l-.707-.707a.5.5 0 0 1 0-.707L6.586 8 4.818 6.232a.5.5 0 0 1 0-.707l.707-.707a.5.5 0 0 1 .707 0L8 6.586l1.768-1.768a.5.5 0 0 1 .707 0l.707.707a.5.5 0 0 1 0 .707L9.414 8z"/>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CircleRemoveLargeSolidComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}