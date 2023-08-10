import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Firsthalfcomponent} from './firsthalf/firsthalf.component'
import { SecondhalfComponent } from './secondhalf/secondhalf.component';


@NgModule({
  declarations: [
    AppComponent,
    Firsthalfcomponent,
    SecondhalfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
