import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {ProgramDataService} from './program-data.service';

import { AppComponent } from './app/app.component';
import { HomeListComponent } from './home-list/home-list.component';
import { ProgramComponent } from './program/program.component';
import { ReactiveFormsModule } from '@angular/forms';

import {ExerciseFormComponent} from './exercise-form/exercise-form.component';
import {LogFormComponent} from './log-form/log-form.component';

import {AppRoutingModule} from './app-routing.module';
import {APP_BASE_HREF,HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeListComponent,
    ProgramComponent,
    ExerciseFormComponent,
    LogFormComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' },
  ProgramDataService,
  {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
