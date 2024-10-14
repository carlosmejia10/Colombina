// historial.component.ts
import{Tramite} from'../tramite';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import{LateralComponent} from'../Layout/lateral/lateral.component'
import{HeaderComponent} from'../Layout/header/header.component'
import{BarraOpcComponent}from'../Layout/barra-opc/barra-opc.component'

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [CommonModule,LateralComponent,HeaderComponent,BarraOpcComponent],
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class historialComponent {
  solicitudes = [
    {
      producto: 'Salsa Tomate',
      pais: 'Colombia',
      tipoTramite: 'Modificación Registro Sanitario Nacional',
      estado: 'Aprobado'
    },
    {
      producto: 'Bom bom bum',
      pais: 'Estados Unidos',
      tipoTramite: 'Renovación Registro Sanitario Internacional',
      estado: 'Rechazada'
    },
    {
      producto: 'Chomelos',
      pais: 'Panamá',
      tipoTramite: 'Nuevo Registro Sanitario Internacional',
      estado: 'Pendiente'
    },
    {
      producto: 'ChocoBreak',
      pais: 'Colombia',
      tipoTramite: 'Modificación Registro Sanitario Nacional',
      estado: 'Pendiente'
    }
  ];
}
