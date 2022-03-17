import { ActivatedRoute } from '@angular/router';
import { AccountService } from './../../components/account/account.service';
import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {

  @Output() destack!: boolean
  darkTheme!: boolean

  constructor(
    private arouter: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.arouter.data.subscribe(
      (response) => {
        this.destack = response[0].destack
      }
    )
    const dark = window.localStorage.getItem('isDark')
    if (dark && dark == 's') {
      this.darkTheme = true
    } else {
      this.darkTheme = false
    }
  }

  changeTheme(dark: boolean) {
    this.darkTheme = dark
    if (dark) {
      window.localStorage.setItem('isDark', 's')
    } else {
      window.localStorage.setItem('isDark', 'n')
    }
  }



}
