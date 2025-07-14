import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCanvas } from './project-canvas';

describe('ProjectCanvas', () => {
  let component: ProjectCanvas;
  let fixture: ComponentFixture<ProjectCanvas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCanvas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCanvas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
