import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LateralComponent } from '../Layout/lateral/lateral.component';
import { HeaderComponent } from '../Layout/header/header.component';
import { BarraOpcComponent } from '../Layout/barra-opc/barra-opc.component';

@Component({
  selector: 'app-auditoria',
  standalone: true,
  imports: [CommonModule, LateralComponent, HeaderComponent, BarraOpcComponent],
  templateUrl: './auditoria.component.html',
  styleUrls: ['./auditoria.component.css']
})
export class auditoriaComponent  {
  solicitudes = [
    {
      numeroExpediente: '0001',
      fechaCambio: '23/03/2023',
      usuario: 'Depto. Regula',
      accionRealizada: 'Modificación de Documento',
      estado: 'Aprobado'
    },
    {
      numeroExpediente: '0002',
      fechaCambio: '14/02/2024',
      usuario: 'Depto. Regula',
      accionRealizada: 'Cambio de Estado',
      estado: 'Rechazada'
    },
    {
      numeroExpediente: '0003',
      fechaCambio: '15/08/2024',
      usuario: 'Depto. Regula',
      accionRealizada: 'Modificación de Documento',
      estado: 'Pendiente'
    },
    {
      numeroExpediente: '0004',
      fechaCambio: '21/06/2024',
      usuario: 'Depto. Regula',
      accionRealizada: 'Modificación de Documento',
      estado: 'Aprobado'
    },
    {
      numeroExpediente: '0005',
      fechaCambio: '04/03/2021',
      usuario: 'Depto. Regula',
      accionRealizada: 'Cambio de Estado',
      estado: 'Pendiente'
    }
  ];

  ngOnInit() {
    // Lógica adicional al inicializar el componente, si es necesaria
  }
}
