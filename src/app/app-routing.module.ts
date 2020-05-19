import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './feature/button/button.component';
import { FormsComponent } from './feature/forms/forms.component';
import { BadgeComponent } from './feature/badge/badge.component';

const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'badge', component: BadgeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
