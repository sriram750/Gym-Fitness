import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'IRONPULSE FITNESS | Premium Fitness & High Performance Training'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutPageComponent),
    title: 'The IronPulse Experience | Premium Fitness Sanctuary'
  },
  {
    path: 'programs',
    loadComponent: () => import('./pages/programs/programs-page.component').then(m => m.ProgramsPageComponent),
    title: 'Training Programs | Strength, HIIT & Combat'
  },
  {
    path: 'trainers',
    loadComponent: () => import('./pages/trainers/trainers-page.component').then(m => m.TrainersPageComponent),
    title: 'Master Strength Coaches | IronPulse Fitness'
  },
  {
    path: 'locations',
    loadComponent: () => import('./pages/locations/locations-page.component').then(m => m.LocationsPageComponent),
    title: 'Chennai Locations | T Nagar, Anna Nagar, OMR & More'
  },
  {
    path: 'membership',
    loadComponent: () => import('./pages/membership/membership-page.component').then(m => m.MembershipPageComponent),
    title: 'Membership Plans & Pricing | IronPulse Fitness'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact-page.component').then(m => m.ContactPageComponent),
    title: 'Contact Us | Book Free Trial Session'
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog-page.component').then(m => m.BlogPageComponent),
    title: 'Fitness Insights & Nutrition Science | IronPulse'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
