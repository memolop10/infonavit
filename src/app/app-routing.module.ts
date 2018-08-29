import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogosComponent } from './catalogos/catalogos.component';
import { CsesionComponent } from './csesion/csesion.component';
import { GestionComponent } from './gestion/gestion.component';
import { PlantillasComponent } from './plantillas/plantillas.component';
import { ReporteadorComponent } from './reporteador/reporteador.component';

    const routes: Routes = [
      {
        path: 'catalogos',
        component:CatalogosComponent
      },
      {
        path: 'csesion',
        component:CsesionComponent
      },
      {
        path: 'gestion',
        component:GestionComponent
      },
      {
        path: 'plantillas',
        component:PlantillasComponent
      },
      {
        path: 'reporteador',
        component:ReporteadorComponent
      },
    ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
