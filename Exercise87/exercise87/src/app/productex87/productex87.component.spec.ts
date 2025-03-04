import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productex87Component } from './productex87.component';

describe('Productex87Component', () => {
  let component: Productex87Component;
  let fixture: ComponentFixture<Productex87Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productex87Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productex87Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
