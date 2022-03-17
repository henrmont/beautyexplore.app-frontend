import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShopPostComponent } from './view-shop-post.component';

describe('ViewShopPostComponent', () => {
  let component: ViewShopPostComponent;
  let fixture: ComponentFixture<ViewShopPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewShopPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewShopPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
