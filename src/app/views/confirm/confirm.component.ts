import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  token: any

  constructor(
    private arouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.token = this.arouter.snapshot.paramMap.get('token')
  }

}
