import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { CatalogosComponent } from './catalogos/catalogos.component';
import { PlantillasComponent } from './plantillas/plantillas.component';
import { ReporteadorComponent } from './reporteador/reporteador.component';
import { GestionComponent } from './gestion/gestion.component';
import { CsesionComponent } from './csesion/csesion.component';
import { AppRoutingModule } from './/app-routing.module';
import { CursoComponent } from './curso/curso.component';
import { DestinoComponent } from './destino/destino.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { TelementoComponent } from './telemento/telemento.component';
import { EaprendizajeComponent } from './eaprendizaje/eaprendizaje.component';
import { FiltroComponent } from './filtro/filtro.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
   
    CatalogosComponent,
    PlantillasComponent,
    ReporteadorComponent,
    GestionComponent,
    CsesionComponent,
    BienvenidoComponent,
    CursoComponent,
    DestinoComponent,
    UbicacionComponent,
    TelementoComponent,
    EaprendizajeComponent,
    FiltroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
