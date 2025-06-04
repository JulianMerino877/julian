import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, UpperCasePipe, NgIf } from '@angular/common';
import { profesionalService } from '../services/profesional.service';
import { profesional } from '../models/profesional';
import { NombrePropioPipe } from '../nombre-propio.pipe';

@Component({
  selector: 'app-profesional-detail',
  standalone: true,
  imports: [CommonModule, NgIf, NombrePropioPipe],
  templateUrl: './profesional-detail.component.html',
  styleUrls: ['./profesional-detail.component.css']
})
export class profesionalDetailComponent implements OnInit {
  profesional: profesional | undefined;

  constructor(
    private route: ActivatedRoute,
    private profesionalService: profesionalService
  ) { }

  ngOnInit() {
    // Obtenemos el id de la URL
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.profesionalService.getProfesionalById(id)
        .then((prof) => {
          this.profesional = prof;
        })
        .catch(error => console.error('Error al obtener el profesional:', error));
    }
  }
}