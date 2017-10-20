import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { VehiculosService } from '../shared/vehiculos.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  constructor(private vehiculosService : VehiculosService ) { }

  ngOnInit() {
  }

}
