import { PostService } from './../post.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-insert-video-post-box',
  templateUrl: './insert-video-post-box.component.html',
  styleUrls: ['./insert-video-post-box.component.css']
})
export class InsertVideoPostBoxComponent implements OnInit {

  url: any = ''
  format: string = 'video'

  constructor(
    private dialogRef: MatDialogRef<InsertVideoPostBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {
    console.log()
    if (!this.data.event.target.files[0]) {
      this.dialogRef.close()
    } else if (this.data.event.target.files[0].size > 10485760) {
      this.globalService.showMessage('Tamanho do arquivo excede 10M')
      this.dialogRef.close()
    }

    const file:File = this.data.event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = e => this.url = (<FileReader>e.target).result;
  }

  uploadVideo() {

    const file:File = this.data.event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file as Blob)
    reader.onloadend = (e) => {
      reader.result as string

      this.data.images.push('assets/img/video.png')

      if (reader.result) {
        this.data.files.push(reader.result)
        this.dialogRef.close()
      }
    }

  }

}
