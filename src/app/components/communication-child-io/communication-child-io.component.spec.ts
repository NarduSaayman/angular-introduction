import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationChildIoComponent } from './communication-child-io.component';

describe('CommunicationChildIoComponent', () => {
  let component: CommunicationChildIoComponent;
  let fixture: ComponentFixture<CommunicationChildIoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationChildIoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationChildIoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
