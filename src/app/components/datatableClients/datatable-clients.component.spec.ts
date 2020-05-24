import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableClientsComponent } from './datatable-clients.component';

describe('DatatableClientsComponent', () => {
  let component: DatatableClientsComponent;
  let fixture: ComponentFixture<DatatableClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatableClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
