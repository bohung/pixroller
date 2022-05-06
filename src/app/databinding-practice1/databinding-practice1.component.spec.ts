import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingPractice1Component } from './databinding-practice1.component';

describe('DatabindingPractice1Component', () => {
  let component: DatabindingPractice1Component;
  let fixture: ComponentFixture<DatabindingPractice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabindingPractice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabindingPractice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
