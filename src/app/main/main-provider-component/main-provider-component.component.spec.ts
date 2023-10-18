import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProviderComponentComponent } from './main-provider-component.component';

describe('MainProviderComponentComponent', () => {
  let component: MainProviderComponentComponent;
  let fixture: ComponentFixture<MainProviderComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainProviderComponentComponent]
    });
    fixture = TestBed.createComponent(MainProviderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
