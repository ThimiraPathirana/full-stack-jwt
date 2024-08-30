import { TestBed } from '@angular/core/testing';

import { EventTypeServiceService } from './event-type-service.service';

describe('EventTypeServiceService', () => {
  let service: EventTypeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventTypeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
