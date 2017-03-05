import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {DemoModule} from './demo.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(DemoModule);
