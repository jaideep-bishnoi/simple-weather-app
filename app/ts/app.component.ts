import {Component} from 'angular2/core';
import {WeatherListComponent} from "./weather/weather-list.component";
import {WeatherSearchComponent} from "./weather/weather-search.component";

@Component({
    selector: 'my-app',
    template: '<header><h1 class="col-lg-12 text-center v-center">Simple Weather App</h1></header><h3 class="col-lg-12 text-center v-center">Search Your City Below</h3><weather-search></weather-search><weather-list></weather-list>',
    directives: [WeatherListComponent, WeatherSearchComponent]
})

export class AppComponent {
	
}
