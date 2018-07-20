import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStadiumCardComponent } from './add-stadium-card.component';

describe('AddStadiumCardComponent', () => {
  let component: AddStadiumCardComponent;
  let fixture: ComponentFixture<AddStadiumCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStadiumCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStadiumCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
