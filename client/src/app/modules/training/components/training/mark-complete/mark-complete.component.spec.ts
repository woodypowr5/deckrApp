import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkCompleteComponent } from './mark-complete.component';

describe('MarkCompleteComponent', () => {
  let component: MarkCompleteComponent;
  let fixture: ComponentFixture<MarkCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
