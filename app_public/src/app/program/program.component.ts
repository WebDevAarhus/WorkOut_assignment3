import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { ProgramDataService } from '../program-data.service';

import {Program} from '../program';

import {Exercise} from '../exercise';
import {ExerciseFormComponent} from '../exercise-form/exercise-form.component';

import {Log} from '../log';
import {LogFormComponent} from '../log-form/log-form.component';


import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  program : Program;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private programDataService: ProgramDataService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.programDataService.getProgram(params.get('name')))
          .subscribe(program => {
            this.program = program;
            
          });
  }

  goBack(): void {
    this.location.back();
  }

  exerciseFormSubmitted(exercise:Exercise):void{
    this.programDataService
    .createExercise(this.program.name, exercise)
    .then((exercise)=>{
      this.program.exercises.push(exercise);
    });
  }

 logFormSubmitted(log:Log):void{
    this.programDataService
    .createLog(this.program.name, log)
    .then((log)=>{
      this.program.logs.push(log);
    });
  }
  


}
