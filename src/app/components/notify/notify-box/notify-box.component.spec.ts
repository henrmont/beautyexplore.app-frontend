import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyBoxComponent } from './notify-box.component';

describe('NotifyBoxComponent', () => {
  let component: NotifyBoxComponent;
  let fixture: ComponentFixture<NotifyBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifyBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
