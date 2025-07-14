import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Benguluru } from './benguluru';

describe('Benguluru', () => {
  let component: Benguluru;
  let fixture: ComponentFixture<Benguluru>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Benguluru]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Benguluru);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
