import { TestBed } from '@angular/core/testing';

import { SecurityGroupsService } from './security-groups.service';

describe('SecurityGroupsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecurityGroupsService = TestBed.get(SecurityGroupsService);
    expect(service).toBeTruthy();
  });
});
