import { CommentPostBoxComponent } from './../comment-post-box/comment-post-box.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { Gallery, GalleryRef } from 'ng-gallery';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css'],
})
export class ViewPostComponent implements OnInit {

  galleryId: any
  
  comment: any = ''
  @Input() data: any
  

  constructor(
    private gallery: Gallery,
    private modal: MatDialog
  ) { }

  ngOnInit(): void {

    this.galleryId = this.data.id

    const galleryRef: GalleryRef = this.gallery.ref(this.galleryId);

    this.data.files.forEach(
      (element: any) => {
        if (this.contentType(element.url) == 'image/png' || this.contentType(element.url) == 'image/jpeg') {
          galleryRef.addImage({
            src: element.url,
            thumb: element.url,
            title: 'Some title'
          });
        } else {
          galleryRef.addVideo({
            src: [ 
              {
                url: element.url, 
                type: 'video/mp4',
              },
            ],
            // thumb: 'assets/demo/demo3.png',
            // poster: 'assets/demo/demo3.png',
          });
        }
      }
    )

    // galleryRef.addImage({
    //   src: 'assets/demo/demo1.png',
    //   thumb: 'assets/demo/demo1.png',
    //   title: 'Some title'
    // });

    // galleryRef.addImage({
    //   src: 'assets/demo/demo2.png',
    //   thumb: 'assets/demo/demo2.png',
    //   title: 'Some title'
    // });

    // galleryRef.addVideo({
    //   src: [ 
    //     {
    //       url: 'assets/demo/video2.mp4', 
    //       type: 'video/mp4',
    //     },
    //   ],
    //   thumb: 'assets/demo/demo3.png',
    //   poster: 'assets/demo/demo3.png',
    // });

    // galleryRef.addImage({
    //   src: 'assets/demo/demo4.png',
    //   thumb: 'assets/demo/demo4.png',
    //   title: 'Some title'
    // });

    // galleryRef.addVideo({
    //   src: [ 
    //     {
    //       url: 'assets/demo/video.mp4', 
    //       type: 'video/mp4',
    //     },
    //   ],
    //   thumb: 'assets/demo/demo2.png',
    //   poster: 'assets/demo/demo2.png',
    // });

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

  commentPost() {
    const dialogRef = this.modal.open(CommentPostBoxComponent, {
      width: '30%'
    })
  }

}
