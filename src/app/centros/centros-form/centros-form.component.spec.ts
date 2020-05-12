import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrosFormComponent } from './centros-form.component';

describe('CentrosFormComponent', () => {
  let component: CentrosFormComponent;
  let fixture: ComponentFixture<CentrosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentrosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
