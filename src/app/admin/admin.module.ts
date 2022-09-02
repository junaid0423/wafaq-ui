import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { SlidersComponent } from './components/sliders/sliders.component';

@NgModule({
  declarations: [AdminComponent, LoginComponent, SlidersComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
