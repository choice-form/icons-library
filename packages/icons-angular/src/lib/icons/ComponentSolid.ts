import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-component-solid',
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
      <g fill="currentColor"><path d="M5.784 4.686a.97.97 0 0 1 0-1.372l1.03-1.03a.97.97 0 0 1 1.372 0l1.03 1.03a.97.97 0 0 1 0 1.372l-1.03 1.03a.97.97 0 0 1-1.372 0zM5.784 11.686a.97.97 0 0 1 0-1.372l1.03-1.03a.97.97 0 0 1 1.372 0l1.03 1.03a.97.97 0 0 1 0 1.372l-1.03 1.03a.97.97 0 0 1-1.372 0zM10.314 5.784a.97.97 0 0 1 1.372 0l1.03 1.03a.97.97 0 0 1 0 1.372l-1.03 1.03a.97.97 0 0 1-1.372 0l-1.03-1.03a.97.97 0 0 1 0-1.372zM3.314 5.784a.97.97 0 0 1 1.372 0l1.03 1.03a.97.97 0 0 1 0 1.372l-1.03 1.03a.97.97 0 0 1-1.372 0l-1.03-1.03a.97.97 0 0 1 0-1.372z"/></g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentSolidComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}