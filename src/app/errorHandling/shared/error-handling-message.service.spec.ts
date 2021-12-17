import { TestBed } from '@angular/core/testing';

import { ErrorHandlingMessageService } from './error-handling-message.service';

describe('ErrorHandlingService', () => {
  let service: ErrorHandlingMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorHandlingMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
