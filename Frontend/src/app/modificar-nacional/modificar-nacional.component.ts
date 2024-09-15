import { Component } from '@angular/core';
import{LateralComponent} from'../Layout/lateral/lateral.component'
import{HeaderComponent} from'../Layout/header/header.component'
import{BarraOpcComponent}from'../Layout/barra-opc/barra-opc.component'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-modificar-nacional',
  standalone: true,
  imports: [LateralComponent,HeaderComponent,BarraOpcComponent,RouterModule],
  templateUrl: './modificar-nacional.component.html',
  styleUrl: './modificar-nacional.component.css'
})
export class ModificarNacionalComponent {

}
