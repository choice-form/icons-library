import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-create-solid',
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
      <path fill="currentColor" fill-rule="evenodd" d="M10.44 1.854a1.5 1.5 0 0 1 2.12 0l.586.585a1.5 1.5 0 0 1 0 2.122l-.792.793a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 0-.708zM8.145 4.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.196.12l-3 1a.5.5 0 0 1-.632-.632l1-3a.5.5 0 0 1 .12-.196z" clip-rule="evenodd"/>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateSolidComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}