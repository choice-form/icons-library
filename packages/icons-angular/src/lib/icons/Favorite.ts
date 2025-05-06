import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-favorite',
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.64 4.4a2.836 2.836 0 0 0-4.148 0A3 3 0 0 0 8 5.116a3 3 0 0 0-.493-.716 2.84 2.84 0 0 0-4.148 0 3.185 3.185 0 0 0 0 4.351L8 13.5l4.64-4.748a3.18 3.18 0 0 0 0-4.352"/>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}