import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: FormIndexComponent;
  let fixture: ComponentFixture<FormIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
