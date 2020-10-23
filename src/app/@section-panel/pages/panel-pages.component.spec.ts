import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelPagesComponent } from './panel-pages.component';

describe('PagesComponent', () => {
  let component: PanelPagesComponent;
  let fixture: ComponentFixture<PanelPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelPagesComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
