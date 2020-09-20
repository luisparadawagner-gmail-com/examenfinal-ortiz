import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaRutinaComponent } from './tabla-rutina.component';

describe('TablaRutinaComponent', () => {
  let component: TablaRutinaComponent;
  let fixture: ComponentFixture<TablaRutinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaRutinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaRutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
