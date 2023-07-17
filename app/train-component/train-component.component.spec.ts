import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainComponentComponent } from './train-component.component';

describe('TrainComponentComponent', () => {
  let component: TrainComponentComponent;
  let fixture: ComponentFixture<TrainComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainComponentComponent]
    });
    fixture = TestBed.createComponent(TrainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
