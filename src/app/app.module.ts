import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { VehiculosComponent } from './vehiculo/vehiculos/vehiculos.component';
import { VehiculosListComponent } from './vehiculo/vehiculos-list/vehiculos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculoComponent,
    VehiculosComponent,
    VehiculosListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
