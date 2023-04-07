import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainingProgram } from '../_models/TrainingProgram';
import { TrainingProgramService } from '../_services/training-program.service';

@Component({
  selector: 'app-training-program-details',
  templateUrl: './training-program-details.component.html',
  styleUrls: ['./training-program-details.component.css']
})
export class TrainingProgramDetailsComponent implements OnInit {

  tp:TrainingProgram
  videoLink : any
  sanitizedUrl : SafeResourceUrl
  constructor(private activatedRoute : ActivatedRoute,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.tp = this.activatedRoute.snapshot.data["tp"]
    this.videoLink = this.tp.videoURL
    this.sanitizedUrl = this.sanitizeUrl(this.videoLink);
}

sanitizeUrl(url: string) {
  return this.sanitizer.bypassSecurityTrustResourceUrl(url);
}



}

