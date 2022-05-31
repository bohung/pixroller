import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test0523Component } from './test0523.component';

describe('Test0523Component', () => {
  let component: Test0523Component;
  let fixture: ComponentFixture<Test0523Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test0523Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Test0523Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
