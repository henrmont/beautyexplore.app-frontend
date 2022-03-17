import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-post-box',
  templateUrl: './comment-post-box.component.html',
  styleUrls: ['./comment-post-box.component.css']
})
export class CommentPostBoxComponent implements OnInit {

  comment: any = ''

  constructor() { }

  ngOnInit(): void {
  }

  toggled: boolean = false;
  handleSelection(event: any) {
    this.comment += event.char
    // console.log(event.char);
  }

}
