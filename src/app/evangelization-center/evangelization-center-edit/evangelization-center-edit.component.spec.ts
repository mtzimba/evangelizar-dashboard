import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvangelizationCenterEditComponent } from './evangelization-center-edit.component';

describe('EvangelizationCenterEditComponent', () => {
  let component: EvangelizationCenterEditComponent;
  let fixture: ComponentFixture<EvangelizationCenterEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvangelizationCenterEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvangelizationCenterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
