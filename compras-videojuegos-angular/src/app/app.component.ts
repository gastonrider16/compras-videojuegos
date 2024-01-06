import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuDesplegableComponent } from './components/menu-desplegable/menu-desplegable.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductosComponent } from './components/productos/productos.component';
import { Seccion } from './seccion.enum';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MenuDesplegableComponent, InicioComponent, FooterComponent, ProductosComponent]
})
export class AppComponent {
  title = 'compras-videojuegos-angular';
  Seccion = Seccion;

  seccionActual: Seccion = Seccion.Inicio; //Muestra por defecto la sección Inicio

  mostrarContenido(seccion: Seccion): boolean {
    return this.seccionActual === seccion;
  }

  cambiarSeccion(seccion: Seccion): void {
    this.seccionActual = seccion;
  }
}
