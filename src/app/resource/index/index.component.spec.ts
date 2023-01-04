import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceIndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: ResourceIndexComponent;
  let fixture: ComponentFixture<ResourceIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
