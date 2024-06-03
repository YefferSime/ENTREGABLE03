import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component'; // Asegúrate de importar PiePaginaComponent aquí

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    PiePaginaComponent // Asegúrate de incluir PiePaginaComponent aquí
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      // Define tus rutas aquí
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
