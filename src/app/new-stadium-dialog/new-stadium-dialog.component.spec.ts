import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStadiumDialogComponent } from './new-stadium-dialog.component';

describe('NewStadiumDialogComponent', () => {
  let component: NewStadiumDialogComponent;
  let fixture: ComponentFixture<NewStadiumDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStadiumDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStadiumDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
