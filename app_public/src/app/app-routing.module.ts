import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeListComponent }   from './home-list/home-list.component';
import { ProgramComponent }      from './program/program.component';

import {ExerciseFormComponent} from './exercise-form/exercise-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/programs', pathMatch: 'full' },
  { path: 'programs',  component: HomeListComponent },
  { path: 'programs/:name', component: ProgramComponent }  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}