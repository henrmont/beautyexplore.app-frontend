import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountBoxComponent } from './create-account-box.component';

describe('CreateAccountBoxComponent', () => {
  let component: CreateAccountBoxComponent;
  let fixture: ComponentFixture<CreateAccountBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAccountBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
