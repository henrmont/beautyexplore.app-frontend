import { QuestionPostBoxComponent } from './../question-post-box/question-post-box.component';
import { MatDialog } from '@angular/material/dialog';
import { Gallery, GalleryRef } from 'ng-gallery';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-shop-post',
  templateUrl: './view-shop-post.component.html',
  styleUrls: ['./view-shop-post.component.css']
})
export class ViewShopPostComponent implements OnInit {

  galleryId = 'shopPost';

  comment: any = ''
  @Input() data: any

  constructor(
    private gallery: Gallery,
    private modal: MatDialog
  ) { }

  ngOnInit(): void {

    const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);

    galleryRef.addImage({
      src: 'assets/demo/demo1.png',
      thumb: 'assets/demo/demo1.png',
      title: 'Some title'
    });

    galleryRef.addImage({
      src: 'assets/demo/demo2.png',
      thumb: 'assets/demo/demo2.png',
      title: 'Some title'
    });

    galleryRef.addVideo({
      src: [ 
        {
          url: 'assets/demo/video2.mp4', 
          type: 'video/mp4',
        },
      ],
      thumb: 'assets/demo/demo3.png',
      poster: 'assets/demo/demo3.png',
    });

    galleryRef.addImage({
      src: 'assets/demo/demo4.png',
      thumb: 'assets/demo/demo4.png',
      title: 'Some title'
    });

    galleryRef.addVideo({
      src: [ 
        {
          url: 'assets/demo/video.mp4', 
          type: 'video/mp4',
        },
      ],
      thumb: 'assets/demo/demo2.png',
      poster: 'assets/demo/demo2.png',
    });

  }

  toggled: boolean = false;
  handleSelection(event: any) {
    this.comment += event.char
    // console.log(event.char);
  }

  contentType(url: any) {
    let mimeType = url.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)[0]

    return mimeType
  }

  questionPost() {
    const dialogRef = this.modal.open(QuestionPostBoxComponent, {
      width: '30%'
    })
  }

}
