import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelementoComponent } from './telemento.component';

describe('TelementoComponent', () => {
  let component: TelementoComponent;
  let fixture: ComponentFixture<TelementoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelementoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
