import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceproductimageeventComponent } from './serviceproductimageevent.component';

describe('ServiceproductimageeventComponent', () => {
  let component: ServiceproductimageeventComponent;
  let fixture: ComponentFixture<ServiceproductimageeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceproductimageeventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceproductimageeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
