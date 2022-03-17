import { ViewShopPostBoxComponent } from './../../../components/post/view-shop-post-box/view-shop-post-box.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-layout-news',
  templateUrl: './app-layout-news.component.html',
  styleUrls: ['./app-layout-news.component.css']
})
export class AppLayoutNewsComponent implements OnInit {

  panelOpenState = false;
  
  constructor(
    private modal: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openModal() {
    const dialogRef = this.modal.open(ViewShopPostBoxComponent, {
      width: '72%'
    })
  }

}
