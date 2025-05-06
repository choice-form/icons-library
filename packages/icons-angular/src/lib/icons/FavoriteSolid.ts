import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-favorite-solid',
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
      <path fill="currentColor" d="M12.988 4.055a3.34 3.34 0 0 0-5.001.149 3.336 3.336 0 0 0-5.006-.141A3.7 3.7 0 0 0 2.989 9.1l4.641 4.75a.5.5 0 0 0 .715 0l4.644-4.75a3.614 3.614 0 0 0-.001-5.045"/>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteSolidComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}