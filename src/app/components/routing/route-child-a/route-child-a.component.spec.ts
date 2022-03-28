import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteChildAComponent } from './route-child-a.component';

describe('RouteChildAComponent', () => {
  let component: RouteChildAComponent;
  let fixture: ComponentFixture<RouteChildAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteChildAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteChildAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
