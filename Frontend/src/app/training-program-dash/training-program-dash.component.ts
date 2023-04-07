import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from '../_models/file-model.handle';
import { TrainingProgram } from '../_models/TrainingProgram';
import { TrainingProgramService } from '../_services/training-program.service';

@Component({
  selector: 'app-training-program-dash',
  templateUrl: './training-program-dash.component.html',
  styleUrls: ['./training-program-dash.component.css']
})
export class TrainingProgramDASHComponent implements OnInit {

  pageNumber:number = 0
  showLoadButton = false

  trainingProgram : TrainingProgram = {
    id : 0,
    name: "",
    type: "",
    level: "",
    daysPerWeek: "",
    description: "",
    videoURL: "",
    coachPictures: [],
    coachCV : ""
  }

  listTrainingProgram:TrainingProgram[] = []
  deleteTrainingProgram: TrainingProgram
  editTrainingProgram: TrainingProgram

  constructor(private trainingProgramService:TrainingProgramService,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.retrieveAllTrainingPrograms()
  }

  retrieveAllTrainingPrograms(searchKeyWord:string = ""): void{
    this.trainingProgramService.retrieveAllTrainingPrograms(this.pageNumber,searchKeyWord)
    .subscribe(
      (data:TrainingProgram[])=>{
      data.forEach((tp) => this.listTrainingProgram.push(tp))
      if(data.length == 3){
        this.showLoadButton = true
      }else {
        this.showLoadButton = false
      }
      console.log(data)
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }) 
  }

  public onAddTrainingProgram(addForm: NgForm): void {
    const trainingProgramFormData = this.prepareFormData(this.trainingProgram)
    document.getElementById('add-trainingProgram-form')!.click();
    this.trainingProgramService.addTrainingProgram(trainingProgramFormData).subscribe(
      (data: TrainingProgram) => {
        console.log(data);
        this.retrieveAllTrainingPrograms();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateTrainingProgram(trainingProgram: TrainingProgram , id:any): void {
    this.trainingProgramService.updateTrainingProgram(trainingProgram , id).subscribe(
      (data: TrainingProgram) => {
        console.log(data);
        this.retrieveAllTrainingPrograms();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteTrainingProgram(id: any): void {
    this.trainingProgramService.deleteTrainingProgram(id).subscribe(
      (data: void) => {
        console.log(data);
        this.retrieveAllTrainingPrograms();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(trainingProgram: TrainingProgram, mode: string): void {
    
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addTrainingProgramModal');
    }
    if (mode === 'edit') {
      this.editTrainingProgram = trainingProgram;
      button.setAttribute('data-target', '#updateTrainingProgramModal');
    }
    if (mode === 'delete') {
      this.deleteTrainingProgram = trainingProgram;
      button.setAttribute('data-target', '#deleteTrainingProgramModal');
    }
    container!.appendChild(button);
    button.click();
  }

  onFileSelected(event:any){
    if(event.target.files){
      const filee = event.target.files[0]
      const fileHandle:FileHandle = {
        file : filee,
        url : this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(filee)
        )
      }
      this.trainingProgram?.coachPictures?.push(fileHandle)
    }
  }

  prepareFormData(trainingProgram:TrainingProgram):FormData{
    const formData = new FormData()
    formData.append(
      'trainingProgram',
      new Blob([JSON.stringify(trainingProgram)],{type:'application/json'})
    )
    for(var i=0;i<trainingProgram?.coachPictures?.length;i++){
      formData.append(
        'imageFile',
        trainingProgram?.coachPictures[i]?.file,
        trainingProgram?.coachPictures[i]?.file?.name
      )
    }
    return formData
  }

  removeImage(i:any){
    this.trainingProgram.coachPictures.splice(i,1)
  }

  loadMoreProduct(){
    this.pageNumber = this.pageNumber + 1
    this.retrieveAllTrainingPrograms()
  }

  searchByKeyWord(searchKeyWord:any){
    console.log(searchKeyWord)
    this.pageNumber = 0
    this.listTrainingProgram = []
    this.retrieveAllTrainingPrograms(searchKeyWord)
  }

}
