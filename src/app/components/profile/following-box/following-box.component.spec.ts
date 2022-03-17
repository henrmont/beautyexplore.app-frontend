import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingBoxComponent } from './following-box.component';

describe('FollowingBoxComponent', () => {
  let component: FollowingBoxComponent;
  let fixture: ComponentFixture<FollowingBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowingBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
