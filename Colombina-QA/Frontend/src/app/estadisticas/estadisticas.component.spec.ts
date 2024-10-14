
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { estadisticasComponent } from './estadisticas.component';

describe('estadisticasComponent', () => {
  let component: estadisticasComponent;
  let fixture: ComponentFixture<estadisticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [estadisticasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(estadisticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
