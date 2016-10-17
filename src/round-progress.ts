import { NgModule } from '@angular/core';
import { RoundProgressComponent } from './round-progress.component';
import { RoundProgressService } from './round-progress.service';

@NgModule({
  declarations: [RoundProgressComponent],
  exports: [RoundProgressComponent],
  providers: [RoundProgressService]
})
export class RoundProgress {};
