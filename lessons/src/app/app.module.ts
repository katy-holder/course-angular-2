import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorDirective } from './color.directive';
import { StringPipe } from './string.pipe';
import { OrderPipe } from './order.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ColorDirective,
    StringPipe,
    OrderPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
