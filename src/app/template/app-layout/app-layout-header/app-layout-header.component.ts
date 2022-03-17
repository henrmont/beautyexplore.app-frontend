import { CreateShopPostBoxComponent } from './../../../components/post/create-shop-post-box/create-shop-post-box.component';
import { CreatePostBoxComponent } from './../../../components/post/create-post-box/create-post-box.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-app-layout-header',
  templateUrl: './app-layout-header.component.html',
  styleUrls: ['./app-layout-header.component.css']
})
export class AppLayoutHeaderComponent implements OnInit {

  badge!: number

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  @Output() public sidenavToggle = new EventEmitter();

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    // this.badge = 12
  }

  public onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  createPost(): void {
    const dialogRef = this.dialog.open(CreatePostBoxComponent, {
      width: '70%'
    });
  }

  createShopPost(): void {
    const dialogRef = this.dialog.open(CreateShopPostBoxComponent, {
      width: '70%',
      disableClose: true
    });
  }

}
