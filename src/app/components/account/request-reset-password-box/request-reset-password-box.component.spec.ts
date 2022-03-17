import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestResetPasswordBoxComponent } from './request-reset-password-box.component';

describe('RequestResetPasswordBoxComponent', () => {
  let component: RequestResetPasswordBoxComponent;
  let fixture: ComponentFixture<RequestResetPasswordBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestResetPasswordBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestResetPasswordBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
