import { MatChipInputEvent } from '@angular/material/chips';
import { ENTER, COMMA, SPACE, TAB } from '@angular/cdk/keycodes';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { GlobalService } from '../../global.service';
import { InsertImagePostBoxComponent } from '../insert-image-post-box/insert-image-post-box.component';
import { InsertVideoPostBoxComponent } from '../insert-video-post-box/insert-video-post-box.component';
import { DeleteItemPostBoxComponent } from '../delete-item-post-box/delete-item-post-box.component';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

@Component({
  selector: 'app-create-shop-post-box',
  templateUrl: './create-shop-post-box.component.html',
  styleUrls: ['./create-shop-post-box.component.css']
})
export class CreateShopPostBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }



}
