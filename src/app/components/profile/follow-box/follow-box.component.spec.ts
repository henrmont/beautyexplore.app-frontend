import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowBoxComponent } from './follow-box.component';

describe('FollowBoxComponent', () => {
  let component: FollowBoxComponent;
  let fixture: ComponentFixture<FollowBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
