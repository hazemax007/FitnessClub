import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrainingProgram } from '../_models/TrainingProgram';

const API_URL = 'http://localhost:8089/SpringMVC/trainingProgram/';

@Injectable({
  providedIn: 'root'
})
export class TrainingProgramService {

  constructor(private http: HttpClient) { }

  retrieveAllTrainingPrograms(pagenumber:number,searchKey:string = ""):Observable<any>{
    return this.http.get(API_URL + "retrieve-all-training-programs?pagenumber="+pagenumber+"&searchKey="+searchKey)
  }

  public addTrainingProgram(trainingProgram:FormData){
    return this.http.post<TrainingProgram>(API_URL + "add-training-program" , trainingProgram)
  }

  public updateTrainingProgram(trainingProgram: TrainingProgram , id:any): Observable<TrainingProgram> {
    return this.http.put<TrainingProgram>(API_URL + "update-training-program/" + id , trainingProgram);
  }

  public deleteTrainingProgram(id: any): Observable<void> {
    return this.http.delete<void>(API_URL + "delete-training-program/" + id);
  }

  getTrainingProgramById(id:any){
    return this.http.get<TrainingProgram>(API_URL + 'get-trainingProgram-by-id/' + id);
  }

}
