import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home';
import { TermConditionComponent } from './feature/term-condition/term-condition';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'terms',
    component: TermConditionComponent,
  },
];
