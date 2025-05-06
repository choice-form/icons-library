import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-attach-small',
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.654 5.982 6.36 8.277a1.335 1.335 0 1 0 1.889 1.889l3.1-3.1A2.673 2.673 0 0 0 7.57 3.287L4.2 6.657a4.009 4.009 0 0 0 5.669 5.669l3.1-3.1"/>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AttachSmallComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}