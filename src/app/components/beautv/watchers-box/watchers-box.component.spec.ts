import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchersBoxComponent } from './watchers-box.component';

describe('WatchersBoxComponent', () => {
  let component: WatchersBoxComponent;
  let fixture: ComponentFixture<WatchersBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchersBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchersBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
