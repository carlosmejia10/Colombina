import { Component } from '@angular/core';
import{LateralComponent} from'../Layout/lateral/lateral.component'
import{HeaderComponent} from'../Layout/header/header.component'
import{BarraOpcComponent}from'../Layout/barra-opc/barra-opc.component'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-modificar-internaacional',
  standalone: true,
  imports: [LateralComponent,HeaderComponent,BarraOpcComponent,RouterModule],
  templateUrl: './modificar-internaacional.component.html',
  styleUrl: './modificar-internaacional.component.css'
})
export class ModificarInternaacionalComponent {

}
