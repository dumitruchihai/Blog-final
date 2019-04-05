import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostlistitemcomponentComponent } from './postlistitemcomponent.component';

describe('PostlistitemcomponentComponent', () => {
  let component: PostlistitemcomponentComponent;
  let fixture: ComponentFixture<PostlistitemcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostlistitemcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostlistitemcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
