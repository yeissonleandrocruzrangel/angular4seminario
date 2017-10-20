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
    this.resetForm();
  }



  onSubmit(form : NgForm)
  {
    if (form.value.$key=='')
      this.vehiculosService.insertVehiculos(form.value);
      else
      this.vehiculosService.updateVehiculos(form.value);
    this.resetForm(form)
  }

  resetForm(form? : NgForm)
  {
    if (form != null)
      form.reset();
    this.vehiculosService.selectedVehiculos = {
      $key : '',
      placa : '',
      tipocombustible : '',
      cantidad : 0,
      valor : 0,
    }
  }

  onDelete(form : NgForm){
    if(confirm('Esta seguro de elminar este vehiculo ?')==true)
    {
      this.vehiculosService.deleteVehiculos(form.value.$key);
      this.resetForm(form);
    }
  }
}
