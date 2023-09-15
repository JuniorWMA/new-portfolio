import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectOneRoutingModule } from './project-one-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TechComponent } from './components/tech/tech.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    TechComponent
  ],
  imports: [
    CommonModule,
    ProjectOneRoutingModule
  ]
})
export class ProjectOneModule { }
