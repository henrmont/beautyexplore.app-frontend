import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesButtonComponent } from './likes-button.component';

describe('LikesButtonComponent', () => {
  let component: LikesButtonComponent;
  let fixture: ComponentFixture<LikesButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikesButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
