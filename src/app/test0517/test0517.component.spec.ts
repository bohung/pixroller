import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test0517Component } from './test0517.component';

describe('Test0517Component', () => {
  let component: Test0517Component;
  let fixture: ComponentFixture<Test0517Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test0517Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Test0517Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
