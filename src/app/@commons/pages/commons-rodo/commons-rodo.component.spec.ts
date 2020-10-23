import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonsRodoComponent } from './commons-rodo.component';

describe('CommonsRodoComponent', () => {
  let component: CommonsRodoComponent;
  let fixture: ComponentFixture<CommonsRodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonsRodoComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonsRodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
