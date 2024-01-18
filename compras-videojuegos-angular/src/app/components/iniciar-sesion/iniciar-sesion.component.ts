import { Component, EventEmitter, Output } from '@angular/core';
import { MenuDesplegableComponent } from '../menu-desplegable/menu-desplegable.component';
import { Seccion } from '../../seccion.enum';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent extends MenuDesplegableComponent{
}
