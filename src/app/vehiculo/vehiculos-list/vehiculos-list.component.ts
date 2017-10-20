import { Component, OnInit } from '@angular/core';
import { AngularFireList } from 'angularFire2/database';

import { VehiculosService } from '../shared/vehiculos.service';
import { Vehiculos } from '../shared/vehiculos.model';

@Component({
  selector: 'app-vehiculos-list',
  templateUrl: './vehiculos-list.component.html',
  styleUrls: ['./vehiculos-list.component.css']
})
export class VehiculosListComponent implements OnInit {
  employeelist : AngularFireList<Vehiculos>;
  constructor(private vehiculosService : VehiculosService ) { }

  ngOnInit() {
    this.vehiculosService.getData();
  }

}
