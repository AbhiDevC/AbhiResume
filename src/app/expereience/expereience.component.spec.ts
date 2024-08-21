import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpereienceComponent } from './expereience.component';

describe('ExpereienceComponent', () => {
  let component: ExpereienceComponent;
  let fixture: ComponentFixture<ExpereienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpereienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpereienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
