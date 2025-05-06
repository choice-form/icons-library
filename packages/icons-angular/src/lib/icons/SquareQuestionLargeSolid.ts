import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cf-square-question-large-solid',
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
      <path fill="currentColor" d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M8 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2m1.647-4.952c-.491.42-.649.587-.649.952a1 1 0 1 1-2 0c0-1.315.811-2.011 1.348-2.471.491-.422.65-.588.65-.954 0-.194 0-.712-.998-.712-.456.025-.94.232-1.311.583a1 1 0 1 1-1.374-1.453 4.15 4.15 0 0 1 2.632-1.129h.003c1.844 0 3.047 1.09 3.047 2.711 0 1.316-.812 2.012-1.349 2.473z"/>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquareQuestionLargeSolidComponent {
  @Input() width?: string | number;
  @Input() height?: string | number;
  @Input() viewBox?: string;
  @Input() color: string = 'none';
  @Input() title?: string;
}