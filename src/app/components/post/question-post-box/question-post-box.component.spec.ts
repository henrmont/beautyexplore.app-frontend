import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPostBoxComponent } from './question-post-box.component';

describe('QuestionPostBoxComponent', () => {
  let component: QuestionPostBoxComponent;
  let fixture: ComponentFixture<QuestionPostBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionPostBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionPostBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
