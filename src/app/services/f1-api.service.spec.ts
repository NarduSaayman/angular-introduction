import { TestBed } from '@angular/core/testing';

import { F1ApiService } from './f1-api.service';

describe('F1ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: F1ApiService = TestBed.get(F1ApiService);
    expect(service).toBeTruthy();
  });
});
