
export class VehicleListItem {
    private vehicleItemId: number;
    private nameVehicleAd: string;
    private imageVehicleAdPath: string[];
    private odometerVehicle: string;
    private bodyTypeVehicle: string;
    private transmissionVehicle: string;
    private engineTypeVehicle: string;
    private priceVehicle: string;
    private vehicleShortDescription: string;

    constructor(vehicleItemId: number, nameVehicleAd: string, imageVehicleAdPath: string[], 
        odometerVehicle:string, bodyTypeVehicle: string, transmissionVehicle: string,
        engineTypeVehicle: string, priceVehicle: string, vehicleShortDescription: string){
            this.vehicleItemId = vehicleItemId;
            this.nameVehicleAd = nameVehicleAd;
            this.imageVehicleAdPath = imageVehicleAdPath;
            this.odometerVehicle = odometerVehicle;
            this.bodyTypeVehicle = bodyTypeVehicle;
            this.transmissionVehicle = transmissionVehicle;
            this.engineTypeVehicle = engineTypeVehicle;
            this.priceVehicle = priceVehicle;
            this.vehicleShortDescription = vehicleShortDescription;
    }

    public getVehicleItemId (){
        return this.vehicleItemId;
    }

    public getNameVehicleAd () {
        return this.nameVehicleAd;
    }

    public getImageVehicleAdPath () {
        return this.imageVehicleAdPath;
    }

    public getOdometerVehicle () { 
        return this.odometerVehicle;
    }

    public getBodyTypeVehicle() {
        return this.bodyTypeVehicle;
    }
}