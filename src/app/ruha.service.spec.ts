import { TestBed } from '@angular/core/testing';

import { RuhaService } from './ruha.service';

describe('RuhaService', () => {
  let service: RuhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
