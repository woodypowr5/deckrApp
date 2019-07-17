import { TestBed } from '@angular/core/testing';

import { ContractsApiService } from './contracts-api.service';

describe('ContractsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContractsApiService = TestBed.get(ContractsApiService);
    expect(service).toBeTruthy();
  });
});
