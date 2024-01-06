import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuDesplegableComponent } from './components/menu-desplegable/menu-desplegable.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MenuDesplegableComponent, InicioComponent, FooterComponent]
})
export class AppComponent {
  title = 'compras-videojuegos-angular';
  mostrarContenidoInicio = true;

  onInicioClick(): void {
    this.mostrarContenidoInicio = !this.mostrarContenidoInicio;
  }
}
