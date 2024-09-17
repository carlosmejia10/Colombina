import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LateralComponent } from '../Layout/lateral/lateral.component';
import { HeaderComponent } from '../Layout/header/header.component';
import { BarraOpcComponent } from '../Layout/barra-opc/barra-opc.component';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [CommonModule, LateralComponent, HeaderComponent, BarraOpcComponent],
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class estadisticasComponent {

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.renderTramitesNacionales();
    this.renderDocumentosDevueltos();
    this.renderPaisesTramitesInternacionales();
    this.renderTramitesNacionalesAnio();
    this.renderTramitesInternacionalesAnio();
  }

  renderTramitesNacionales() {
    new Chart("tramitesNacionales", {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Trámites Nacionales',
          data: [12, 19, 3, 5, 2, 3, 7],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      }
    });
  }

  renderDocumentosDevueltos() {
    new Chart("documentosDevueltos", {
      type: 'doughnut',
      data: {
        labels: ['Ficha técnica', 'Formato de solicitud', 'Certificados', 'Certificado de aditivos'],
        datasets: [{
          label: 'Documentos devueltos',
          data: [38.4, 22.5, 30.8, 8.1],
          backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0']
        }]
      }
    });
  }

  renderPaisesTramitesInternacionales() {
    new Chart("paisesTramitesInternacionales", {
      type: 'polarArea',
      data: {
        labels: ['Guatemala', 'Perú', 'Ecuador', 'Chile'],
        datasets: [{
          label: 'Trámites Internacionales',
          data: [40, 30, 15, 25],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
        }]
      }
    });
  }

  renderTramitesNacionalesAnio() {
    new Chart("tramitesNacionalesAnio", {
      type: 'line',
      data: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
        datasets: [{
          label: 'Trámites Nacionales del Año',
          data: [10, 20, 30, 40, 35, 45, 50],
          borderColor: '#FF6384',
          fill: true,
          backgroundColor: 'rgba(255,99,132,0.2)'
        }]
      }
    });
  }

  renderTramitesInternacionalesAnio() {
    new Chart("tramitesInternacionalesAnio", {
      type: 'line',
      data: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
        datasets: [{
          label: 'Trámites Internacionales del Año',
          data: [15, 25, 35, 30, 45, 55, 60],
          borderColor: '#36A2EB',
          fill: true,
          backgroundColor: 'rgba(54,162,235,0.2)'
        }]
      }
    });
  }
}