import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrosListComponent } from './centros-list.component';

describe('CentrosListComponent', () => {
  let component: CentrosListComponent;
  let fixture: ComponentFixture<CentrosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentrosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
