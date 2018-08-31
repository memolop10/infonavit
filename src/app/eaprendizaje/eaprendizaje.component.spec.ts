import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EaprendizajeComponent } from './eaprendizaje.component';

describe('EaprendizajeComponent', () => {
  let component: EaprendizajeComponent;
  let fixture: ComponentFixture<EaprendizajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EaprendizajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EaprendizajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
