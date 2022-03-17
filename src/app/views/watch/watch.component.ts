import { WatchersBoxComponent } from './../../components/beautv/watchers-box/watchers-box.component';
import { ViewWatchBoxComponent } from './../../components/post/view-watch-box/view-watch-box.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GlobalService } from './../../components/global.service';
import { AccountService } from './../../components/account/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private globalService: GlobalService,
    private router: Router,
    private modal: MatDialog
  ) { }

  ngOnInit(): void {
    this.accountService.getUserInfo().subscribe(
      (response) => {},
      (err) => {
        this.globalService.showMessage('A sessão expirou')
        this.router.navigate(['logout'])
      }
    )
  }

  openModal() {
    const dialogRef = this.modal.open(ViewWatchBoxComponent, {
      width: '72%',
      disableClose: true
    })
  }

  openWatchers() {
    const dialogRef = this.modal.open(WatchersBoxComponent, {
      width: '30%',
    })
  }

}
