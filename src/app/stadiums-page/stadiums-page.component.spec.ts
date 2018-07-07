import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StadiumsPageComponent } from './stadiums-page.component';

describe('StadiumsPageComponent', () => {
  let component: StadiumsPageComponent;
  let fixture: ComponentFixture<StadiumsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StadiumsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StadiumsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
