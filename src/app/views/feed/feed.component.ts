import { PostService } from './../../components/post/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalService } from './../../components/global.service';
import { AccountService } from './../../components/account/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts: any = []

  constructor(
    private accountService: AccountService,
    private globalService: GlobalService,
    private router: Router,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.accountService.getUserInfo().subscribe(
      (response) => {
        this.postService.getPosts().subscribe(
          (response) => {
            this.posts = response
          }
        )
      },
      (err) => {
        this.globalService.showMessage('A sessão expirou')
        this.router.navigate(['logout'])
      }
    )
  }

}
