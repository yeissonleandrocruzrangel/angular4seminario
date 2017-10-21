import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { VehiculoService } from '../shared/vehiculo.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit() {
    this.resetForm();
  }


  onSubmit(form: NgForm) {
    if (form.value.$key == null)
      this.vehiculoService.insertVehiculo(form.value);
    else
      this.vehiculoService.updateVehiculo(form.value);
    this.resetForm(form);
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.vehiculoService.selectedVehiculo = {
      $key: null,
      placa: '',
      tipo: '',
      cantidad: '',
      costo: 0,
    }
  }

  onDelete(form: NgForm) {
    if (confirm('Seguro de eliminar este registro ?') == true) {
      this.vehiculoService.deleteVehiculo(form.value.$key);
      this.resetForm(form);
    }
  }
}
