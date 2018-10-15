import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleDetailComponent } from './vehicles/vehicle-detail/vehicle-detail.component';
import { VehicleEditComponent } from './vehicles/vehicle-edit/vehicle-edit.component';
import { VehicleListComponent } from './vehicles/vehicle-list/vehicle-list.component';
import { VehicleItemComponent } from './vehicles/vehicle-item/vehicle-item.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MiniSearchComponent } from './search/mini-search/mini-search.component';
import { AdvancedSearchComponent } from './search/advanced-search/advanced-search.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RefineSearchComponent } from './search/refine-search/refine-search.component';
import { DataCommunicationService } from './shared/data-com.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    VehiclesComponent,
    VehicleDetailComponent,
    VehicleEditComponent,
    VehicleListComponent,
    VehicleItemComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    MiniSearchComponent,
    AdvancedSearchComponent,
    FooterComponent,
    RefineSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DataCommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
