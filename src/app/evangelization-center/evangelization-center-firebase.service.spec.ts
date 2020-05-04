import { TestBed } from '@angular/core/testing';

import { EvangelizationCenterFirebaseService } from './evangelization-center-firebase.service';

describe('EvangelizationCenterFirebaseServiceService', () => {
  let service: EvangelizationCenterFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvangelizationCenterFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
