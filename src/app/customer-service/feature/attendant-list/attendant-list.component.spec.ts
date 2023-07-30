import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendantListComponent } from './attendant-list.component';

describe('AttendantListComponent', () => {
  let component: AttendantListComponent;
  let fixture: ComponentFixture<AttendantListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendantListComponent]
    });
    fixture = TestBed.createComponent(AttendantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
