import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { TitleComponent } from './title.component';
import { UserService } from './user.service'
import { ContactModule } from './contact/contact.module'

@NgModule({
  imports: [
    BrowserModule, FormsModule, ContactModule],
  declarations: [
    AppComponent, HighlightDirective, TitleComponent],
  bootstrap: [AppComponent],
  providers: [UserService]
})
export class AppModule {

}
