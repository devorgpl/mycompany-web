import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {MainPagesComponent} from './main-pages.component';

describe('PagesComponent', () => {
  let component: MainPagesComponent;
  let fixture: ComponentFixture<MainPagesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MainPagesComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
