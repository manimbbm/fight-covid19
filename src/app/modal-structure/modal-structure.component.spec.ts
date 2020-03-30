import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalStructureComponent } from './modal-structure.component';

describe('ModalStructureComponent', () => {
  let component: ModalStructureComponent;
  let fixture: ComponentFixture<ModalStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
