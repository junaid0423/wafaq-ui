import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  {
    path: 'c',
    component: ClientComponent,
    data: { breadcrumb: 'Client' },
    children: [
      {
        path: 'landing',
        component: LandingComponent,
        data: { breadcrumb: 'Landing' },
      },
      {
        path: '',
        redirectTo: '/c/landing',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
