import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-post-box',
  templateUrl: './question-post-box.component.html',
  styleUrls: ['./question-post-box.component.css']
})
export class QuestionPostBoxComponent implements OnInit {

  comment: any = ''

  constructor() { }

  ngOnInit(): void {
  }

}
