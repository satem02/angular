import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewAuthorizationFormComponent } from './views';

const routes: Routes = [
  {
    path: "", component: NewAuthorizationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpansionPanelRoutingModule { }