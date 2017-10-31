import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchadosPerdidosComponent } from './achados-perdidos.component';

describe('AchadosPerdidosComponent', () => {
  let component: AchadosPerdidosComponent;
  let fixture: ComponentFixture<AchadosPerdidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchadosPerdidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchadosPerdidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
