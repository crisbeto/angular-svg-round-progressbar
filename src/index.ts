import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RoundProgressComponent} from './round-progress.component';
import {RoundProgressService} from './round-progress.service';
import {RoundProgressEase} from './round-progress.ease';
import {ROUND_PROGRESS_DEFAULTS_PROVIDER} from './round-progress.config';

@NgModule({
  imports: [CommonModule],
  declarations: [RoundProgressComponent],
  exports: [RoundProgressComponent],
  providers: [RoundProgressService, RoundProgressEase, ROUND_PROGRESS_DEFAULTS_PROVIDER]
})
export class RoundProgressModule {};

export * from './round-progress.component';
export * from './round-progress.service';
export * from './round-progress.ease';
export * from './round-progress.config';
