import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { LandingComponent } from './pages/landing/landing.component';

@NgModule({
  declarations: [ClientComponent, LandingComponent],
  imports: [CommonModule, SharedModule, FormsModule, ClientRoutingModule],
})
export class ClientModule {}
