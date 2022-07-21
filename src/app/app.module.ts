import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HoverFocusComponent } from './pages/hover-focus/hover-focus.component';
import { HoverFocusDirective } from './shared/directives/hover-focus.directive';
import { PhoneNumberPipe } from './shared/pipes/phone-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HoverFocusComponent,
    HoverFocusDirective,
    PhoneNumberPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
