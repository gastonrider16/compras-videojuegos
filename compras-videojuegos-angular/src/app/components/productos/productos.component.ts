import { Component, EventEmitter, Output } from '@angular/core';
import { Seccion } from '../../seccion.enum';
import { Producto } from '../../producto.enum';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  Seccion = Seccion; 
  Producto = Producto;
  @Output() cambiarCompraProducto = new EventEmitter<{seccion: Seccion, producto: Producto}>();//@Output() cambiarSeccion = new EventEmitter<Seccion, Producto>(); DA ERROR

  onCambiarCompraProducto(seccion: Seccion, producto: Producto): void {
    this.cambiarCompraProducto.emit({seccion, producto});
  }
}
