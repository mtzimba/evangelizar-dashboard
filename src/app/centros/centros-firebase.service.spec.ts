import { TestBed } from '@angular/core/testing';

import { CentrosFirebaseService } from './centros-firebase.service';

describe('CentrosFirebaseServiceService', () => {
  let service: CentrosFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentrosFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
