import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuDesplegableComponent } from './components/menu-desplegable/menu-desplegable.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductosComponent } from './components/productos/productos.component';
import { Seccion } from './seccion.enum';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RecuperacionCuentaComponent } from './components/recuperacion-cuenta/recuperacion-cuenta.component';
import { CompraComponent } from './components/compra/compra.component';
import { Producto } from './producto.enum';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MenuDesplegableComponent, InicioComponent, 
      FooterComponent, ProductosComponent, IniciarSesionComponent, RegistrarseComponent, 
      ContactoComponent, RecuperacionCuentaComponent, CompraComponent]
})
export class AppComponent {
  title = 'compras-videojuegos-angular';
  Seccion = Seccion;
  Producto = Producto; 

  seccionActual: Seccion = Seccion.Inicio; //Muestra por defecto la sección Inicio
  productoActual: Producto = Producto.SpiderMan;

  mostrarContenido(seccion: Seccion): boolean {
    console.log('Seccion actual:', this.seccionActual);
    return this.seccionActual === seccion;
  }

  cambiarSeccion(seccion: Seccion): void {
    this.seccionActual = seccion;
    console.log('Seccion actual:', this.seccionActual);
  }

  cambiarCompraProducto(seccion: Seccion, producto: Producto): void {
    console.log(`Cambiando compra - Sección: ${seccion}, Producto: ${producto}`);
    this.seccionActual = seccion;
    this.productoActual = producto;
    console.log('Producto actual:', this.productoActual);
    console.log('Seccion actual:', this.seccionActual);
  }
}
