import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileexplanationDashboard } from './fileexplanation-dashboard';

describe('FileexplanationDashboard', () => {
  let component: FileexplanationDashboard;
  let fixture: ComponentFixture<FileexplanationDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileexplanationDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileexplanationDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
