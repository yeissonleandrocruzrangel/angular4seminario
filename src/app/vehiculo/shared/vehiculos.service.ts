import { Injectable } from '@angular/core';


import {Vehiculos} from './vehiculos.model';



@Injectable()
export class VehiculosService {

  selectedVehiculos : Vehiculos = new Vehiculos ();
  constructor() { }

}
