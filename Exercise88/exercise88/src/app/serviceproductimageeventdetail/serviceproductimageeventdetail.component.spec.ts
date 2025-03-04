import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceproductimageeventdetailComponent } from './serviceproductimageeventdetail.component';

describe('ServiceproductimageeventdetailComponent', () => {
  let component: ServiceproductimageeventdetailComponent;
  let fixture: ComponentFixture<ServiceproductimageeventdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceproductimageeventdetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceproductimageeventdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
