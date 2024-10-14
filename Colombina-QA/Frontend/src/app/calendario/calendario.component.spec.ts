import { ComponentFixture, TestBed } from '@angular/core/testing';

import { calendarioComponent } from './calendario.component';

describe('calendarioComponent', () => {
  let component: calendarioComponent;
  let fixture: ComponentFixture<calendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [calendarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(calendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
