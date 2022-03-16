import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationChildServiceComponent } from './communication-child-service.component';

describe('CommunicationChildServiceComponent', () => {
  let component: CommunicationChildServiceComponent;
  let fixture: ComponentFixture<CommunicationChildServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationChildServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationChildServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
