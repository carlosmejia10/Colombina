import { Routes } from '@angular/router';

import {ArrastrarComponent} from './arrastrar/arrastrar.component'
import {LoginComponent} from './Login/login/login.component'
import {CrearTramiteComponent} from './crear-tramite/crear-tramite.component'
import{TablaTramiteComponent} from'./tabla-tramite/tabla-tramite.component'
import{ConfirmacionComponent} from'./confirmacion/confirmacion.component'
import{ModificarInternaacionalComponent} from'./modificar-internacional/modificar-internaacional.component'
import {ModificarNacionalComponent  } from './modificar-nacional/modificar-nacional.component'
import{RenovarComponent} from'./renovar/renovar.component'
import{NotificacionComponent} from'./notificacion/notificacion.component'
import { historialComponent } from './historial/historial.component';
import { calendarioComponent } from './calendario/calendario.component';
import { estadisticasComponent } from './estadisticas/estadisticas.component';
import { auditoriaComponent } from './auditoria/auditoria.component';
import {InfoTramiteComponent} from './info-tramite/info-tramite.component'

export const routes: Routes = [
  {
    path: 'crearTramite',
    component: CrearTramiteComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'arrastrar',
    component: ArrastrarComponent
  },
  {
    path: 'tramites',
    component: TablaTramiteComponent
  },
  {
    path: 'confirmacion',
    component: ConfirmacionComponent
  },
  {
    path: 'modificarInternacional',
    component: ModificarInternaacionalComponent
  },
  {
    path: 'modificarNacional',
    component: ModificarNacionalComponent
  },
  {
    path: 'renovar',
    component: RenovarComponent
  },
  {
  path: 'notificaciones',
    component: NotificacionComponent
  },
  {
    path: 'historial',
      component: historialComponent
  },
  {
    path: 'calendario',
      component: calendarioComponent
  }
  ,
  {
    path: 'estadisticas',
      component: estadisticasComponent
  },
  {
    path: 'auditoria',
      component: auditoriaComponent
  },
  {
    path : 'infoTramite',
    component: InfoTramiteComponent
  }
];
