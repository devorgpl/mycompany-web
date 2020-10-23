import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonsPolicyComponent } from './commons-policy.component';

describe('CommonsPolicyComponent', () => {
  let component: CommonsPolicyComponent;
  let fixture: ComponentFixture<CommonsPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonsPolicyComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonsPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
