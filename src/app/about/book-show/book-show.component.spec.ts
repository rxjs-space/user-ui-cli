/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookShowComponent } from './book-show.component';

describe('BookShowComponent', () => {
  let component: BookShowComponent;
  let fixture: ComponentFixture<BookShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
