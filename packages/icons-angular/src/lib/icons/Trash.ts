import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-trash',
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 3.5h2m0 0v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-9m-8 0h2m8 0h-2m0 0h-2m-4 0v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1m-4 0h4"/>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrashComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}