import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewAuthorizationBaseComponent, NewAuthorizationFormComponent, NewAuthorizationOneComponent, NewAuthorizationTwoComponent } from './expansion-panel/views';
import { CustomMaterialModule } from './expansion-panel/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewAuthorizationFormComponent,
    NewAuthorizationOneComponent,
    NewAuthorizationTwoComponent,
    NewAuthorizationBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
