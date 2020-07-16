import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelPostComponent } from './wel-post.component';

describe('WelPostComponent', () => {
  let component: WelPostComponent;
  let fixture: ComponentFixture<WelPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
