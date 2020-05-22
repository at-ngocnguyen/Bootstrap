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
import { ModalComponent } from './feature/modal/modal.component';
import { DropdownComponent } from './feature/dropdown/dropdown.component';
import { InputGroupComponent } from './feature/input-group/input-group.component';
import { JumbotronComponent } from './feature/jumbotron/jumbotron.component';
import { PaginationComponent } from './feature/pagination/pagination.component';
import { ProgressComponent } from './feature/progress/progress.component';
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
    ModalComponent,
    DropdownComponent,
    InputGroupComponent,
    JumbotronComponent,
    PaginationComponent,
    ProgressComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
