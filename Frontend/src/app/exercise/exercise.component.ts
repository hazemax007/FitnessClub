import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Exercise } from '../_models/Exercise';
import { ExerciseService } from '../_services/exercise.service';
import { ImageProcessingExerciceService } from '../_services/image-processing-exercice.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  listExercise:Exercise[] = []
  exercise:Exercise
  constructor(private exerciseService:ExerciseService,private IPES:ImageProcessingExerciceService,
    private router:Router) { }

  ngOnInit(): void {
    this.getAllExercices()
  }

  goToExercise(id:any){
    this.router.navigate(['/goToExercise',{id:id}])
  }

  getAllExercices(){
    this.exerciseService.retrieveAllExercies()
    .pipe(
      map((x:Exercise[],i) => x.map((ex:Exercise) => this.IPES.createImages(ex)))
    )
    .subscribe(data  =>{
      this.listExercise=data
      console.log(data)
    })
  }

}
