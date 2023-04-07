import { Exercise } from '../_models/Exercise';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ExerciseService } from './exercise.service';
import { map, Observable, of } from 'rxjs';
import { ImageProcessingExerciceService } from './image-processing-exercice.service';

@Injectable({
  providedIn: 'root'
})
export class ExerciseResolverService implements Resolve<Exercise>{

  constructor(private exerciseService : ExerciseService , private IPES : ImageProcessingExerciceService) { }

  resolve(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ) : Observable<Exercise> {
    const id = route.paramMap.get("id")
    if(id){
      return this.exerciseService.getExerciceById(id)
      .pipe(
        map(e => this.IPES.createImages(e))
      )
    }else{
      return of(this.getExerciceDetails())
    }
  }

  getExerciceDetails(){
    return{
      id:null,
      name:"",
      bodyPart:"",
      level:"",
      description:"",
      average:0,
      nbrSets:0,
      nbrReps:0,
      stars:0,
      exerciseImages:[],
      ratings:[]
    }
  }
}
