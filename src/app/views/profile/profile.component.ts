import { ViewShopPostBoxComponent } from './../../components/post/view-shop-post-box/view-shop-post-box.component';
import { FollowBoxComponent } from './../../components/profile/follow-box/follow-box.component';
import { FollowingBoxComponent } from './../../components/profile/following-box/following-box.component';
import { ViewPostBoxComponent } from './../../components/post/view-post-box/view-post-box.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private modal: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openModal() {
    const dialogRef = this.modal.open(ViewPostBoxComponent, {
      width: '72%',
    })
  }

  openShopModal() {
    const dialogRef = this.modal.open(ViewShopPostBoxComponent, {
      width: '72%',
    })
  }

  openFollowing() {
    const dialogRef = this.modal.open(FollowingBoxComponent, {
      width: '30%',
    })
  }

  openFollow() {
    const dialogRef = this.modal.open(FollowBoxComponent, {
      width: '30%',
    })
  }

}
