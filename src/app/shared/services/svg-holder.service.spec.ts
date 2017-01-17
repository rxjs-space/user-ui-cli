/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SvgHolderService } from './svg-holder.service';

describe('SvgHolderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SvgHolderService]
    });
  });

  it('should ...', inject([SvgHolderService], (service: SvgHolderService) => {
    expect(service).toBeTruthy();
  }));
});
