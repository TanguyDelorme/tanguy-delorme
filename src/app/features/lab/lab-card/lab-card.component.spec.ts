import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabCardComponent } from './lab-card.component';

describe('LabCardComponent', () => {
  let component: LabCardComponent;
  let fixture: ComponentFixture<LabCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
