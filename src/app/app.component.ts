import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

asdasdasd

})



export class AppComponent {

  title = 'directivas';
  mensaje = '¡Hola desde Angular!';
  caracteristicas = '¡Hola desde Angular!';
  precio = '¡Hola desde Angular!';
  nombre = 'Carlos Basulto';
  numero1: number = 10;
  numero2: number = 20;

  nombres: string[] = ['Ana', 'Juan', 'Carlos'];
  usuario: { nombre: string; edad: number } = { nombre: 'Luis', edad: 30 };
  fechaActual: Date = new Date();


  esVisible: boolean = true;
 
   mostrarLista: boolean = true;
  items: { id: number; nombre: string }[] = [
    { id: 1, nombre: 'Elemento 1' },
    { id: 2, nombre: 'Elemento 2' },
    { id: 3, nombre: 'Elemento 3' }
  ];

  // Método para alternar la visibilidad de la lista
  toggleLista() {
    this.mostrarLista = !this.mostrarLista;
  }

  // Método para eliminar un elemento de la lista
  eliminarItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
  }

  // trackBy para optimizar el renderizado de la lista
  trackById(index: number, item: any): number {
    return item.id;
  }


  obtenerMensaje(): string {
    return `Bienvenido a ${this.nombre}`;
  }




}
