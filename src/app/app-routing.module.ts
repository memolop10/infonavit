import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { CursoComponent } from './curso/curso.component';
import { DestinoComponent } from './destino/destino.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { TelementoComponent } from './telemento/telemento.component';

import { EaprendizajeComponent } from './eaprendizaje/eaprendizaje.component';
import { FiltroComponent } from './filtro/filtro.component';
import { CsesionComponent } from './csesion/csesion.component';
import { GestionComponent } from './gestion/gestion.component';
import { PlantillasComponent } from './plantillas/plantillas.component';
import { ReporteadorComponent } from './reporteador/reporteador.component';

    const routes: Routes = [
      {
        path: 'bienvenido',
        component:BienvenidoComponent
      },
      {
        path: '',
        component:CatalogosComponent
      },
      {
        path: 'curso',
        component:CursoComponent
      },
      {
        path: 'destino',
        component:DestinoComponent
      },
      {
        path: 'ubicacion',
        component:UbicacionComponent
      },
      {
        path: 'telemento',
        component:TelementoComponent
      },
      {
        path: 'eaprendizaje',
        component:EaprendizajeComponent
      },
      {
        path: 'filtro',
        component:FiltroComponent
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
