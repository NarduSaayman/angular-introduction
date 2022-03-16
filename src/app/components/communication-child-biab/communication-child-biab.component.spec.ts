import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationChildBiabComponent } from './communication-child-biab.component';

describe('CommunicationChildBiabComponent', () => {
  let component: CommunicationChildBiabComponent;
  let fixture: ComponentFixture<CommunicationChildBiabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationChildBiabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationChildBiabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
