import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteadorComponent } from './reporteador.component';

describe('ReporteadorComponent', () => {
  let component: ReporteadorComponent;
  let fixture: ComponentFixture<ReporteadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
