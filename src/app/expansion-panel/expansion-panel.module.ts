import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAuthorizationFormComponent, NewAuthorizationOneComponent, NewAuthorizationTwoComponent } from './views';
import { ExpansionPanelRoutingModule } from './expansion-panel-routing.module';
import { CustomMaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [NewAuthorizationFormComponent,NewAuthorizationOneComponent,NewAuthorizationTwoComponent],
  imports: [
    CommonModule,
    ExpansionPanelRoutingModule,
    ReactiveFormsModule,
    CustomMaterialModule
  ]
})
export class ExpansionPanelModule { }