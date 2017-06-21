import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

if (environment.production) {
  enableProdMode();
}

//通过JiT动态引导
platformBrowserDynamic().bootstrapModule(AppModule);

//通过Aot静态引导
// import { platformBrowser } from '@angular/platform-browser';
// import {AppModuleNgFactory} from './app/app.module.ngfactory';
// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);