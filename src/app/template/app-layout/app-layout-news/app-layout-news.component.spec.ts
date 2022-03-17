import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLayoutNewsComponent } from './app-layout-news.component';

describe('AppLayoutNewsComponent', () => {
  let component: AppLayoutNewsComponent;
  let fixture: ComponentFixture<AppLayoutNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLayoutNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLayoutNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
