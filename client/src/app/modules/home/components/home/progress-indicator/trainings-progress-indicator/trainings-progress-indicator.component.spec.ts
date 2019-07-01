import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsProgressIndicatorComponent } from './trainings-progress-indicator.component';

describe('TrainingsProgressIndicatorComponent', () => {
  let component: TrainingsProgressIndicatorComponent;
  let fixture: ComponentFixture<TrainingsProgressIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingsProgressIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingsProgressIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
