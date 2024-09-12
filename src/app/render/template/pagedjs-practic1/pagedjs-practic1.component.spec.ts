import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagedjsPractic1Component } from './pagedjs-practic1.component';

describe('PagedjsPractic1Component', () => {
  let component: PagedjsPractic1Component;
  let fixture: ComponentFixture<PagedjsPractic1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagedjsPractic1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagedjsPractic1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
