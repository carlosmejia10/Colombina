import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LateralComponent } from '../Layout/lateral/lateral.component';
import { HeaderComponent } from '../Layout/header/header.component';
import { BarraOpcComponent } from '../Layout/barra-opc/barra-opc.component';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [CommonModule, LateralComponent, HeaderComponent, BarraOpcComponent],
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class calendarioComponent implements OnInit {
  anio: number = 0;
  mes: number = 0;
  nombreMes: string = '';
  calendario: any[] = [];

  private meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  ngOnInit() {
    const hoy = new Date();
    this.anio = hoy.getFullYear();
    this.mes = hoy.getMonth(); // Retorna el número de mes (0 para enero, 1 para febrero, etc.)
    this.nombreMes = this.meses[this.mes];
    this.generarCalendario(); // Genera el calendario al cargar
  }

  generarCalendario() {
    const primerDia = new Date(this.anio, this.mes, 1).getDay(); // Día de la semana del primer día del mes
    const diasEnMes = new Date(this.anio, this.mes + 1, 0).getDate(); // Número de días en el mes actual
    let diaActual = 1;

    this.calendario = [];
    let semana = [];

    // Ajustar para que el calendario empiece en lunes
    const primerDiaAjustado = primerDia === 0 ? 6 : primerDia - 1;

    // Rellenar la primera semana con espacios vacíos hasta el primer día del mes
    for (let i = 0; i < 7; i++) {
      if (i < primerDiaAjustado) {
        semana.push({ numero: null });
      } else {
        semana.push({ numero: diaActual++ });
      }
    }
    this.calendario.push(semana);

    // Rellenar el resto del mes
    while (diaActual <= diasEnMes) {
      semana = [];
      for (let i = 0; i < 7; i++) {
        if (diaActual <= diasEnMes) {
          semana.push({ numero: diaActual++ });
        } else {
          semana.push({ numero: null });
        }
      }
      this.calendario.push(semana);
    }
  }

  prevMonth() {
    if (this.mes === 0) {
      this.mes = 11; // Si es enero, cambia a diciembre del año anterior
      this.anio--;
    } else {
      this.mes--;
    }
    this.nombreMes = this.meses[this.mes]; // Actualiza el nombre del mes
    this.generarCalendario(); // Genera el nuevo calendario
  }

  nextMonth() {
    if (this.mes === 11) {
      this.mes = 0; // Si es diciembre, cambia a enero del siguiente año
      this.anio++;
    } else {
      this.mes++;
    }
    this.nombreMes = this.meses[this.mes]; // Actualiza el nombre del mes
    this.generarCalendario(); // Genera el nuevo calendario
  }
}
