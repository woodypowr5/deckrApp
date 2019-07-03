import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsSummaryComponent } from './trainings-summary.component';

describe('TrainingsSummaryComponent', () => {
  let component: TrainingsSummaryComponent;
  let fixture: ComponentFixture<TrainingsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
