import { ComponentFixture, TestBed } from '@angular/core/testing';

import { auditoriaComponent } from './auditoria.component';

describe('auditoriaComponent', () => {
  let component: auditoriaComponent;
  let fixture: ComponentFixture<auditoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [auditoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(auditoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
