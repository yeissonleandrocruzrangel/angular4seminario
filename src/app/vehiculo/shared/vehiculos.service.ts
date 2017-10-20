import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import {Vehiculos} from './vehiculos.model';



@Injectable()
export class VehiculosService {
  vehiculosList : AngularFireList<any>;
  selectedVehiculos : Vehiculos = new Vehiculos ();
  constructor(private firebase : AngularFireDatabase) { }

  getData(){
    this.vehiculosList = this.firebase.list('vehiculo');
    return this.vehiculosList;
  }

  insertVehiculos(vehiculos : Vehiculos){
    this.vehiculosList.push({
      placa : vehiculos.placa,
      tipocombustible : vehiculos.tipocombustible,
      cantidad:vehiculos.cantidad,
      valor : vehiculos.valor
    
    })
  }
}
