import { Exercise } from '../_models/Exercise';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = 'http://localhost:8089/SpringMVC/exercise/';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private http: HttpClient) { }
  
  retrieveAllExercies():Observable<any>{
    return this.http.get(API_URL + "retrieve-all-exercises")
  }

  public addExercice(exercise:FormData){
    return this.http.post<Exercise>(API_URL + "add-exercise" , exercise)
  }

  public updateExercice(exercise: Exercise , id:any): Observable<Exercise> {
    return this.http.put<Exercise>(API_URL + "update-exercise/" + id , exercise);
  }

  public deleteExercice(id: any): Observable<void> {
    return this.http.delete<void>(API_URL + "delete-exercise/" + id);
  }

  getExerciceById(id:any){
    return this.http.get<Exercise>(API_URL + 'get-exercise-by-id/' + id);
  }

  updateExerciseRating(exercise:Exercise , id:any): Observable<Exercise>{
    return this.http.put<Exercise>(API_URL + "update-exercise-rating/" + id , exercise)
  }
}
