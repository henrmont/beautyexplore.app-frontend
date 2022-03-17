import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShopPostBoxComponent } from './view-shop-post-box.component';

describe('ViewShopPostBoxComponent', () => {
  let component: ViewShopPostBoxComponent;
  let fixture: ComponentFixture<ViewShopPostBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewShopPostBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewShopPostBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
