import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsSummaryComponent } from './contracts-summary.component';

describe('ContractsSummaryComponent', () => {
  let component: ContractsSummaryComponent;
  let fixture: ComponentFixture<ContractsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
