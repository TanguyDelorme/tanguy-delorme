import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesCardComponent } from './studies-card.component';

describe('StudiesCardComponent', () => {
  let component: StudiesCardComponent;
  let fixture: ComponentFixture<StudiesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudiesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudiesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
