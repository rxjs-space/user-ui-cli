/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BbsComponent } from './bbs.component';

describe('BbsComponent', () => {
  let component: BbsComponent;
  let fixture: ComponentFixture<BbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
