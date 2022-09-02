import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { SlidersComponent } from './components/sliders/sliders.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
