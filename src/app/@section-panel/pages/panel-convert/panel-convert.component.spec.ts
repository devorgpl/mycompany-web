import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelConvertComponent } from './panel-convert.component';

describe('PanelConvertComponent', () => {
  let component: PanelConvertComponent;
  let fixture: ComponentFixture<PanelConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelConvertComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
