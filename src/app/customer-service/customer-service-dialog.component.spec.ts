import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerServiceDialogComponent } from './customer-service-dialog.component';

describe('CustomerServiceComponent', () => {
  let component: CustomerServiceDialogComponent;
  let fixture: ComponentFixture<CustomerServiceDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerServiceDialogComponent],
    });
    fixture = TestBed.createComponent(CustomerServiceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
