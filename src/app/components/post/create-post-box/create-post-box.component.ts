import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { InsertVideoPostBoxComponent } from './../insert-video-post-box/insert-video-post-box.component';
import { GlobalService } from './../../global.service';
import { PostService } from './../post.service';
import { Post } from './../post.model';
import { InsertImagePostBoxComponent } from './../insert-image-post-box/insert-image-post-box.component';
import { DeleteItemPostBoxComponent } from './../delete-item-post-box/delete-item-post-box.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Output, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { COMMA, ENTER, SPACE, TAB } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-create-post-box',
  templateUrl: './create-post-box.component.html',
  styleUrls: ['./create-post-box.component.css']
})
export class CreatePostBoxComponent implements OnInit, OnDestroy {

  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  fourthFormGroup!: FormGroup;

  @Output() files: string[] = []
  @Output() images: any[] = [] 
  interval: any
  limit: boolean = false
  checkFile: boolean = true
  imageFileType: string = 'image/png, image/jpeg'
  videoFileType: string = 'video/mp4'

  addOnBlur = true
  readonly separatorKeysCodes = [ENTER, COMMA, SPACE, TAB] as const
  
  tags: string[] = []

  visibility: any[] = [
    {value: '1', viewValue: 'Público', viewIcon: 'public', disa: false},
    {value: '0', viewValue: 'Privado', viewIcon: 'lock', disa: false},
    {value: '2', viewValue: 'Personalizado', viewIcon: 'vpn_lock', disa: true},
  ];
  selectionVisibilityOption: string = this.visibility[0].viewValue
  selectionVisibilityIcon: string = this.visibility[0].viewIcon

  @ViewChild('custonInput') custonInput!: ElementRef; 
  custonOption: boolean = true
  custons: string[] = []

  times: any[] = [
    {value: '+1 day', viewValue: '1 dia'},
    {value: '+7 day', viewValue: '1 semana'},
    {value: '+1 month', viewValue: '1 mês'},
  ];
  timeOption: boolean = true

  post: Post = {
    description: '',
    tags: [],
    public: this.visibility[0].value,
    custons: [],
    likes: [],
    comment: true,
    expire: false,
    time: '',
    erase: false,
    message: '',
    files: []
  }

  constructor(
    private dialogRef: MatDialogRef<CreatePostBoxComponent>,
    private _formBuilder: FormBuilder,
    private dialog: MatDialog,
    private postService: PostService,
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {

    this.firstFormGroup = this._formBuilder.group({
      files: [false, Validators.requiredTrue],
    });
    this.secondFormGroup = this._formBuilder.group({
      description: ['', Validators.required],
      tags: [[]],
    });
    this.thirdFormGroup = this._formBuilder.group({
      public: [this.visibility[0].value, Validators.required],
      custons: [[]],
      comment: [true, Validators.required],
    });
    this.fourthFormGroup = this._formBuilder.group({
      expire: [false, Validators.required],
      time: [this.times[0].value, Validators.required],
      erase: [true, Validators.required],
    });

    this.interval = setInterval(() => {
      if (this.files.length >= 9) {
        this.limit = true
      } else {
        this.limit = false
      }

      if (this.files.length > 0) {
        this.checkFile = false
      } else {
        this.checkFile = true
      }
      this.firstFormGroup = this._formBuilder.group({
        files: [!this.checkFile, Validators.requiredTrue],
      });
    }, 200);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval)
  }

  onImageChange(event: any): void {
    const dialogRef = this.dialog.open(InsertImagePostBoxComponent, {
      width: '90%',
      data: {
        event: event,
        files: this.files,
        images: this.images
      }
    });
  }

  onVideoChange(event: any): void {
    const dialogRef = this.dialog.open(InsertVideoPostBoxComponent, {
      width: '60%',
      data: {
        event: event,
        files: this.files,
        images: this.images
      }
    });
  }

  onItemDelete(index: number): void {
    const dialogRef = this.dialog.open(DeleteItemPostBoxComponent, {
      width: '30%',
      data: {
        index: index,
        files: this.files,
        images: this.images
      }
    });
  }

  close() {
    this.dialogRef.close()
  }

  addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value && this.tags.length < 10) {
      this.tags.push(value);
    }

    event.chipInput!.clear();
  }

  removeTag(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  addCustom(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value && this.custons.length < 10) {
      this.custons.push(value);
    }

    event.chipInput!.clear();
  }

  removeCustom(custom: string): void {
    const index = this.custons.indexOf(custom);

    if (index >= 0) {
      this.custons.splice(index, 1);
    }
  }

  selectionOption(option: string, icon: string) {
    this.selectionVisibilityOption = option
    this.selectionVisibilityIcon = icon
  }

  selectCustonOption(option: string) {
    if (option == 'Personalizado') {
      this.custonOption = false
    } else {
      this.thirdFormGroup.controls['custons'].setValue('');
      // this.custonInput.nativeElement.value = null
      this.custonOption = true
    }
  }

  selectTimeOption(option: number) {
    if (option == 1) {
      this.timeOption = false
    } else {
      this.timeOption = true
    }
  }

  onSubmit(){
    // first form
    this.post.files = this.files

    //second form
    this.post.description = this.secondFormGroup.controls['description'].value
    this.post.tags = this.tags

    //third form
    this.post.public = this.thirdFormGroup.controls['public'].value
    this.post.custons = this.custons
    this.post.comment = this.thirdFormGroup.controls['comment'].value

    //fourth form
    this.post.expire = this.fourthFormGroup.controls['expire'].value
    this.post.time = this.fourthFormGroup.controls['time'].value
    this.post.erase = this.fourthFormGroup.controls['erase'].value

    this.postService.registerPost(this.post).subscribe(
      (response) => {
        this.globalService.showMessage(response.message)
        this.dialogRef.close()
      }
    )
  }
  
}
