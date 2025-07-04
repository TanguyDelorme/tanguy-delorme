import { Routes } from '@angular/router';
import {RoutesApp} from './core/constants/routes-app';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'event',
    pathMatch: 'full'
  },
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(e => e.HomeComponent),
  },
  {
    path: RoutesApp.STUDIES,
    loadComponent: () => import('./features/studies/studies.component').then(e => e.StudiesComponent),
  },
  {
    path: RoutesApp.WORK_EXPERIENCE,
    loadComponent: () => import('./features/work-experience/work-experience.component').then(e => e.WorkExperienceComponent),
  },
  {
    path: RoutesApp.SKILLS,
    loadComponent: () => import('./features/skills/skills.component').then(e => e.SkillsComponent),
  },
  {
    path: RoutesApp.LAB,
    loadComponent: () => import('./features/lab/lab.component').then(e => e.LabComponent),
  }
];
