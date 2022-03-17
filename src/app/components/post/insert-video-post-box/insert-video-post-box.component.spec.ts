import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertVideoPostBoxComponent } from './insert-video-post-box.component';

describe('InsertVideoPostBoxComponent', () => {
  let component: InsertVideoPostBoxComponent;
  let fixture: ComponentFixture<InsertVideoPostBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertVideoPostBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertVideoPostBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
