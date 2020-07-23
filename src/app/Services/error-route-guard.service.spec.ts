import { TestBed } from '@angular/core/testing';

import { ErrorRouteGuardService } from './error-route-guard.service';

describe('ErrorRouteGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorRouteGuardService = TestBed.get(ErrorRouteGuardService);
    expect(service).toBeTruthy();
  });
});
