import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagejsPracticeComponent } from './pagejs-practice.component';

describe('PagejsPracticeComponent', () => {
  let component: PagejsPracticeComponent;
  let fixture: ComponentFixture<PagejsPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagejsPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagejsPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
