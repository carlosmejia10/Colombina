import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarInternaacionalComponent } from './modificar-internaacional.component';

describe('ModificarInternaacionalComponent', () => {
  let component: ModificarInternaacionalComponent;
  let fixture: ComponentFixture<ModificarInternaacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarInternaacionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarInternaacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
