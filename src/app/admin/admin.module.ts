import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { AddNotificationComponent } from './components/add-notification/add-notification.component';
import { QuicklinksComponent } from './components/quicklinks/quicklinks.component';
import { AddQuicklinkComponent } from './components/add-quicklink/add-quicklink.component';
import { SlidersComponent } from './components/sliders/sliders.component';

@NgModule({
  declarations: [
    SlidersComponent,
    AdminComponent,
    LoginComponent,
    NotificationsComponent,
    AddNotificationComponent,
    QuicklinksComponent,
    AddQuicklinkComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
