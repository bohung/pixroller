import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework0517Component } from './homework0517.component';

describe('Homework0517Component', () => {
  let component: Homework0517Component;
  let fixture: ComponentFixture<Homework0517Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homework0517Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Homework0517Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
