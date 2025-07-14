import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestscriptDashboard } from './testscript-dashboard';

describe('TestscriptDashboard', () => {
  let component: TestscriptDashboard;
  let fixture: ComponentFixture<TestscriptDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestscriptDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestscriptDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
