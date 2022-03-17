import { NotifyBoxComponent } from './../../../components/notify/notify-box/notify-box.component';
import { MessageBoxComponent } from './../../../components/message/message-box/message-box.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-app-layout-sidenav',
  templateUrl: './app-layout-sidenav.component.html',
  styleUrls: ['./app-layout-sidenav.component.css']
})
export class AppLayoutSidenavComponent implements OnInit {

  darkTheme!: boolean
  @Output() setDarkTheme = new EventEmitter<boolean>()

  @Output() sidenavClose = new EventEmitter()
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger

  constructor(
    private modal: MatDialog
  ) { }

  ngOnInit(): void {
    const dark = window.localStorage.getItem('isDark')
    if (dark && dark == 's') {
      this.darkTheme = true
    } else {
      this.darkTheme = false
    }
  }

  public onSidenavClose() {
    this.sidenavClose.emit();
  }

  someMethod() {
    this.trigger.openMenu();
  }

  changeTheme () {
    if (this.darkTheme == true) {
      this.darkTheme = false
    } else {
      this.darkTheme = true
    }
  }

  public onDarkTheme(dt: boolean) {
    this.setDarkTheme.emit(dt);
  }

  messages() {
    const dialogRef = this.modal.open(MessageBoxComponent, {
      width: '65%',
      height: '80%',
      disableClose: true
    })
    this.onSidenavClose()
  }

  notifications() {
    const dialogRef = this.modal.open(NotifyBoxComponent, {
      width: '30%'
    })
    this.onSidenavClose()
  }



}
