import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateblogstatusComponent } from './updateblogstatus.component';

describe('UpdateblogstatusComponent', () => {
  let component: UpdateblogstatusComponent;
  let fixture: ComponentFixture<UpdateblogstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateblogstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateblogstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
