import { TestBed } from '@angular/core/testing';

import { ShortlyService } from './shortly.service';

describe('ShortlyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShortlyService = TestBed.get(ShortlyService);
    expect(service).toBeTruthy();
  });
});
