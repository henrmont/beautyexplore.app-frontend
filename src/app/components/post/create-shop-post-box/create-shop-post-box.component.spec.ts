import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShopPostBoxComponent } from './create-shop-post-box.component';

describe('CreateShopPostBoxComponent', () => {
  let component: CreateShopPostBoxComponent;
  let fixture: ComponentFixture<CreateShopPostBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateShopPostBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateShopPostBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
