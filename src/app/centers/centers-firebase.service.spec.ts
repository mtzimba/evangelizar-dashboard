import { TestBed } from '@angular/core/testing';

import { CentrosFirebaseService } from '../centros/centros-firebase.service';

describe('CentrosFirebaseService', () => {
  let service: CentrosFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentrosFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
