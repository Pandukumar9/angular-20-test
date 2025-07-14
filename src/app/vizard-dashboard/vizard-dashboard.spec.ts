import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VizardDashboard } from './vizard-dashboard';

describe('VizardDashboard', () => {
  let component: VizardDashboard;
  let fixture: ComponentFixture<VizardDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VizardDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VizardDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
