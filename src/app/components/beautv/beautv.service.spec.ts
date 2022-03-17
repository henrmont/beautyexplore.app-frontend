import { TestBed } from '@angular/core/testing';

import { BeautvService } from './beautv.service';

describe('BeautvService', () => {
  let service: BeautvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeautvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
