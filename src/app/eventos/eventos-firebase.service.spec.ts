import { TestBed } from '@angular/core/testing';

import { EventosFirebaseService } from './eventos-firebase.service';

describe('EventosFirebaseService', () => {
  let service: EventosFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventosFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
