import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { SlidersComponent } from './components/sliders/sliders.component';
import { AddNotificationComponent } from './components/add-notification/add-notification.component';
import { AddQuicklinkComponent } from './components/add-quicklink/add-quicklink.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { QuicklinksComponent } from './components/quicklinks/quicklinks.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    data: { breadcrumb: 'Client' },
    children: [
      {
        path: 'sliders',
        component: SlidersComponent,
      },
      {
        path: 'notifications',
        component: NotificationsComponent,
      },
      {
        path: 'add-notification',
        component: AddNotificationComponent,
      },
      {
        path: 'edit-notification/:id',
        component: AddNotificationComponent,
      },
      {
        path: 'quicklinks',
        component: QuicklinksComponent,
      },
      {
        path: 'add-quicklink',
        component: AddQuicklinkComponent,
      },
      {
        path: 'edit-quicklink/:id',
        component: AddQuicklinkComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
