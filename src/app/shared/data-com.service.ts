import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class DataCommunicationService {
    constructor(private router: Router){}

    getMiniSearchResults(brand:string[], model:string[], 
        location:string[], minPrice:number, maxPrice:number){
            this.router.navigate(['/vehicles-list']);
    }

    getSimpleSearchResults(){

    }

    getAdvancedSearchResults(){

    }
}