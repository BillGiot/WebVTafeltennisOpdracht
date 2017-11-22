import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalSeriesComponent } from './international-series.component';

describe('InternationalSeriesComponent', () => {
  let component: InternationalSeriesComponent;
  let fixture: ComponentFixture<InternationalSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
