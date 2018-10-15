import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataCommunicationService } from 'src/app/shared/data-com.service';

declare var $: any;

@Component({
  selector: 'app-mini-search',
  templateUrl: './mini-search.component.html',
  styleUrls: ['./mini-search.component.css']
})
export class MiniSearchComponent implements OnInit, AfterViewInit {

  constructor(private dataCommService: DataCommunicationService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    $('.selectpicker').selectpicker();
  }

  onMiniSearch(form: NgForm){
    const brand = form.value.brandPicker;
    const model = form.value.modelPicker;
    const location = form.value.locationPicker;
    const minPrice = form.value.minPricePicker;
    const maxPrice = form.value.maxPricePicker;

    this.dataCommService.getMiniSearchResults(brand, model, location, minPrice, maxPrice)
  }

}
