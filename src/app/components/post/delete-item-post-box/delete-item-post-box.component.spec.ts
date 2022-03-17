import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteItemPostBoxComponent } from './delete-item-post-box.component';

describe('DeleteItemPostBoxComponent', () => {
  let component: DeleteItemPostBoxComponent;
  let fixture: ComponentFixture<DeleteItemPostBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteItemPostBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteItemPostBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
