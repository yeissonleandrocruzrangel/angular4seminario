import { Component, OnInit } from '@angular/core';

import { VehiculosService } from './shared/vehiculos.service';


@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css'],
  providers: [VehiculosService]
})
export class VehiculoComponent implements OnInit {

  constructor(private vehiculosService : VehiculoComponent ) { }

  ngOnInit() {
  }

}
