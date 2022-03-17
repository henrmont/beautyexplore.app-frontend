import { ImageCroppedEvent } from 'ngx-image-cropper';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-insert-image-post-box',
  templateUrl: './insert-image-post-box.component.html',
  styleUrls: ['./insert-image-post-box.component.css']
})
export class InsertImagePostBoxComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<InsertImagePostBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    if (!this.data.event.target.files[0]) {
      this.dialogRef.close()
    }
  }

  imgChangeEvt: any = this.data.event
  cropImgPreview: any = ''
  
  cropImg(e: ImageCroppedEvent) {
      this.cropImgPreview = e.base64
  }

  imgLoad() {
      // display cropper tool
  }

  initCropper() {
      // init cropper
  }
  
  imgFailed() {
      // error msg
  }

  uploadImage() {
    this.data.images.push(this.cropImgPreview)
    this.data.files.push(this.cropImgPreview)
    this.dialogRef.close()
  }

}
