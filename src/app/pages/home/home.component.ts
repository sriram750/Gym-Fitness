import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from '../../components/hero/hero.component';
import { IntroComponent } from '../../components/intro/intro.component';
import { StatsComponent } from '../../components/stats/stats.component';
import { WhyUsComponent } from '../../components/why-us/why-us.component';
import { ProgramsComponent } from '../../components/programs/programs.component';
import { ProgramShowcaseComponent } from '../../components/program-showcase/program-showcase.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { FacilitiesComponent } from '../../components/facilities/facilities.component';
import { TransformationsComponent } from '../../components/transformations/transformations.component';
import { TrainersComponent } from '../../components/trainers/trainers.component';
import { MembershipComponent } from '../../components/membership/membership.component';
import { FreeTrialComponent } from '../../components/free-trial/free-trial.component';
import { LocationsComponent } from '../../components/locations/locations.component';
import { BmiCalculatorComponent } from '../../components/bmi-calculator/bmi-calculator.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { BlogComponent } from '../../components/blog/blog.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { FinalCtaComponent } from '../../components/final-cta/final-cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    IntroComponent,
    StatsComponent,
    WhyUsComponent,
    ProgramsComponent,
    ProgramShowcaseComponent,
    ExperienceComponent,
    FacilitiesComponent,
    TransformationsComponent,
    TrainersComponent,
    MembershipComponent,
    FreeTrialComponent,
    LocationsComponent,
    BmiCalculatorComponent,
    TestimonialsComponent,
    GalleryComponent,
    BlogComponent,
    FaqComponent,
    FinalCtaComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-intro></app-intro>
    <app-stats></app-stats>
    <app-why-us></app-why-us>
    <app-programs></app-programs>
    <app-program-showcase></app-program-showcase>
    <app-experience></app-experience>
    <app-facilities></app-facilities>
    <app-transformations></app-transformations>
    <app-trainers></app-trainers>
    <app-membership></app-membership>
    <app-free-trial></app-free-trial>
    <app-locations></app-locations>
    <app-bmi-calculator></app-bmi-calculator>
    <app-testimonials></app-testimonials>
    <app-gallery></app-gallery>
    <app-blog></app-blog>
    <app-faq></app-faq>
    <app-final-cta></app-final-cta>
  `
})
export class HomeComponent {}
