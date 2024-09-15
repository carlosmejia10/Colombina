import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpolicitudPBEComponent } from './spolicitud-pbe.component';

describe('SpolicitudPBEComponent', () => {
  let component: SpolicitudPBEComponent;
  let fixture: ComponentFixture<SpolicitudPBEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpolicitudPBEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpolicitudPBEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
