import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpostcomponentComponent } from './newpostcomponent.component';

describe('NewpostcomponentComponent', () => {
  let component: NewpostcomponentComponent;
  let fixture: ComponentFixture<NewpostcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpostcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpostcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
