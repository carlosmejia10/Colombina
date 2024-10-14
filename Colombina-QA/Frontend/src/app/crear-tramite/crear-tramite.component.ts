import { Component } from '@angular/core';
import{LateralComponent} from'../Layout/lateral/lateral.component'
import{HeaderComponent} from'../Layout/header/header.component'
import{BarraOpcComponent}from'../Layout/barra-opc/barra-opc.component'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-crear-tramite',
  standalone: true,
  imports: [LateralComponent,HeaderComponent,BarraOpcComponent,RouterModule],
  templateUrl: './crear-tramite.component.html',
  styleUrl: './crear-tramite.component.css'
})
export class CrearTramiteComponent {

}
