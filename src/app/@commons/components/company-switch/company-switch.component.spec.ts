import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySwitchComponent } from './company-switch.component';

describe('CompanySwitchComponent', () => {
  let component: CompanySwitchComponent;
  let fixture: ComponentFixture<CompanySwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanySwitchComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
