import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { INoticia } from '../../interfaces/inoticia.interface';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  noticias: INoticia[] = [
    {
      titulo: 'Las últimas 29 hectáreas que resisten del Nevado Santa Isabel ',
      imagen: './images/imagen_1.jpg',
      texto:
        'A la pequeña almohada de hielo del Nevado Santa Isabel no le queda más que un suspiro de su antigua blancura. Juan Felipe García, historiador convertido en guía de montaña, ha vivido con tan solo 30 años mucho más que la mayoría de sus contemporáneos. Lo cuenta mientras alcanza los 4.950 metros de la cumbre norte de este ramal de la cordillera de los Andes. No muestra ningún atisbo de sofoco entre pecho y espalda...',
      fecha: '2023-01-01',
    },
    {
      titulo: 'La playa con el azul más intenso de toda Andalucía',
      imagen: './images/imagen_2.jpg',
      texto:
        'A medio camino entre Carboneras y Agua Amarga, La Playa de los Muertos es un tesoro playero en el entorno Natural del Cabo de Gata-Níjar. Se beneficia así de un alto grado de protección, además de una gran belleza salvaje. Viendo el paisaje vienen a la mente las inolvidables bandas sonoras que Ennio Morricone componía para los spaghetti westerns de Sergio Leone...',
      fecha: '2024-07-01',
    },
  ];

  nuevaNoticia: INoticia = {
    titulo: '',
    imagen: '',
    texto: '',
    fecha: '',
  };

  ngOnInit(): void {
    // Al inicializar el componente, agregamos las noticias iniciales al DOM
    this.noticias.forEach((noticia: INoticia) =>
      this.agregarNoticiaAlDOM(noticia)
    );
  }

  // Maneja el evento de clic para agregar una nueva noticia
  alHacerClicEnAgregarNoticia(evento: Event, noticia: INoticia): void {
    evento.preventDefault();
    this.agregarNoticia(noticia);
  }

  // Agrega una noticia al array de noticias y al DOM
  agregarNoticia(noticia: INoticia): void {
    // Verifica que todos los campos estén completos
    if (
      !noticia.titulo ||
      !noticia.imagen ||
      !noticia.texto ||
      !noticia.fecha
    ) {
      this.mostrarMensajeDeError('Por favor, completa todos los campos.');
    } else {
      // Agrega la noticia al array de noticias
      this.noticias.push({ ...noticia });
      // Agrega la noticia al DOM
      this.agregarNoticiaAlDOM(noticia);
      // Resetea el formulario
      this.nuevaNoticia = { titulo: '', imagen: '', texto: '', fecha: '' };
      // Limpia el mensaje de error
      this.mostrarMensajeDeError('');
    }
  }

  // Agrega una noticia al DOM
  agregarNoticiaAlDOM(noticia: INoticia): void {
    const contenedorNoticias = document.getElementById(
      'contenedor-noticias'
    ) as HTMLElement;

    // Crear elementos de la noticia
    const divNoticia = document.createElement('div');
    divNoticia.className = 'noticia';

    const titulo = document.createElement('h3');
    titulo.textContent = noticia.titulo;

    const imagen = document.createElement('img');
    imagen.src = noticia.imagen;
    imagen.alt = noticia.titulo;

    const texto = document.createElement('p');
    texto.textContent = noticia.texto;

    const fecha = document.createElement('p');
    fecha.textContent = `Fecha de publicación: ${noticia.fecha}`;

    // Crear línea horizontal
    const hr = document.createElement('hr');

    // Agregar elementos al div de la noticia
    divNoticia.append(titulo, imagen, texto, fecha);
    // Agregar la noticia al contenedor de noticias
    contenedorNoticias.append(divNoticia);
    // Agregar línea horizontal después de la noticia
    contenedorNoticias.append(hr);
  }

  // Muestra un mensaje de error
  mostrarMensajeDeError(mensaje: string): void {
    const mensajeDeError = document.getElementById(
      'mensaje-de-error'
    ) as HTMLElement;
    mensajeDeError.textContent = mensaje;
  }
}
