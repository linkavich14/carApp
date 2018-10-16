import { Component, OnInit } from '@angular/core';
import { VehicleListItem } from '../vehicle-list-item.model';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  vehicleList: VehicleListItem[];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicleList = this.vehicleService.getVehicleList();
    console.log(this.vehicleList);
  }

}
