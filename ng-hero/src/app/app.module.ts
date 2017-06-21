import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

import { HeroService } from './hero.service'
import { HeroesComponent } from './heroes.component'
import { DashboardComponent } from './dashboard.component'

import { AppRoutingModule } from './app-routing.module'

import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from './in-memory-data-service'
import { HeroSearchComponent } from './hero-search.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  bootstrap: [AppComponent],
  providers: [HeroService]
})
export class AppModule { }
