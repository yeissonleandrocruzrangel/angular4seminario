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
  vehiculosList : Vehiculos[];
  constructor(private vehiculosService : VehiculosService ) { }

  ngOnInit() {
    var x= this.vehiculosService.getData();
    x.snapshotChanges().subscribe(item =>{
      this.vehiculosList = [];
      item.forEach(element=>{
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.vehiculosList.push(y as Vehiculos);
      });
    
    });
  }
onItemClick(veh : Vehiculos){
  this.vehiculosService.selectedVehiculos = veh;
}
}
