import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvangelizationCenterListComponent } from './evangelization-center-list.component';

describe('EvangelizationCenterListComponent', () => {
  let component: EvangelizationCenterListComponent;
  let fixture: ComponentFixture<EvangelizationCenterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvangelizationCenterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvangelizationCenterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
