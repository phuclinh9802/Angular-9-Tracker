import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterloginComponent } from './registerlogin.component';

describe('RegisterloginComponent', () => {
  let component: RegisterloginComponent;
  let fixture: ComponentFixture<RegisterloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
