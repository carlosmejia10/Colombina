import { Component } from '@angular/core';
import{LateralComponent} from'../Layout/lateral/lateral.component'
import{HeaderComponent} from'../Layout/header/header.component'
import{BarraOpcComponent}from'../Layout/barra-opc/barra-opc.component'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-notificacion',
  standalone: true,
  imports: [LateralComponent,HeaderComponent,BarraOpcComponent,RouterModule],
  templateUrl: './notificacion.component.html',
  styleUrl: './notificacion.component.css'
})
export class NotificacionComponent {

}
