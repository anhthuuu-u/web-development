import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFashionDetailComponent } from './client-fashion-detail.component';

describe('ClientFashionDetailComponent', () => {
  let component: ClientFashionDetailComponent;
  let fixture: ComponentFixture<ClientFashionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientFashionDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientFashionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
