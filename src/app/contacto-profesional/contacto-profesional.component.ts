import { Component, OnInit } from '@angular/core';
import { profesionalService } from '../services/profesional.service';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-contacto-profesional',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './contacto-profesional.component.html',
  styleUrls: ['./contacto-profesional.component.css']
})
export class ContactoProfesionalComponent implements OnInit {
  profesionales: any[] = [];

  constructor(private profesionalService: profesionalService) {}

  async ngOnInit() {
    this.profesionales = await this.profesionalService.getProfesionales();
  }
}