import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstoryDashboard } from './userstory-dashboard';

describe('UserstoryDashboard', () => {
  let component: UserstoryDashboard;
  let fixture: ComponentFixture<UserstoryDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserstoryDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserstoryDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
