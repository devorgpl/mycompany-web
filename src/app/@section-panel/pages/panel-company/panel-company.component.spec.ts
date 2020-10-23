import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCompanyComponent } from './panel-company.component';

describe('PanelCompanyComponent', () => {
  let component: PanelCompanyComponent;
  let fixture: ComponentFixture<PanelCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
