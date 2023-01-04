import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionViewComponent } from './view.component';

describe('ViewComponent', () => {
  let component: ActionViewComponent;
  let fixture: ComponentFixture<ActionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
