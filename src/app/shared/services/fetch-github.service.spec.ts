/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FetchGithubService } from './fetch-github.service';

describe('FetchGithubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchGithubService]
    });
  });

  it('should ...', inject([FetchGithubService], (service: FetchGithubService) => {
    expect(service).toBeTruthy();
  }));
});
