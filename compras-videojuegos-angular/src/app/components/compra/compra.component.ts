import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../producto.enum';

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css'
})
export class CompraComponent {
  Producto = Producto;
  @Input() productoSeleccionado: Producto = Producto.SpiderMan;

  ngOnChanges() {
    console.log('Producto Seleccionado en CompraComponent:', this.productoSeleccionado);
  }
}

