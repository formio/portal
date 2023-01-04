import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCreateComponent } from './create.component';

describe('CreateComponent', () => {
  let component: ActionCreateComponent;
  let fixture: ComponentFixture<ActionCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
