import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsProgressIndicatorComponent } from './contracts-progress-indicator.component';

describe('ContractsProgressIndicatorComponent', () => {
  let component: ContractsProgressIndicatorComponent;
  let fixture: ComponentFixture<ContractsProgressIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractsProgressIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractsProgressIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
