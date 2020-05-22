import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {
    path: '',
    redirectTo: 'button',
    pathMatch: 'full',
  },
  { path: 'button', component: ButtonComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'badge', component: BadgeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'alert', component: AlertComponent },
  { path: 'breadscurmb', component: BreadscrumbComponent },
  { path: 'card', component: CardComponent },
  { path: 'collapse', component: CollapseComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'input-group', component: InputGroupComponent},
  { path: 'jumbotron', component: JumbotronComponent},
  { path: 'pagination', component: PaginationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
