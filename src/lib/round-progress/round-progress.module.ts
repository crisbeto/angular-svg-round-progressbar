import {NgModule} from '@angular/core';
import {RoundProgressComponent} from './round-progress.component';
import {ROUND_PROGRESS_DEFAULTS_PROVIDER} from './round-progress.config';

@NgModule({
  imports: [RoundProgressComponent],
  exports: [RoundProgressComponent],
  providers: [ROUND_PROGRESS_DEFAULTS_PROVIDER],
})
export class RoundProgressModule {}
