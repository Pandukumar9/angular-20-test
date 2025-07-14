import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSummernote } from './custom-summernote';

describe('CustomSummernote', () => {
  let component: CustomSummernote;
  let fixture: ComponentFixture<CustomSummernote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomSummernote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSummernote);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
