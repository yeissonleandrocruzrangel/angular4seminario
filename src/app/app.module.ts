import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { VehiculosComponent } from './vehiculo/vehiculos/vehiculos.component';
import { VehiculosListComponent } from './vehiculo/vehiculos-list/vehiculos-list.component';
import { environment } from '../environments/environment'
@NgModule({
  declarations: [
    AppComponent,
    VehiculoComponent,
    VehiculosComponent,
    VehiculosListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
