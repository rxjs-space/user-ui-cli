/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LibraryRoutingGuardService } from './library-routing-guard.service';

describe('LibraryRoutingGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibraryRoutingGuardService]
    });
  });

  it('should ...', inject([LibraryRoutingGuardService], (service: LibraryRoutingGuardService) => {
    expect(service).toBeTruthy();
  }));
});
