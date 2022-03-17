import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertImagePostBoxComponent } from './insert-image-post-box.component';

describe('InsertImagePostBoxComponent', () => {
  let component: InsertImagePostBoxComponent;
  let fixture: ComponentFixture<InsertImagePostBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertImagePostBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertImagePostBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
