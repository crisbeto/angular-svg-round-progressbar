import { Component, Input } from '@angular/core';
import { RoundProgressService } from './round-progress.service';

@Component({
  selector: 'round-progress',
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" role="progressbar">
      <path fill="none" stroke="#f00" stroke-width="5" [attr.d]="generateArc()"/>
    </svg>
  `
})
export class RoundProgressComponent {
  @Input()
  public current: number;

  constructor(private _service: RoundProgressService) {
    this.current = 57;
  }

  generateArc(): string {
    return this._service.getArc(this.current, 100, 50, 50);
  }
}
