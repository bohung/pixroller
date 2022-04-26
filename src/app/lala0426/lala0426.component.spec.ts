import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lala0426Component } from './lala0426.component';

describe('Lala0426Component', () => {
  let component: Lala0426Component;
  let fixture: ComponentFixture<Lala0426Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lala0426Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lala0426Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
