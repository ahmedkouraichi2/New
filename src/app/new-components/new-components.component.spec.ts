import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComponentsComponent } from './new-components.component';

describe('NewComponentsComponent', () => {
  let component: NewComponentsComponent;
  let fixture: ComponentFixture<NewComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
