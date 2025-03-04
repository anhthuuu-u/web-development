import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productex86Component } from './productex86.component';

describe('Productex86Component', () => {
  let component: Productex86Component;
  let fixture: ComponentFixture<Productex86Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productex86Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productex86Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
