import { Component, OnInit } from '@angular/core';

import { VehiculoService } from '../shared/vehiculo.service';
import { Vehiculo } from '../shared/vehiculo.model';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {
  vehiculolist: Vehiculo[];
  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit() {
    var x = this.vehiculoService.getData();
    x.snapshotChanges().subscribe(item => {
      this.vehiculolist = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.vehiculolist.push(y as Vehiculo);
      });
    });

  }

  onItemClick(emp : Vehiculo){
    this.vehiculoService.selectedVehiculo = Object.assign({},emp);
  }


}
