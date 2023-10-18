import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainUserComponentComponent } from './main-user-component.component';

describe('MainUserComponentComponent', () => {
  let component: MainUserComponentComponent;
  let fixture: ComponentFixture<MainUserComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainUserComponentComponent]
    });
    fixture = TestBed.createComponent(MainUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
