import { Component, OnInit } from '@angular/core';

import { VehiculosService } from '../shared/vehiculos.service';

@Component({
  selector: 'app-vehiculos-list',
  templateUrl: './vehiculos-list.component.html',
  styleUrls: ['./vehiculos-list.component.css']
})
export class VehiculosListComponent implements OnInit {

  constructor(private vehiculosService : VehiculosService ) { }

  ngOnInit() {
  }

}
