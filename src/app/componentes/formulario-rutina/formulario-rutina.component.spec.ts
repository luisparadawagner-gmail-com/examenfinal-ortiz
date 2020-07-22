import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRutinaComponent } from './formulario-rutina.component';

describe('FormularioRutinaComponent', () => {
  let component: FormularioRutinaComponent;
  let fixture: ComponentFixture<FormularioRutinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioRutinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioRutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
