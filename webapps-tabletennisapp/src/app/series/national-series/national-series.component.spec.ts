import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalSeriesComponent } from './national-series.component';

describe('NationalSeriesComponent', () => {
  let component: NationalSeriesComponent;
  let fixture: ComponentFixture<NationalSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
