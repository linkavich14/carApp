import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { VehiclesComponent } from "./vehicles/vehicles.component";
import { SearchComponent } from "./search/search.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/search', pathMatch:'full'},
    {path: 'search', component: SearchComponent},
    {path: 'vehicles-list', component: VehiclesComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}