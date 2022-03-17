import { GlobalService } from './../../global.service';
import { MatDialogRef } from '@angular/material/dialog';
import { RequestResetPasswordBoxComponent } from './../request-reset-password-box/request-reset-password-box.component';
import { AccountService } from './../account.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Account } from '../account.model';

@Component({
  selector: 'app-request-reset-password',
  templateUrl: './request-reset-password.component.html',
  styleUrls: ['./request-reset-password.component.css']
})
export class RequestResetPasswordComponent implements OnInit {

  user: Account = {
    username: ''
  }

  constructor(
    private router: Router,
    private accountService: AccountService,
    private globalService: GlobalService,
    private dialogRef: MatDialogRef<RequestResetPasswordBoxComponent>,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.accountService.requestResetPassword(this.user).subscribe((response) => {
      this.globalService.showMessage(response.message)
      if (response.status) {
        this.dialogRef.close()
        this.router.navigate([''])
      } 
    })
  }

}
