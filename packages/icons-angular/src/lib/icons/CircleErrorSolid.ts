import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-circle-error-solid',
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
      <path fill="currentColor" fill-rule="evenodd" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8M6.207 4.793a1 1 0 0 0-1.414 1.414L6.586 8 4.793 9.793a1 1 0 0 0 1.414 1.414L8 9.414l1.793 1.793a1 1 0 0 0 1.414-1.414L9.414 8l1.793-1.793a1 1 0 0 0-1.414-1.414L8 6.586z" clip-rule="evenodd"/>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CircleErrorSolidComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}