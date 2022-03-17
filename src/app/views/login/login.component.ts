import { RequestResetPasswordBoxComponent } from './../../components/account/request-reset-password-box/request-reset-password-box.component';
import { Router } from '@angular/router';
import { CreateAccountBoxComponent } from './../../components/account/create-account-box/create-account-box.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    const token = window.localStorage.getItem('token')
    if (token) {
      this.router.navigate(['feed'])
    }
  }

  createAccount(): void {
    const dialogRef = this.dialog.open(CreateAccountBoxComponent, {
      width: 'auto',
      panelClass: 'teste'
    });
  }

  resetPassword(): void {
    const dialogRef = this.dialog.open(RequestResetPasswordBoxComponent, {
      width: 'auto'
    });
  }

}
