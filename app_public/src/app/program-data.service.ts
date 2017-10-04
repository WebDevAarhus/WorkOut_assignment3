import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Program } from './program';
import { Exercise } from './exercise';
import { Log } from './log';

@Injectable()
export class ProgramDataService {

  constructor(private http: Http) { }

  private apiBaseUrl = '/api/';

  public getPrograms(): Promise<Program[]> {
    const someParam : number = 1;
    const url: string = `${this.apiBaseUrl}`;
    return this.http
    .get(url)
    .toPromise()
    .then(response => response.json() as Program[])
    .catch(this.handleError);

  }

  getProgram(name :string): Promise<Program>{
    const url = `${this.apiBaseUrl}programs/${name}`;
    return this.http.get(url)
      .toPromise()
      .then(program => program.json() as Program)
      .catch(this.handleError);
  }

  getProgram2(name :string): Promise<Program>{
    return this.getPrograms()
      .then(programs => programs.find(program => program.name === name))
      .catch(this.handleError);
  }
  

  private handleError(error: any): Promise<any>{
    console.error('sth has gone wrong', error);
    console.log('sth has gone wrong', error);
    
    return Promise.reject(error.message || error);
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  create(name: string): Promise<Program> {
    return this.http
      .post(this.apiBaseUrl+"programs", JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Program)
      .catch(this.handleError);
  }

  //------------------exercises
  createExercise(programName: string, exercise:Exercise): Promise<Exercise> {
    return this.http
      .post(this.apiBaseUrl+"programs/"+programName+"/exercises", 
        JSON.stringify({
            name: exercise.name, 
            repstime: exercise.repstime,
            sets: exercise.sets,
            description: exercise.description
          }), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Exercise)
      .catch(this.handleError);
  }

  //------------------logs
  createLog(programName: string, log:Log): Promise<Log> {
    return this.http
      .post(this.apiBaseUrl+"programs/"+programName+"/logs", 
        JSON.stringify({
            username: log.username, 
            date: log.date
          }), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Log)
      .catch(this.handleError);
  }

}
