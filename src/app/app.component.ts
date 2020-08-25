import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-svg-round-progressbar';

  doSomethingWithCurrentValue(event: any) {
    console.log({ event });
  }
}
