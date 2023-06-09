import { Post } from './../_models/Post';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post:Post
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.post = this.activatedRoute.snapshot.data['post']
    console.log(this.post)
  }

}
