import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmniscriptDashboard } from './omniscript-dashboard';

describe('OmniscriptDashboard', () => {
  let component: OmniscriptDashboard;
  let fixture: ComponentFixture<OmniscriptDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OmniscriptDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmniscriptDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
