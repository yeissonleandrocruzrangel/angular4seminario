import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

import { Vehiculo } from './vehiculo.model';

@Injectable()
export class VehiculoService {
  vehiculoList: AngularFireList<any>;
  selectedVehiculo: Vehiculo = new Vehiculo();
  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.vehiculoList = this.firebase.list('vehiculos');
    return this.vehiculoList;
  }

  insertVehiculo(vehiculo: Vehiculo) {
    this.vehiculoList.push({
      placa: vehiculo.placa,
      tipo: vehiculo.tipo,
      cantidad: vehiculo.cantidad,
      costo: vehiculo.costo
    });
  }

  updateVehiculo(veh : Vehiculo){
     this.vehiculoList.update(veh.$key,{
       placa : veh.placa,
       tipo : veh.tipo,
       cantidad : veh.cantidad,
       costo : veh.costo
     })
  }

  deleteVehiculo(key : string){
    this.vehiculoList.remove(key);
  }

}
