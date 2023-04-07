import { ImageProcessingTPService } from './../_services/image-processing-tp.service';
import { Router } from '@angular/router';
import { TrainingProgramService } from './../_services/training-program.service';
import { TrainingProgram } from './../_models/TrainingProgram';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-training-program',
  templateUrl: './training-program.component.html',
  styleUrls: ['./training-program.component.css']
})
export class TrainingProgramComponent implements OnInit {

  pageNumber:number = 0
  showLoadButton = false
  listTrainingProgram:TrainingProgram[] = []
  trainingProgram:TrainingProgram
  constructor(private trainingProgramService:TrainingProgramService,private router:Router,private IPTPS:ImageProcessingTPService) { }

  ngOnInit(): void {
    this.getAllTrainingPrograms()
  }

  getAllTrainingPrograms(searchKey: string = ""){
    this.trainingProgramService.retrieveAllTrainingPrograms(this.pageNumber,searchKey)
    .pipe(
      map((x:TrainingProgram[],i) => x.map((tp:TrainingProgram) => this.IPTPS.createImages(tp)))
    )
    .subscribe(data =>{
      if(data.length == 3){
        this.showLoadButton = true
      }else{
        this.showLoadButton = false
      }
      data.forEach(tp => this.listTrainingProgram.push(tp))
      //this.listProduct=data
      console.log(data)
    })
  }

  goToTrainingProgram(id:any){
    this.router.navigate(['/goToTrainingProgram',{id:id}])
  }

  loadMoreProduct(){
    this.pageNumber = this.pageNumber + 1
    this.getAllTrainingPrograms()
  }

  searchByKeyWord(searchKeyWord:any){
    console.log(searchKeyWord)
    this.pageNumber = 0
    this.listTrainingProgram = []
    this.getAllTrainingPrograms(searchKeyWord)

  }

}
