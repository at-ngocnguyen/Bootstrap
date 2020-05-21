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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
