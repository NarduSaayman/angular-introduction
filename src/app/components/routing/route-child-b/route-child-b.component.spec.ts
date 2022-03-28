import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteChildBComponent } from './route-child-b.component';

describe('RouteChildBComponent', () => {
  let component: RouteChildBComponent;
  let fixture: ComponentFixture<RouteChildBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteChildBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteChildBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
