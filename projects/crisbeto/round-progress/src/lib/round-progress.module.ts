import { NgModule } from '@angular/core';
import { RoundProgressComponent } from './round-progress.component';
// import { RoundProgressEase } from './round-progress.ease';
import { ROUND_PROGRESS_DEFAULTS_PROVIDER } from './round-progress.config';

@NgModule({
  declarations: [RoundProgressComponent],
  imports: [],
  exports: [RoundProgressComponent],
  providers: [ROUND_PROGRESS_DEFAULTS_PROVIDER],
})
export class RoundprogressModule {}
