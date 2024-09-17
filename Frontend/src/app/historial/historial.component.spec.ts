import { ComponentFixture, TestBed } from '@angular/core/testing';

import { historialComponent } from './historial.component';

describe('historialComponent', () => {
  let component: historialComponent;
  let fixture: ComponentFixture<historialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [historialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(historialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
