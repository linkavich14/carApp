import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { VehicleListItem } from '../vehicle-list-item.model';

@Component({
  selector: 'app-vehicle-item',
  templateUrl: './vehicle-item.component.html',
  styleUrls: ['./vehicle-item.component.css']
})
export class VehicleItemComponent implements OnInit {
  vehicleList: VehicleListItem [];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicleList = this.vehicleService.getVehicleList();
    
  }

}
