import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionDeleteComponent } from './delete.component';

describe('DeleteComponent', () => {
  let component: ActionDeleteComponent;
  let fixture: ComponentFixture<ActionDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
