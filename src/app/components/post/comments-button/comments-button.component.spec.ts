import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsButtonComponent } from './comments-button.component';

describe('CommentsButtonComponent', () => {
  let component: CommentsButtonComponent;
  let fixture: ComponentFixture<CommentsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
