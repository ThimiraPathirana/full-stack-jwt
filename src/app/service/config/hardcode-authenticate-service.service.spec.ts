import { TestBed } from '@angular/core/testing';

import { HardcodeAuthenticateServiceService } from './hardcode-authenticate-service.service';

describe('HardcodeAuthenticateServiceService', () => {
  let service: HardcodeAuthenticateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodeAuthenticateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
