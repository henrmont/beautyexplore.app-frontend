import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSecureComponent } from './settings-secure.component';

describe('SettingsSecureComponent', () => {
  let component: SettingsSecureComponent;
  let fixture: ComponentFixture<SettingsSecureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsSecureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsSecureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
