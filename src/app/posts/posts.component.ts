import { PostService } from './../Services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

   constructor(private postservice:PostService) { }

  UserData!: any;
  ErrorMes!: any;

  ngOnInit(): void {
    this.postservice.GetPosts().subscribe((Udata) => {
      this.UserData=Udata
    }, (err) => {
      this.ErrorMes = err;
    }
      
    );
  }



}
