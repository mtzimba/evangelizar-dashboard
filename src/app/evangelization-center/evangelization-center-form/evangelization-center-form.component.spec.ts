import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvangelizationCenterFormComponent } from './evangelization-center-form.component';

describe('EvangelizationCenterFormComponent', () => {
  let component: EvangelizationCenterFormComponent;
  let fixture: ComponentFixture<EvangelizationCenterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvangelizationCenterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvangelizationCenterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
