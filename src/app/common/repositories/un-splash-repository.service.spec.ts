import { TestBed } from '@angular/core/testing';

import { SplashRepositoryService } from './un-splash-repository.service';

describe('SplashRepositoryService', () => {
  let service: SplashRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SplashRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
