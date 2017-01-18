/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetHtmlService } from './get-html.service';

describe('GetHtmlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetHtmlService]
    });
  });

  it('should ...', inject([GetHtmlService], (service: GetHtmlService) => {
    expect(service).toBeTruthy();
  }));
});
