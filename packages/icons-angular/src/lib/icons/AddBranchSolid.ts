import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-add-branch-solid',
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
      <g fill="currentColor"><path fill-rule="evenodd" d="M5 6.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0m5-2a.5.5 0 0 0-1 0V6H7.5a.5.5 0 0 0 0 1H9v1.5a.5.5 0 0 0 1 0V7h1.5a.5.5 0 0 0 0-1H10z" clip-rule="evenodd"/><path d="M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/></g>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBranchSolidComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}