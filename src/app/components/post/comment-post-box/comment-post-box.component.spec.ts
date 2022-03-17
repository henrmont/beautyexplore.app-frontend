import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentPostBoxComponent } from './comment-post-box.component';

describe('CommentPostBoxComponent', () => {
  let component: CommentPostBoxComponent;
  let fixture: ComponentFixture<CommentPostBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentPostBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentPostBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
