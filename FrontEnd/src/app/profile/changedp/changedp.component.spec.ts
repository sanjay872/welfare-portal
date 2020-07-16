import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangedpComponent } from './changedp.component';

describe('ChangedpComponent', () => {
  let component: ChangedpComponent;
  let fixture: ComponentFixture<ChangedpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangedpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangedpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
