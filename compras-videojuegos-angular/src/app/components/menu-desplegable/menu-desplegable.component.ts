import { Component, EventEmitter, Output } from '@angular/core';
import { Seccion } from '../../seccion.enum';

@Component({
    selector: 'app-menu-desplegable',
    standalone: true,
    templateUrl: './menu-desplegable.component.html',
    styleUrl: './menu-desplegable.component.css',
    imports: []
})
export class MenuDesplegableComponent {
    Seccion = Seccion; //Increible pero cierto, borras esta linea y te saltra error en el .html
    @Output() cambiarSeccion = new EventEmitter<Seccion>();

    onCambiarSeccion(seccion: Seccion): void {
    this.cambiarSeccion.emit(seccion);
  }
}
