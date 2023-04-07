import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Exercise } from '../_models/Exercise';
import { FileHandle } from '../_models/file-model.handle';
import { ExerciseService } from '../_services/exercise.service';

@Component({
  selector: 'app-exercice-dash',
  templateUrl: './exercice-dash.component.html',
  styleUrls: ['./exercice-dash.component.css']
})
export class ExerciseDASHComponent implements OnInit {
  exercice:Exercise = {
    id:0,
    name:"",
    bodyPart:"",
    level:"",
    description:"",
    average:0,
    nbrSets:0,
    nbrReps:0,
    exerciseImages:[],
    ratings:[]
  }
  pageNumber:number = 0
  showLoadButton = false
  listExercice:Exercise[]
  deleteExercice: Exercise
  editExercice: Exercise


  constructor(private exerciseService:ExerciseService,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.retrieveAllExercices()
  }

  retrieveAllExercices(): void{
    this.exerciseService.retrieveAllExercies()
    .subscribe(
      data=>{
      this.listExercice=data
      console.log(data)
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }) 
  }

  public onAddExercice(addForm: NgForm): void {
    const exerciceFormData = this.prepareFormData(this.exercice)
    document.getElementById('add-exercice-form')!.click();
    this.exerciseService.addExercice(exerciceFormData).subscribe(
      (data: Exercise) => {
        console.log(data);
        this.retrieveAllExercices();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateExercice(exercice: Exercise , id:any): void {
    this.exerciseService.updateExercice(exercice , id).subscribe(
      (data: Exercise) => {
        console.log(data);
        this.retrieveAllExercices();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteExercice(id: any): void {
    this.exerciseService.deleteExercice(id).subscribe(
      (data: void) => {
        console.log(data);
        this.retrieveAllExercices();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(exercice: Exercise, mode: string): void {
    
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addExerciceModal');
    }
    if (mode === 'edit') {
      this.editExercice = exercice;
      button.setAttribute('data-target', '#updateExerciceModal');
    }
    if (mode === 'delete') {
      this.deleteExercice = exercice;
      button.setAttribute('data-target', '#deleteExerciceModal');
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
      this.exercice?.exerciseImages?.push(fileHandle)
    }
  }

  prepareFormData(exercice:Exercise):FormData{
    const formData = new FormData()
    formData.append(
      'exercise',
      new Blob([JSON.stringify(exercice)],{type:'application/json'})
    )
    for(var i=0;i<exercice?.exerciseImages?.length;i++){
      formData.append(
        'imageFile',
        exercice?.exerciseImages[i]?.file,
        exercice?.exerciseImages[i]?.file?.name
      )
    }
    return formData
  }

  removeImage(i:any){
    this.exercice.exerciseImages.splice(i,1)
  }

  /*loadMoreProduct(){
    this.pageNumber = this.pageNumber + 1
    this.retrieveAllExercices()
  }*/

  /*searchByKeyWord(searchKeyWord:any){
    console.log(searchKeyWord)
    this.pageNumber = 0
    this.listExercice = []
    this.retrieveAllExercices(searchKeyWord)

  }*/


}
