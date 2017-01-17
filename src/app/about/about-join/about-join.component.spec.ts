/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AboutJoinComponent } from './about-join.component';

describe('AboutJoinComponent', () => {
  let component: AboutJoinComponent;
  let fixture: ComponentFixture<AboutJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
