import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { profesionalListComponent } from '../profesional-list/profesional-list.component';
import { profesionalService } from '../services/profesional.service';

@Component({
  selector: 'app-destacados',
  standalone: true,
  imports: [CommonModule, profesionalListComponent],
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css']
})
export class DestacadosComponent {
  profesionales: any[] = [];
  minHonorarios = 1000;

  constructor(private profesionalService: profesionalService) {
    this.cargarProfesionales();
  }

  async cargarProfesionales() {
    this.profesionales = await this.profesionalService.getProfesionales();
  }

  get destacados() {
    return this.profesionales.filter(prof => prof.honorarios > this.minHonorarios);
    // Si quieres incluir los de honorarios igual a 1000, usa >= en vez de >
  }
}