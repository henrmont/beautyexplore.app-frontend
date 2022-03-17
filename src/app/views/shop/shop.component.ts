import { FollowingBoxComponent } from './../../components/profile/following-box/following-box.component';
import { ViewShopPostBoxComponent } from './../../components/post/view-shop-post-box/view-shop-post-box.component';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalService } from './../../components/global.service';
import { AccountService } from './../../components/account/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  alias!: string | null

  constructor(
    private accountService: AccountService,
    private globalService: GlobalService,
    private arouter: ActivatedRoute,
    private router: Router,
    private modal: MatDialog
  ) { }

  ngOnInit(): void {
    this.alias = this.arouter.snapshot.paramMap.get('alias')
    this.accountService.getUserInfo().subscribe(
      (response) => {},
      (err) => {
        this.globalService.showMessage('A sessão expirou')
        this.router.navigate(['logout'])
      }
    )
  }

  openModal() {
    const dialogRef = this.modal.open(ViewShopPostBoxComponent, {
      width: '72%',
      panelClass: 'modal'
    })
  }

  openFollowing() {
    const dialogRef = this.modal.open(FollowingBoxComponent, {
      width: '30%',
    })
  }


}
