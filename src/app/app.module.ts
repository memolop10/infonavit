import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { PlantillasComponent } from './plantillas/plantillas.component';
import { ReporteadorComponent } from './reporteador/reporteador.component';
import { GestionComponent } from './gestion/gestion.component';
import { CsesionComponent } from './csesion/csesion.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    CatalogosComponent,
    PlantillasComponent,
    ReporteadorComponent,
    GestionComponent,
    CsesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
