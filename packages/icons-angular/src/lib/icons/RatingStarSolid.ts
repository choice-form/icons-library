import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-rating-star-solid',
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
      <path fill="currentColor" d="m15.144 5.438-4.316-.627L8.897.9C8.559.217 7.441.217 7.103.9l-1.93 3.911-4.317.627a1.002 1.002 0 0 0-.554 1.707l3.124 3.044-.737 4.299a1 1 0 0 0 1.451 1.054L8 13.513l3.861 2.03c.728.381 1.591-.234 1.451-1.054l-.737-4.299 3.124-3.044a1.003 1.003 0 0 0-.555-1.708"/>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingStarSolidComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}