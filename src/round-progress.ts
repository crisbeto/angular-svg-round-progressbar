import { NgModule } from '@angular/core';
import { RoundProgressComponent } from './round-progress.component';
import { RoundProgressService } from './round-progress.service';
import { RoundProgressEase } from './round-progress.ease';

@NgModule({
  declarations: [RoundProgressComponent],
  exports: [RoundProgressComponent],
  providers: [RoundProgressService, RoundProgressEase]
})
export class RoundProgress {};
