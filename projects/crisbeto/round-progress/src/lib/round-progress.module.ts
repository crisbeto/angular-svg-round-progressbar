import { NgModule } from '@angular/core';
import { RoundProgressComponent } from './round-progress.component';
import { RoundProgressEase } from './round-progress.ease';
import { RoundProgressService } from './round-progress.service';
import { ROUND_PROGRESS_DEFAULTS_PROVIDER } from './round-progress.config';

@NgModule({
  declarations: [RoundProgressComponent],
  imports: [],
  exports: [RoundProgressComponent],
  providers: [RoundProgressService, RoundProgressEase, ROUND_PROGRESS_DEFAULTS_PROVIDER],
})
export class RoundprogressModule {}
