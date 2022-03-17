import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPostBoxComponent } from './view-post-box.component';

describe('ViewPostBoxComponent', () => {
  let component: ViewPostBoxComponent;
  let fixture: ComponentFixture<ViewPostBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPostBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPostBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
