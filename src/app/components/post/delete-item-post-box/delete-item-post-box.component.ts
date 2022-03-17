import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-delete-item-post-box',
  templateUrl: './delete-item-post-box.component.html',
  styleUrls: ['./delete-item-post-box.component.css']
})
export class DeleteItemPostBoxComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DeleteItemPostBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close()
  }

  deleteItem(i: number) {
    this.data.files.splice(i, 1)
    this.data.images.splice(i, 1)
    this.close()
  }

}
