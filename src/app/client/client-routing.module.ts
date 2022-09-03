import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { DownloadsComponent } from './pages/downloads/downloads.component';
import { ExamResultsComponent } from './pages/exam-results/exam-results.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ObjectiveComponent } from './pages/objective/objective.component';

const routes: Routes = [
  {
    path: 'c',
    component: ClientComponent,
    data: { breadcrumb: 'Client' },
    children: [
      {
        path: 'landing',
        component: LandingComponent,
      },
      {
        path: '',
        redirectTo: '/c/landing',
        pathMatch: 'full',
      },
      {
        path: 'downloads',
        component: DownloadsComponent,
      },
      {
        path: 'exam-results',
        component: ExamResultsComponent,
      },
      {
        path: 'objectives',
        component: ObjectiveComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
