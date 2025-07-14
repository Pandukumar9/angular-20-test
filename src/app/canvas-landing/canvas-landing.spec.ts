import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasLanding } from './canvas-landing';

describe('CanvasLanding', () => {
  let component: CanvasLanding;
  let fixture: ComponentFixture<CanvasLanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanvasLanding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvasLanding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
