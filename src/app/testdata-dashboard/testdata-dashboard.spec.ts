import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdataDashboard } from './testdata-dashboard';

describe('TestdataDashboard', () => {
  let component: TestdataDashboard;
  let fixture: ComponentFixture<TestdataDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestdataDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestdataDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
