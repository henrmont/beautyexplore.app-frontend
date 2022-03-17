import { MatDialog } from '@angular/material/dialog';
import { GlobalService } from './../../components/global.service';
import { Router } from '@angular/router';
import { AccountService } from './../../components/account/account.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ViewPostBoxComponent } from 'src/app/components/post/view-post-box/view-post-box.component';



@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {

  @ViewChild(TemplateRef, { static: false }) tpl!: TemplateRef<any>;


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
    const dialogRef = this.modal.open(ViewPostBoxComponent, {
      width: '72%',
      panelClass: 'modal'
    })
  }

}
