import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ApplicationInfoComponent } from './admin/application-info/application-info.component';
import { HomeComponent } from './home/home.component';
import { Quiz1Component } from './quiz/quiz1/quiz1.component';
import { Quiz2Component } from './quiz/quiz2/quiz2.component';
import { Quiz3Component } from './quiz/quiz3/quiz3.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },

  { path: 'accueil', component: HomeComponent },

  { path: 'admin', component: AdminComponent, children: [{ path: 'app-info', component: ApplicationInfoComponent }] },

  {
    path: 'questionnaires',
    children: [
      { path: '1', component: Quiz1Component },
      { path: '2', component: Quiz2Component },
      { path: '3', component: Quiz3Component },
    ],
  },

  { path: 'signup', component: SignUpComponent },
];
