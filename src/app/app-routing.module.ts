import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



// import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { CatalogosComponent } from './catalogos/catalogos.component';

import { CsesionComponent } from './csesion/csesion.component';
import { GestionComponent } from './gestion/gestion.component';
import { PlantillasComponent } from './plantillas/plantillas.component';
import { ReporteadorComponent } from './reporteador/reporteador.component';
// import { BrowserModule } from '@angular/platform-browser';

    const routes: Routes = [
      // {
      //   path: '',
      //   component:BienvenidoComponent
      // },
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
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
