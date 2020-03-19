import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NewAuthorizationFormComponent, NewAuthorizationOneComponent, NewAuthorizationTwoComponent , NewAuthorizationBaseComponent, UserApprovalPanelComponent } from './views';
import { ExpansionPanelRoutingModule } from './expansion-panel-routing.module';
import { CustomMaterialModule } from './modules/material.module';


@NgModule({
  declarations: [NewAuthorizationBaseComponent,NewAuthorizationFormComponent,NewAuthorizationOneComponent,NewAuthorizationTwoComponent, UserApprovalPanelComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ExpansionPanelRoutingModule,
    CustomMaterialModule
  ]
})
export class ExpansionPanelModule { }