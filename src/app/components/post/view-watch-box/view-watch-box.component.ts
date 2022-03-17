import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-watch-box',
  templateUrl: './view-watch-box.component.html',
  styleUrls: ['./view-watch-box.component.css']
})
export class ViewWatchBoxComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ViewWatchBoxComponent>
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close()
  }

}
