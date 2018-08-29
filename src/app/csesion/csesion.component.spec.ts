import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsesionComponent } from './csesion.component';

describe('CsesionComponent', () => {
  let component: CsesionComponent;
  let fixture: ComponentFixture<CsesionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsesionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
