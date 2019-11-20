import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SaySomethingComponent} from './say-something.component';

describe('SaySomethingComponent', () => {
  let component: SaySomethingComponent;
  let fixture: ComponentFixture<SaySomethingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SaySomethingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaySomethingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
