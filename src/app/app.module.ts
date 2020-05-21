import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './feature/button/button.component';
import { FormsComponent } from './feature/forms/forms.component';
import { BadgeComponent } from './feature/badge/badge.component';
import { NavbarComponent } from './feature/navbar/navbar.component';
import { AlertComponent } from './feature/alert/alert.component';
import { BreadscrumbComponent } from './feature/breadscrumb/breadscrumb.component';
import { CardComponent } from './feature/card/card.component';
import { CollapseComponent } from './feature/collapse/collapse.component';
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FormsComponent,
    BadgeComponent,
    NavbarComponent,
    AlertComponent,
    BreadscrumbComponent,
    CardComponent,
    CollapseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
