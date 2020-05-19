import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './feature/button/button.component';
import { FormsComponent } from './feature/forms/forms.component';
import { BadgeComponent } from './feature/badge/badge.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FormsComponent,
    BadgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
