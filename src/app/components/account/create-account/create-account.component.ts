import { CreateAccountBoxComponent } from './../create-account-box/create-account-box.component';
import { MatDialogRef } from '@angular/material/dialog';
import { GlobalService } from './../../global.service';
import { Router } from '@angular/router';
import { AccountService } from './../account.service';
import { Account } from './../account.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  user: Account = {
    username: '',
    alias: '',
    password: ''
  }

  cpassword: string = ''

  constructor(
    private accountService: AccountService,
    private globalService: GlobalService,
    private dialogRef: MatDialogRef<CreateAccountBoxComponent>,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.user.password === this.cpassword) {
      this.accountService.createAccount(this.user).subscribe((response) => {
        this.globalService.showMessage(response.message)
        if (response.status) {
          this.dialogRef.close()
          this.router.navigate([''])
        } 
      })
    } else {
      this.globalService.showMessage('Senhas diferentes')
    }
  }
}
