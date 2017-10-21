import { Component, OnInit } from '@angular/core';

import { VehiculoService } from './shared/vehiculo.service'

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css'],
  providers :[VehiculoService]
})
export class VehiculosComponent implements OnInit {

  constructor(private vehiculoService : VehiculoService) { }

  ngOnInit() {
  }

}
