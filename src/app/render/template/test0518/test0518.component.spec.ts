import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test0518Component } from './test0518.component';

describe('Test0518Component', () => {
  let component: Test0518Component;
  let fixture: ComponentFixture<Test0518Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test0518Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Test0518Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
