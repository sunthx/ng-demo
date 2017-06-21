import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { TitleComponent } from './title.component';
import { UserService } from './user.service'

import { AwesomePipe } from './contact/awesome.pipe';
import { ContactComponent } from './contact/contact.component';
import { ContactHighlightDirective } from './contact/highlight.directive';

import { ContactService } from './contact/contact.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule],
  declarations: [
    AppComponent,
    ContactComponent,
    HighlightDirective,
    ContactHighlightDirective,
    AwesomePipe,
    TitleComponent
    ],
  bootstrap: [AppComponent],
  providers: [UserService, ContactService]
})
export class AppModule {

}
