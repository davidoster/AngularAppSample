import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGreetComponent } from './app-greet.component';

describe('AppGreetComponent', () => {
  let component: AppGreetComponent;
  let fixture: ComponentFixture<AppGreetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppGreetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
