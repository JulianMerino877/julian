import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { DestacadosComponent } from './destacados/destacados.component';

export const routes: Routes = [
  { path: '', redirectTo: '/profesional-list', pathMatch: 'full' },
  {
    path: 'profesional-list',
    loadComponent: () =>
      import('./profesional-list/profesional-list.component').then(
        (m) => m.profesionalListComponent
      )
  },
  // Ruta para mostrar texto en /profesional-detail
  {
    path: 'profesional-detail',
    loadComponent: () =>
      import('./profesional-detail/profesional-detail.component').then(
        (m) => m.profesionalDetailComponent
      )
  },
  // Ruta parametrizada para mostrar detalle por id
  {
    path: 'profesional-detail/:id',
    loadComponent: () =>
      import('./profesional-detail/profesional-detail.component').then(
        (m) => m.profesionalDetailComponent
      )
  },
  { path: 'destacados', component: DestacadosComponent },
  { path: 'inicio', component: InicioComponent },
  {
    path: 'contacto-profesional',
    loadComponent: () => import('./contacto-profesional/contacto-profesional.component').then(m => m.ContactoProfesionalComponent),
    children: [
      {
        path: 'formulario/:id',
        loadComponent: () => import('./contacto-profesional/formulario/formulario.component').then(m => m.FormularioComponent)
      },
      {
        path: 'mensaje-enviado/:id',
        loadComponent: () => import('./contacto-profesional/mensaje-enviado/mensaje-enviado.component').then(m => m.MensajeEnviadoComponent)
      }
    ]
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes);