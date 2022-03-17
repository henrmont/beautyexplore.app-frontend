import { GlobalService } from './../../global.service';
import { AccountService } from './../account.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Account } from '../account.model';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']
})
export class ConfirmEmailComponent implements OnInit {

  user: Account = {
    token: null
  }

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
        if(response.valid){
          this.accountService.confirmEmail(this.user).subscribe(
            (response) => {
              this.globalService.showMessage(response.message)
              if (response.status) {
                this.router.navigate([''])
              } 
            }
          )
        } else {
          this.globalService.showMessage(response.message)
          this.router.navigate([''])
        }
      },
      (err) => {
        this.globalService.showMessage(err.message)
      }
    )
  }

}
