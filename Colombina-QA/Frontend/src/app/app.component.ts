import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Layout/header/header.component'; 
import { LateralComponent } from './Layout/lateral/lateral.component'; 
import {CrearTramiteComponent} from './crear-tramite/crear-tramite.component'
import { TablaTramiteComponent } from './tabla-tramite/tabla-tramite.component'; 
import { BarraOpcComponent } from './Layout/barra-opc/barra-opc.component'; 
import {ArrastrarComponent} from './arrastrar/arrastrar.component';
import {LoginComponent} from './Login/login/login.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LateralComponent, BarraOpcComponent, TablaTramiteComponent,CrearTramiteComponent,ArrastrarComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
}
