import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-menu-desplegable',
    standalone: true,
    templateUrl: './menu-desplegable.component.html',
    styleUrl: './menu-desplegable.component.css',
    imports: []
})
export class MenuDesplegableComponent {
    @Output() inicioClick = new EventEmitter<void>();

    onInicioClick(): void {
    this.inicioClick.emit();
  }
}
