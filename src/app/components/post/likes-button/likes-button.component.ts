import { PostService } from './../post.service';
import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-likes-button',
  templateUrl: './likes-button.component.html',
  styleUrls: ['./likes-button.component.css']
})
export class LikesButtonComponent implements OnInit {

  isLiked!: boolean
  interval: any
  countLikes: number = 0
  @Input() data: any

  constructor(
    private postService: PostService,
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.postService.getLikes(this.data).subscribe(
        (response) => {
          this.countLikes = response.length
        }
      )
      this.postService.getLiked(this.data).subscribe(
        (response) => {
          if (response ) {
            this.isLiked = true
          } else {
            this.isLiked = false
          }
        }
      )
    }, 300);
  }

  like() {
    this.postService.like(this.data).subscribe()
  }

}
