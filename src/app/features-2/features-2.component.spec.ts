import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Features2Component } from './features-2.component';

describe('Features2Component', () => {
  let component: Features2Component;
  let fixture: ComponentFixture<Features2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Features2Component]
    });
    fixture = TestBed.createComponent(Features2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
