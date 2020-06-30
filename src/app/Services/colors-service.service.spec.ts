import { TestBed } from '@angular/core/testing';

import { ColorsServiceService } from './colors-service.service';

describe('ColorsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColorsServiceService = TestBed.get(ColorsServiceService);
    expect(service).toBeTruthy();
  });
});
