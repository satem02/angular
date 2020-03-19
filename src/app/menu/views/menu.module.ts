import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuRoutingModule } from './menu-routing.module';

@NgModule({
  declarations: [LayoutComponent, HomeComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }