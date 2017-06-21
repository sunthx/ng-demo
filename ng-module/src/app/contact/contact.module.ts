import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AwesomePipe } from './awesome.pipe';
import { ContactComponent } from './contact.component';
import { ContactHighlightDirective } from './highlight.directive';
import { ContactService } from './contact.service';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [ContactComponent, AwesomePipe, ContactHighlightDirective],
    providers: [ContactService],
    exports: [ContactComponent]
})
export class ContactModule {

}
