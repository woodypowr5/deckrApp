import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityGroupsSummaryComponent } from './security-groups-summary.component';

describe('SecurityGroupsSummaryComponent', () => {
  let component: SecurityGroupsSummaryComponent;
  let fixture: ComponentFixture<SecurityGroupsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityGroupsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityGroupsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
