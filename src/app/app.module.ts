import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { VehiculoComponent } from './vehiculos/vehiculo/vehiculo.component';
import { VehiculoListComponent } from './vehiculos/vehiculo-list/vehiculo-list.component';
import {environment} from '../environments/environment'


@NgModule({
  declarations: [
    AppComponent,
    VehiculosComponent,
    VehiculoComponent,
    VehiculoListComponent
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
