import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-layout-nav',
  templateUrl: './app-layout-nav.component.html',
  styleUrls: ['./app-layout-nav.component.css']
})
export class AppLayoutNavComponent implements OnInit {

  @Input() destack!: boolean
  cart: boolean = true
  delivery: boolean = true

  constructor() { }

  ngOnInit(): void {
    console.log(this.destack)
  }

}
