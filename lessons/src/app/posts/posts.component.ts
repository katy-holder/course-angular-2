import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  [x: string]: any;

  constructor(
    private _postServis: PostService
  ) { }

  ngOnInit() {
    this._postServis.getPostsAll().subscribe( (data) => {
      this.posts = data
      console.log(data);
    })
  }

}
