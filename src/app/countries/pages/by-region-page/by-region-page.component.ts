import {Component, OnInit} from '@angular/core';
import {Country} from "../../interfaces/country";
import {CountriesService} from "../../services/countries.service";
import {Region} from "../../interfaces/region.type";


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html'
})
export class ByRegionPageComponent implements OnInit{
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public regions: Region[] = ['Africa','Asia','Americas','Europe','Oceania']
  public selectedRegion?: Region;

  constructor(private countriesService: CountriesService) {
  }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchRegion(region:Region):void {
    this.selectedRegion = region;
    this.isLoading = true;
    this.countriesService.searchRegion(region)
      .subscribe(countries => {
        this.isLoading = false;
        this.countries = countries
      });
  }
}
