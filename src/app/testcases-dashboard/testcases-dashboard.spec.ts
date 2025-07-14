import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcasesDashboard } from './testcases-dashboard';

describe('TestcasesDashboard', () => {
  let component: TestcasesDashboard;
  let fixture: ComponentFixture<TestcasesDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestcasesDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestcasesDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
