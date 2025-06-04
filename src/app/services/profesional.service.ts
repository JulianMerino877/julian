import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { profesional } from '../models/profesional';

@Injectable({
  providedIn: 'root'
})
export class profesionalService {

  constructor() { }

  profesionales: profesional[] = [
      { id: "1", nombre: 'juan', especialidad: 'Literatura', honorarios: 1000, imagen: 'icons/juan.png' },
      { id: "2", nombre: 'maria', especialidad: 'Matemáticas', honorarios: 1200, imagen: 'icons/maria.png' },
      { id: "3", nombre: 'pedro', especialidad: 'Ciencias', honorarios: 800, imagen: 'icons/pedro.png' }
    ];

  getProfesionales(): Promise<profesional[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.profesionales);
      }, 2000);
    });
  }

  getProfesionalById(id: string | null): Promise<profesional | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const profesional = this.profesionales.find((profesional) => profesional.id === id);
        resolve(profesional);
      }, 2000);
    });
  }
}
