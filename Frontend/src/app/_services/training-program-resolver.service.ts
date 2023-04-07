import { DomSanitizer } from '@angular/platform-browser';
import { ImageProcessingTPService } from './image-processing-tp.service';
import { TrainingProgramService } from './training-program.service';
import { TrainingProgram } from './../_models/TrainingProgram';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingProgramResolverService implements Resolve<TrainingProgram> {

  constructor(private tps : TrainingProgramService, private IPTPS : ImageProcessingTPService,private sanitizer:DomSanitizer) { }
  resolve(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): TrainingProgram | Observable<TrainingProgram> | Promise<TrainingProgram> {
      const id = route.paramMap.get("id")
      if(id){
        return this.tps.getTrainingProgramById(id)
        .pipe(
          map(p => this.IPTPS.createImages(p))
        )
      }else{
        return of(this.getTrainingProgramDetails())
      }
    }
  
    getTrainingProgramDetails(){
      return{
        id:null,
        name:"",
        type:"",
        level:"",
        daysPerWeek:"",
        description:"",
        videoURL: this.sanitizer.bypassSecurityTrustResourceUrl(""),
        coachPictures:[],
        coachCV : ""
      }

  }
}
