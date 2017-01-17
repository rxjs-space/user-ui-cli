/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SvgHolderComponent } from './svg-holder.component';

describe('SvgHolderComponent', () => {
  let component: SvgHolderComponent;
  let fixture: ComponentFixture<SvgHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
