import { Injectable } from "@angular/core";
import { VehicleListItem } from "./vehicle-list-item.model";
import { Subject } from "rxjs";

@Injectable()
export class VehicleService {
    vehicleListChanged = new Subject<VehicleListItem[]>();

    private vehiclesList: VehicleListItem[] = [
        new VehicleListItem(101,"Peugeot 206 1.6Lt", [
            "http://placekitten.com/362/200",
            "http://placekitten.com/362/200",
            "http://placekitten.com/362/200"
        ],"100,000", "Hatch", "Manual", "Gasoline", "$100,000", "Gas Saver vehicle"),
        new VehicleListItem(123,"Peugeot 207 1.6Lt", [
            "http://placekitten.com/362/200",
            "http://placekitten.com/362/200",
            "http://placekitten.com/362/200"
        ],"10,000", "Coupe", "Automatic", "Gasoline", "$150,000", "Gas Saver vehicle"),
        new VehicleListItem(101,"Peugeot 208 2.6Lt", [
            "http://placekitten.com/362/200",
            "http://placekitten.com/362/200",
            "http://placekitten.com/362/200"
        ],"100,000", "Hatch", "Manual", "Gasoline", "$20,000", "Gas Saver vehicle")
    ];

    constructor(){}

    getVehicleList(){
        return this.vehiclesList.slice();
    }

    setVehicleListItem(newList: VehicleListItem[]){
        this.vehiclesList = newList;
        this.vehicleListChanged.next(this.vehiclesList.slice());
    }

    getSingleVehicleItem(vehicleId: number){

    }

    deleteSingleVehicleItem(vehicleId: number){

    }

    updateSingleVehicleItem(vehicleId: number){

    }

}