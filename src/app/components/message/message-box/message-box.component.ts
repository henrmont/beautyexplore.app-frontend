import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<MessageBoxComponent>
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close()
  }

}
