import { GlobalService } from './../../global.service';
import { AccountService } from './../account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Account } from '../account.model';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  user: Account = {
    password: '',
    token: null
  }

  cpassword: string = ''

  constructor(
    private router: Router,
    private arouter: ActivatedRoute,
    private accountService: AccountService,
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {
    this.user.token = this.arouter.snapshot.paramMap.get('token')
    this.accountService.getValidToken(this.user).subscribe(
      (response) => {
        if(!response.valid){
          this.globalService.showMessage(response.message)
          this.router.navigate([''])
        }
      }
    )
  }

  onSubmit(): void {
    if (this.user.password === this.cpassword) {
      this.accountService.resetPassword(this.user).subscribe(
        (response) => {
          this.globalService.showMessage(response.message)
          if (response.status) {
            this.router.navigate([''])
          } 
        }
      )
    } else {
      this.globalService.showMessage('Senhas diferentes')
    }
  }

}
