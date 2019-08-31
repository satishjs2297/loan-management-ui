import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanManagementComponent } from './add-loan.component';

describe('LoanManagementComponent', () => {
  let component: LoanManagementComponent;
  let fixture: ComponentFixture<LoanManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
