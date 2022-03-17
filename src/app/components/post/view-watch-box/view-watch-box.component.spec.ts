import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWatchBoxComponent } from './view-watch-box.component';

describe('ViewWatchBoxComponent', () => {
  let component: ViewWatchBoxComponent;
  let fixture: ComponentFixture<ViewWatchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWatchBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWatchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
