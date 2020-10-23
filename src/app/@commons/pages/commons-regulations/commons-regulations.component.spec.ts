import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CommonsRegulationsComponent } from './commons-regulations.component';

describe('CommonsRegulationsComponent', () => {
  let component: CommonsRegulationsComponent;
  let fixture: ComponentFixture<CommonsRegulationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CommonsRegulationsComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonsRegulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
