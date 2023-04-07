import { Rating } from './../_models/Rating';
import { Exercise } from './../_models/Exercise';
import { ExerciseService } from './../_services/exercise.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../_services/storage.service';
import { RatingService } from '../_services/rating.service';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrls: ['./exercise-details.component.css']
})
export class ExerciseDetailsComponent implements OnInit {
  exercise:Exercise
  selectedExerciseIndex = 0
  stars = [1, 2, 3, 4, 5];
  rating: Rating;

  constructor(private activatedRoute : ActivatedRoute , private router:Router,
    private tokenStorageService: StorageService,private exerciseService: ExerciseService,
    private ratingService:RatingService) { }

  ngOnInit(): void {
    this.exercise = this.activatedRoute.snapshot.data['exercise']
    this.rating = this.activatedRoute.snapshot.data['rating']
    console.log(this.exercise)
    //let userId = this.tokenStorageService.getUser().id;
    //this.rating = +(sessionStorage.getItem(`rating_${userId}`) || localStorage.getItem(`rating_${userId}`) || 0);
    
  }

  changeIndex(index:any){
    this.selectedExerciseIndex = index
  }

  /*updateRating(rating: number) {
    this.rating = rating;
    let userId = this.tokenStorageService.getUser().id;
        localStorage.setItem(`rating_${userId}`, `${rating}`);
        sessionStorage.setItem(`rating_${userId}`, `${rating}`);
      
  }*/

  updateExerciseRating(exercise:Exercise,id:any){
    this.exerciseService.updateExerciseRating(exercise,id).subscribe(
      (data:Exercise) =>{
        console.log(data)
      }
    )
  }
  
  addRating(rating:Rating,exerciseId:any){
    let userId = this.tokenStorageService.getUser().id;
    this.ratingService.addRating(rating,exerciseId,userId).subscribe(
      (data:Rating) =>{
        console.log(data)
      }
    )
  }


}
